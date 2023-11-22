from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Post, UserDetails, Forum
from .serializers import PostSerializer

class CreatePost(APIView):
    def post(self, request):
        user_id = request.data.get('userID')
        forum_id = request.data.get('forumID')

        try:
            user_instance = UserDetails.objects.get(pk=user_id)
            forum_instance = Forum.objects.get(pk=forum_id)
        except UserDetails.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except Forum.DoesNotExist:
            return Response({"error": "Forum not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(postedBy=user_instance, forumID=forum_instance)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

