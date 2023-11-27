from rest_framework import status
from rest_framework.response import Response # any python data we pass into it will be rendered out as json data by response
from rest_framework.decorators import api_view
from .models import HackathonRegistration,Hackathon, UserDetails
from .serializers import HackathonSerializer,HackathonRegistrationSerializer
import time
import json


@api_view(['POST'])
def createHackathon(request): # todo register winners and other winners method
    conductedBy = request.data.get('email') # conductedBy will be an email id passed in the request
    try:
        conduct_instance = UserDetails.objects.get(email=conductedBy)
        # conduct_instance  = UserDetails object (1)  where 1 is the row number

    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = HackathonSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(conductedBy=conduct_instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def registerHackathon(request):
    #todo repeat registration checker for this we will have to maintain a list of all the ids registered for the hackathon
    hackathon_id = request.data.get('hackathonID')
    # should we identify a hackathon by its id? or its name ?( only option is id imo)
    leader_email=request.data.get('leaderEmail')
    member_emails=request.data.get('memberEmails')
    member_emails=member_emails.strip(',')
    try:
        hackathon_instance = Hackathon.objects.get(id=hackathon_id)

        leader_instance = UserDetails.objects.get(email=leader_email)
        if hackathon_instance.openToALL != 1 and leader_instance.institute!=hackathon_instance.institute:
            return Response({"error": "Invalid Registration"}, status=status.HTTP_404_NOT_FOUND)

        members=member_emails.split(',')
        member_ids=[]
        for member in members:
            member=member.strip()
            if member != leader_email: # incase someone passes leader email again in member email
                member_instance=UserDetails.objects.get(email=member)
                if hackathon_instance.openToALL != 1 and member_instance.institute != hackathon_instance.institute:
                    return Response({"error": "Invalid Registration"}, status=status.HTTP_404_NOT_FOUND)
                member_ids.append(member_instance.id)

    except Hackathon.DoesNotExist:
        return Response({"error": "Hackathon not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = HackathonRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        hackathon_instance.registeredCount += 1 # should we count the number of teams or number of people registered
        hackathon_instance.save()
        serializer.save(hackathonID=hackathon_instance,teamLeader=leader_instance,teamMembers=member_ids)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def submitHackathon(request):

    hackathon_id = request.data.get('hackathonID')
    leader_email=request.data.get('userID')
    submit=request.data.get('submission')
    try:


        leader_instance = UserDetails.objects.get(email=leader_email)
        submission_instance = HackathonRegistration.objects.get(teamLeader=leader_instance)
        if submission_instance.id != hackathon_id:
            return Response({"error": "Invalid Submission"}, status=status.HTTP_404_NOT_FOUND)

        submission_instance.submission = submit
        submission_instance.submissionTime = time.strftime("%Y-%m-%d %H:%M:%S")
        submission_instance.save()
        return Response("Data Uploaded Successfully", status=status.HTTP_201_CREATED)



    except Hackathon.DoesNotExist:
        return Response({"error": "Hackathon not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def winnerHackathon(request):

    hackathon_id = request.data.get('hackathonID')
    conductedBy=request.data.get('userID')
    winner=request.data.get('winner')
    runnerUp=request.data.get('runnerUp')
    otherWinners=request.data.get('otherWinners')

    try:


        host_instance = UserDetails.objects.get(email=conductedBy)
        hackathon_instance = Hackathon.objects.get(id=hackathon_id)
        if hackathon_instance.conductedBy != host_instance:
            return Response({"error": "Invalid Access"}, status=status.HTTP_404_NOT_FOUND)

        hackathon_instance.winner = winner
        hackathon_instance.runnerUp = runnerUp
        hackathon_instance.otherWinners=otherWinners
        hackathon_instance.save()
        return Response("Data Successfully Uploaded", status=status.HTTP_201_CREATED)



    except Hackathon.DoesNotExist:
        return Response({"error": "Hackathon not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def listHackathon(request,institute): # institute specific + open to all
    try:
        institute_specific=Hackathon.objects.filter(institute=institute)
        opentoall=Hackathon.objects.filter(openToALL=1)

        data=[]
        for hackathon_instance in opentoall:
            if(hackathon_instance.institute!=institute):
                data.append({"id":hackathon_instance.id,"name": hackathon_instance.name,
                             "oneLiner": hackathon_instance.oneLiner,"description":hackathon_instance.description,
                             "institute":hackathon_instance.institute,"startDate":hackathon_instance.startDate,
                             "endDate":hackathon_instance.endDate})

        for hackathon_instance in institute_specific:
            data.append({"id": hackathon_instance.id, "name": hackathon_instance.name,
                         "institute": hackathon_instance.institute,"oneLiner": hackathon_instance.oneLiner,
                         "startDate": hackathon_instance.startDate,
                         "endDate": hackathon_instance.endDate,"cost":hackathon_instance.cost})



        return Response(data, status=status.HTTP_200_OK)

    except Hackathon.DoesNotExist:
        return Response({"error": "Hackathon not found"}, status=status.HTTP_404_NOT_FOUND)
@api_view(['GET'])  # for all users to see all the ppl who registered for a hackathon
# if you want only the host to view it then pass host id also in request and compare it to hackathon conducted by
def getHackReg(request, hackathonID):
    try:
        registrations = HackathonRegistration.objects.filter(hackathonID=hackathonID)

        data = []
        for registration in registrations:
            registered_list = []
            members_data = []

            # registration is a hackathon _registration instance == HackathonRegistration object (2)
            # matlab in short we can use registration.teamMembers vaghera
            teamLeader = registration.teamLeader
            """
            teamLeader was a foreign key in the database
            thus if we print teamLeader we get =
            UserDetails object (2)

            thus teamLeader.id will guve the id
            """
            leader_instance = UserDetails.objects.get(id=teamLeader.id)
            leader_data = {"firstName": leader_instance.firstName,
                           "lastName": leader_instance.lastName, "email": leader_instance.email,
                           "institute": leader_instance.institute}

            string = registration.teamMembers
            string = string.strip('[]')

            member_list = string.split(',')

            for member in member_list:
                member = member.strip()
                registered_list.append(int(member))

            for user_id in registered_list:
                user_instance = UserDetails.objects.get(id=user_id)
                members_data.append({"firstName": user_instance.firstName, "lastName": user_instance.lastName,
                                     "email": user_instance.email, "institute": user_instance.institute})

            data.append({"Registration_ID":registration.id,"teamLeader": leader_data, "teamMembers": members_data,
                         "submission": registration.submission,
                         "registeredTime": registration.registeredTime, "submissionTime": registration.submissionTime})

        # list of dictionaries returned
        return Response(data, status=status.HTTP_200_OK)

    except Hackathon.DoesNotExist:
        return Response({"error": "Hackathon not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def viewHackathon(request, hackathonID):
    try:
        hackathon_instance = Hackathon.objects.get(id=hackathonID)

        data = {"id": hackathon_instance.id, "name": hackathon_instance.name,
                "oneLiner": hackathon_instance.oneLiner,
                "description":hackathon_instance.description,"institute": hackathon_instance.institute,
                "openToALL":hackathon_instance.openToALL,"postedOn":hackathon_instance.postedOn,
                "startDate": hackathon_instance.startDate,
                "endDate": hackathon_instance.endDate,"cost":hackathon_instance.cost,
                "registeredCount":hackathon_instance.registeredCount,"winner":hackathon_instance.winner,
                "runnerUp":hackathon_instance.runnerUp,"metaData":hackathon_instance.metaData,
                "conductedBy":hackathon_instance.conductedBy.id}


        #  dictionary returned
        return Response(data, status=status.HTTP_200_OK)

    except Hackathon.DoesNotExist:
        return Response({"error": "Hackathon not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)