from rest_framework import generics
from .models import Plan
from .serializers import PlanListSerializer



class PlanListAPIView(generics.ListAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanListSerializer