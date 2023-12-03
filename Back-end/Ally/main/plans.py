from rest_framework import generics
from .models import Plan, UserDetails
from .serializers import PlanListSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
import json



class PlanListAPIView(generics.ListAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanListSerializer



class ViewPlanAPIView(APIView):
    def get(self, request, plan_id):
        try:
            plan = Plan.objects.get(id=plan_id)
        except Plan.DoesNotExist:
            return Response({'message': 'Plan not found'}, status=status.HTTP_404_NOT_FOUND)

        plan_details = {}
        if plan.details:
            try:
                plan_details = json.loads(plan.details)
            except json.JSONDecodeError:
                return Response({'message': 'Error parsing plan details JSON'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = PlanListSerializer(plan)
        data = serializer.data
        data['details'] = plan_details

        return Response(data, status=status.HTTP_200_OK)



class RegisterPlanAPIView(APIView):
    def post(self, request):
        plan_id = request.data.get('plan_id')
        user_id = request.data.get('user_id')

        try:
            user_details = UserDetails.objects.get(id=user_id)
            plan_details = Plan.objects.get(id=plan_id)
        except UserDetails.DoesNotExist:
            return Response({'message': 'User details not found'}, status=status.HTTP_404_NOT_FOUND)
        except Plan.DoesNotExist:
            return Response({'message': 'Plan details not found'}, status=status.HTTP_404_NOT_FOUND)

        user_details.plan = plan_id
        user_details.save()

        return Response({'message': f'Plan {plan_id} registered for user {user_id} successfully'}, status=status.HTTP_200_OK)