from rest_framework import status
from rest_framework.response import Response # any python data we pass into it will be rendered out as json data by response
from rest_framework.decorators import api_view
from .models import  UserDetails , Seminar
from .serializers import  SeminarSerializer

import time
import json




@api_view(['POST'])
def createSeminar(request):
    conductedBy = request.data.get('email') # conductedBy will be an email id passed in the request
    try:
        conduct_instance = UserDetails.objects.get(email=conductedBy)
        # conduct_instance  = UserDetails object (1)  where 1 is the row number

    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = SeminarSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(conductedBy=conduct_instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def registerSeminar(request):
    seminar_id = request.data.get('seminarID')

    user_email=request.data.get('userEmail')

    try:
        seminar_instance = Seminar.objects.get(id=seminar_id)

        user_instance = UserDetails.objects.get(email=user_email)
        if seminar_instance.openToALL != 1 and user_instance.institute!=seminar_instance.institute:
            return Response({"error": "Invalid Registration"}, status=status.HTTP_404_NOT_FOUND)


        if seminar_instance.registeredUsers=="":
            seminar_instance.registeredUsers=f"{user_instance.id}"
            seminar_instance.save()
            return Response(seminar_instance.meetLink, status=status.HTTP_201_CREATED)
        else:
            seminar_instance.registeredUsers = seminar_instance.registeredUsers + f",{user_instance.id}"
            seminar_instance.save()
            return Response(seminar_instance.meetLink, status=status.HTTP_201_CREATED)


    except Seminar.DoesNotExist:
        return Response({"error": "Hackathon not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


