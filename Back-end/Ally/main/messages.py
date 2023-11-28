from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q, CharField, Value
from django.db.models.functions import Concat
from .models import Conversation, UserDetails
from .serializers import ConversationSerializer, UserNamesSerializer, ConversationDetailSerializer, LastConversationSerializer



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



class CustomPageNumberPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size' 
    max_page_size = 100



class ConversationDetailView(generics.ListAPIView):
    pagination_class = CustomPageNumberPagination

    def get_queryset(self):
        sender_id = self.request.query_params.get('sender_id')
        receiver_id = self.request.query_params.get('receiver_id')

        queryset = Conversation.objects.filter(
            (Q(sentBy_id=sender_id) & Q(recievedBy=receiver_id)) |
            (Q(sentBy_id=receiver_id) & Q(recievedBy=sender_id))
        ).order_by('timeSent')

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        sender_id = self.request.query_params.get('sender_id')
        receiver_id = self.request.query_params.get('receiver_id')
    
        sender = UserDetails.objects.get(pk=sender_id)
        receiver = UserDetails.objects.get(pk=receiver_id)

        sender_details = UserNamesSerializer(sender).data
        receiver_details = UserNamesSerializer(receiver).data

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = ConversationDetailSerializer(page, many=True)
            paginated_response = self.get_paginated_response(serializer.data)
            paginated_response.data[sender_id] = { "name" : sender_details['name'], "currentUser" : True}
            paginated_response.data[receiver_id] = { "name" : receiver_details['name'], "currentUser" : False}
            return paginated_response

        serializer = ConversationDetailSerializer(queryset, many=True)
        response_data = serializer.data
        data = {}
        data["results"] = response_data
        data[sender_id] = { "name" : sender_details['name'], "currentUser" : True}
        data[receiver_id] = { "name" : receiver_details['name'], "currentUser" : False}
        return Response(data)



class LastConversationWithUserAPIView(generics.ListAPIView):
    serializer_class = LastConversationSerializer
    pagination_class = CustomPageNumberPagination

    def get_queryset(self):
        user_id = self.kwargs['user_id'] 

        conversations = Conversation.objects.filter(
            Q(sentBy__id=user_id) | Q(recievedBy__id=user_id)
        ).annotate(
            sent_name=Concat('sentBy__firstName', Value(' '), 'sentBy__lastName', output_field=CharField()),
            recieved_name=Concat('recievedBy__firstName', Value(' '), 'recievedBy__lastName', output_field=CharField())
        ).order_by('-timeSent')

        distinct_conversations = []
        conversation_ids_seen = set()
        for conv in conversations:
            other_user_id = conv.sentBy_id if conv.recievedBy_id == user_id else conv.recievedBy_id
            if other_user_id not in conversation_ids_seen:
                distinct_conversations.append(conv)
                conversation_ids_seen.add(other_user_id)

        return distinct_conversations