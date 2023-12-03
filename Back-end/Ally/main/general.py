import json
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserDetails
from .serializers import UserNamesSerializer, StudentListSerializer, AlumniListSerializer
from django.db.models import Q, F, Value, FloatField, Sum, Case, When
from rest_framework.pagination import PageNumberPagination



class EndorsementAPIView(APIView):
    def post(self, request, *args, **kwargs):
        endorsing_user_id = request.data.get('endorser_id')
        endorsed_user_id = request.data.get('endorsed_id')

        try:
            endorsing_user = UserDetails.objects.get(id=endorsing_user_id)
            endorsed_user = UserDetails.objects.get(id=endorsed_user_id)
        except UserDetails.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        endorsements = json.loads(endorsed_user.endorsements)
        
        if endorsing_user_id not in endorsements:
            endorsements.append(endorsing_user_id)
            endorsed_user.endorsements = json.dumps(endorsements)
            endorsed_user.save()
            return Response({"message": "User endorsed successfully"}, status=status.HTTP_200_OK)
        
        return Response({"message": "User already endorsed"}, status=status.HTTP_200_OK)



class EndorsementListAPIView(APIView):
    def get(self, request, user_id, *args, **kwargs):

        try:
            user = UserDetails.objects.get(id=user_id)
        except UserDetails.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        endorsements = json.loads(user.endorsements)        
        endorsing_users = UserDetails.objects.filter(id__in=endorsements)
        serializer = UserNamesSerializer(endorsing_users, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)



class CustomPageNumberPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size' 
    max_page_size = 100



class GetStudentListView(APIView):
    pagination_class = CustomPageNumberPagination

    def post(self, request, *args, **kwargs):

        institute_name = request.data.get('instituteName')
        tech_stacks = request.data.get('techStacks', None)
        name = request.data.get('name', None)
        year = request.data.get('year', None)
        branch = request.data.get('branch', None)

        users = UserDetails.objects.filter(institute=institute_name).filter(type='Student')

        if name is not None:
            users = users.filter(Q(firstName__icontains=name) | Q(lastName__icontains=name))

        if year is not None:
            users = users.filter(yearOfPassing=year)

        if branch is not None:
            users = users.filter(branch=branch)

        if tech_stacks is not None:            
            case_conditions = [When(techStack__name=stack, then=F('techStack__score')) for stack in tech_stacks]
            users = users.annotate(
                avg_value=
                    Sum(
                        Case(*case_conditions, default=Value(0), output_field=FloatField())
                    )/len(tech_stacks),
            ).order_by('-avg_value')
        
        paginator = self.pagination_class()
        paginated_users = paginator.paginate_queryset(users, request)
        serializer = StudentListSerializer(paginated_users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



class GetAlumniListView(APIView):
    pagination_class = CustomPageNumberPagination

    def post(self, request, *args, **kwargs):

        institute_name = request.data.get('instituteName')
        tech_stacks = request.data.get('techStacks', None)
        name = request.data.get('name', None)
        year = request.data.get('year', None)
        company = request.data.get('company', None)
        yoe = request.data.get('yoe', None)

        users = UserDetails.objects.filter(institute=institute_name).filter(type='Alumni')

        if name is not None:
            users = users.filter(Q(firstName__icontains=name) | Q(lastName__icontains=name))

        if year is not None:
            users = users.filter(yearOfPassing=year)

        if company is not None:
            users = users.filter(company=company)
        
        if yoe is not None:
            users = users.filter(yearsOfExperience=yoe)

        if tech_stacks is not None:            
            case_conditions = [When(techStack__name=stack, then=F('techStack__score')) for stack in tech_stacks]
            users = users.annotate(
                avg_value=
                    Sum(
                        Case(*case_conditions, default=Value(0), output_field=FloatField())
                    )/len(tech_stacks),
            ).order_by('-avg_value')
        
        paginator = self.pagination_class()
        paginated_users = paginator.paginate_queryset(users, request)
        serializer = AlumniListSerializer(paginated_users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)