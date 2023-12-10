from rest_framework import generics
from .models import Courses, UserDetails
from .serializers import CourseListSerializer, CourseSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
import json
from datetime import datetime



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
        data = serializer.data
        jsonDec = json.decoder.JSONDecoder()
        courses_done = jsonDec.decode(user.courses)
        course_id = str(course_id)
        if course_id in courses_done.keys():
            data["is_registered"] = True
            data["status"] = courses_done[course_id]["status"]
            data["registeredOn"] = courses_done[course_id]["registeredOn"]
            if courses_done[course_id]["status"] == "completed":
                data["completedOn"] = courses_done[course_id]["completedOn"]
        else:
            data["is_registered"] = False
        return Response(data, status=status.HTTP_200_OK)
        



class RegisterCourseView(APIView):
    def post(self, request):
        user_id = request.data.get('user_id')
        course_id = request.data.get('course_id')

        try:
            course = Courses.objects.get(pk=course_id)
            user = UserDetails.objects.get(pk=user_id)
        except Courses.DoesNotExist:
            return Response({"message": "Course not found"}, status=status.HTTP_404_NOT_FOUND)    
        except UserDetails.DoesNotExist:
            return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        try:
            course_id = str(course_id)
            jsonDec = json.decoder.JSONDecoder()
            courses_done = jsonDec.decode(user.courses)
            if course_id in courses_done.keys():
                return Response({"message" : "course already registered"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                courses_done[course_id] = {}
                data = {
                    "status" : "registered",
                    "registeredOn" : str(datetime.now()),
                }
                courses_done[course_id] = data
                user.courses = json.dumps(courses_done)
                user.save()
                course.registeredCount += 1
                course.save()
                return Response({"message" : "course registered successfully"}, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({"error" : e}, status=status.HTTP_400_BAD_REQUEST)



class CompleteCourseView(APIView):
    def post(self, request):
        user_id = request.data.get('user_id')
        course_id = request.data.get('course_id')

        try:
            course = Courses.objects.get(pk=course_id)
            user = UserDetails.objects.get(pk=user_id)
        except Courses.DoesNotExist:
            return Response({"message": "Course not found"}, status=status.HTTP_404_NOT_FOUND)    
        except UserDetails.DoesNotExist:
            return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        try:
            course_id = str(course_id)
            jsonDec = json.decoder.JSONDecoder()
            courses_done = jsonDec.decode(user.courses)
            if course_id not in courses_done.keys():
                return Response({"message" : "course not registered"}, status=status.HTTP_400_BAD_REQUEST)
            elif courses_done[course_id]["status"] == "completed":
                return Response({"message" : "course already completed"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                courses_done[course_id]["status"] = "completed"
                courses_done[course_id]["completedOn"] = str(datetime.now())
                user.courses = json.dumps(courses_done)
                user.save()
                return Response({"message" : "course completed successfully"}, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({"error" : e}, status=status.HTTP_400_BAD_REQUEST)


