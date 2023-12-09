from rest_framework import generics
from .models import Courses, UserDetails
from .serializers import CourseListSerializer, CourseSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
import json



class CourseListAPIView(generics.ListAPIView):
    queryset = Courses.objects.all()
    serializer_class = CourseListSerializer



class DetailedCourseView(APIView):
    def get(self, request, course_id, user_id):
        try:
            course = Courses.objects.get(pk=course_id)
            user = UserDetails.objects.get(pk=user_id)
        except Courses.DoesNotExist:
            return Response({"message": "Course not found"}, status=status.HTTP_404_NOT_FOUND)    
        except UserDetails.DoesNotExist:
            return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND) 

        serializer = CourseSerializer(course)
        if serializer.is_valid():      
            data = serializer.data
            jsonDec = json.decoder.JSONDecoder()
            courses_done = jsonDec.decode(user.courses)
            if course_id in courses_done.keys():
                data["is_registered"] = True
            else:
                data["is_registered"] = False
            return Response(data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)