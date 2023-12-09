from rest_framework import status
from rest_framework.response import Response # any python data we pass into it will be rendered out as json data by response
from rest_framework.decorators import api_view
from .models import UserDetails
from .serializers import  UserProfileSerializer
@api_view(['GET'])
def viewUser(request, userID):
    try:

        user_instance=UserDetails.objects.get(id=userID)
        serializer =UserProfileSerializer(user_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

