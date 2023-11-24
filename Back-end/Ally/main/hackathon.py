from rest_framework import status
from rest_framework.response import Response # any python data we pass into it will be rendered out as json data by response
from rest_framework.decorators import api_view
from .models import HackathonRegistration,Hackathon, UserDetails
from .serializers import HackathonSerializer,HackathonRegistrationSerializer

@api_view(['GET'])
def getHackathon(request):
    items=Hackathon.objects.all()
    serializer = HackathonSerializer(items, many=True)
    return Response(serializer.data)

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




@api_view(['GET'])
def getHackReg(request):
    items=HackathonRegistration.objects.all()
    serializer = HackathonRegistrationSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def registerHackathon(request):
    #todo repeat registration checker for this we will have to maintain a list of all the ids registered for the hackathon
    hackathon_id = request.data.get('hackathonID')
    # should we identify a hackathon by its id? or its name ?( only option is id imo)
    leader_email=request.data.get('leaderEmail')
    print(leader_email)
    member_emails=request.data.get('memberEmails')
    print(member_emails)
    try:
        hackathon_instance = Hackathon.objects.get(id=hackathon_id)

        leader_instance = UserDetails.objects.get(email=leader_email)
        if hackathon_instance.openToALL != 1 and leader_instance.institute!=hackathon_instance.institute:
            return Response({"error": "Invalid Registration"}, status=status.HTTP_404_NOT_FOUND)

        members=member_emails.split(',')
        member_ids=[]
        for member in members:
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

