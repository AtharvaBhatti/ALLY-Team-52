import json
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserDetails
from .serializers import UserNamesSerializer



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
