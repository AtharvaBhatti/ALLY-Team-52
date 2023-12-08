from rest_framework import generics
from .models import Courses
from .serializers import CourseListSerializer



class CourseListAPIView(generics.ListAPIView):
    queryset = Courses.objects.all()
    serializer_class = CourseListSerializer