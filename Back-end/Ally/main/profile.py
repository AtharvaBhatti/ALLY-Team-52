from rest_framework import status
from rest_framework.response import Response # any python data we pass into it will be rendered out as json data by response
from rest_framework.decorators import api_view
from .models import UserDetails,Courses
from .serializers import  UserProfileSerializer
import json
@api_view(['GET'])
def viewUser(request, userID):
    try:

        user_instance=UserDetails.objects.get(id=userID)

        serializer =UserProfileSerializer(user_instance)
        data=[] # [0] will be user details ecpet courses and projects , [1] will be courses , [2] will be prjects
        data.append(serializer.data)


        completed_courses=[]
        incomplete_courses=[]
        jsonDec = json.decoder.JSONDecoder()
        courses = jsonDec.decode(user_instance.courses)

        if courses != {}:
            for id,value in courses.items():
                course_instance=Courses.objects.get(id=id)
                if value["status"] == "completed":
                    completed_courses.append({"id":id,"oneLiner":course_instance.oneLiner,
                                              "registeredOn":value["registeredOn"],"completedOn":value["completedOn"]})
                else:
                    incomplete_courses.append({"id": id, "oneLiner": course_instance.oneLiner,
                                              "registeredOn": value["registeredOn"]
                                              })

            data.append({"completed":completed_courses,
                        "registered":incomplete_courses})

        return Response(data, status=status.HTTP_200_OK)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

