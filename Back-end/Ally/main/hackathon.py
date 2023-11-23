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
    serializer = HackathonSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['GET'])
def getHackReg(request):
    items=HackathonRegistration.objects.all()
    serializer = HackathonRegistrationSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def registerHackathon(request):
    serializer = HackathonRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
