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
def createHackathon(request):
    conductedBy = request.data.get('userID')
    try:
        conduct_instance = UserDetails.objects.get(pk=conductedBy)

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
    hackathon_id = request.data.get('hackathonID')
    leader_email=request.data.get('teamLeader')
    try:
        hackathon_instance = Hackathon.objects.get(pk=hackathon_id)
        leader_instance = UserDetails.objects.get(pk=leader_email)

    except Hackathon.DoesNotExist:
        return Response({"error": "Hackathon not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = HackathonRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        hackathon_instance.registeredCount += 1
        hackathon_instance.save()
        serializer.save(hackathonID=hackathon_instance,teamLeader=leader_instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

