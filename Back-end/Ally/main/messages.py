from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Conversation, UserDetails
from .serializers import ConversationSerializer



class ConversationCreateView(APIView):
    def post(self, request):

        sent_by = request.data.get('sentBy')
        recieved_by = request.data.get('recievedBy')
        data = {
            "message" : request.data.get('message')
        }

        try:
            sender_instance = UserDetails.objects.get(pk=sent_by)
            reciever_instance = UserDetails.objects.get(pk=recieved_by)
        except UserDetails.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = ConversationSerializer(data=data)
        if serializer.is_valid():
            serializer.save(sentBy=sender_instance, recievedBy=reciever_instance)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)