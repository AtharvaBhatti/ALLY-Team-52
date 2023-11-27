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
            seminar_instance.registeredCount = seminar_instance.registeredCount + 1
            seminar_instance.save()
            return Response(seminar_instance.meetLink, status=status.HTTP_201_CREATED)
        else:
            seminar_instance.registeredUsers = seminar_instance.registeredUsers + f",{user_instance.id}"
            seminar_instance.registeredCount = seminar_instance.registeredCount + 1
            seminar_instance.save()
            return Response(seminar_instance.meetLink, status=status.HTTP_201_CREATED)


    except Seminar.DoesNotExist:
        return Response({"error": "seminar not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def listSeminar(request,institute): # institute specific + open to all
    try:
        institute_specific=Seminar.objects.filter(institute=institute)
        opentoall=Seminar.objects.filter(openToALL=1)

        data=[]

        for seminar_instance in opentoall:
            if(seminar_instance.institute!=institute):
                data.append({"id":seminar_instance.id,"name": seminar_instance.name,
                             "oneLiner": seminar_instance.oneLiner,"description":seminar_instance.description,
                             "institute":seminar_instance.institute,"startDate":seminar_instance.startDate,
                             "endDate":seminar_instance.endDate})

        for seminar_instance in institute_specific:
            data.append({"id": seminar_instance.id, "name": seminar_instance.name,
                         "institute": seminar_instance.institute,"oneLiner": seminar_instance.oneLiner,
                         "startDate": seminar_instance.startDate,
                         "endDate": seminar_instance.endDate,"cost":seminar_instance.cost})


        return Response(data, status=status.HTTP_200_OK)

    except Seminar.DoesNotExist:
        return Response({"error": "Seminar not found"}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
def viewSeminar(request, seminarID):
    try:
        seminar_instance = Seminar.objects.get(id=seminarID)
        registered_list = []
        members_data = []
        string = seminar_instance.registeredUsers


        member_list = string.split(',')

        for member in member_list:
            member = member.strip()
            registered_list.append(int(member))

        for user_id in registered_list:
            user_instance = UserDetails.objects.get(id=user_id)
            members_data.append({"firstName": user_instance.firstName, "lastName": user_instance.lastName,
                                 "email": user_instance.email, "institute": user_instance.institute})

        data = {"id": seminar_instance.id, "name": seminar_instance.name,
                "oneLiner": seminar_instance.oneLiner,
                "description":seminar_instance.description,"institute": seminar_instance.institute,
                "openToALL":seminar_instance.openToALL,"postedOn":seminar_instance.postedOn,
                "startDate": seminar_instance.startDate,
                "endDate": seminar_instance.endDate,"cost":seminar_instance.cost,
                "registeredCount":seminar_instance.registeredCount,
                "registeredUsers":members_data,
                "metaData":seminar_instance.metaData,
                "conductedBy":seminar_instance.conductedBy.id}


        #  dictionary returned
        return Response(data, status=status.HTTP_200_OK)

    except Seminar.DoesNotExist:
        return Response({"error": "Seminar not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)