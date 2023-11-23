from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Post, UserDetails, Forum, Tag
from .serializers import CreatePostSerializer

class CreatePost(APIView):
    def post(self, request):

        user_id = request.data.get('userID')
        forum_id = request.data.get('forumID')
        tag_names = request.data.get('tags')
        data = {
            "content" : request.data.get('content')
        }

        try:
            user_instance = UserDetails.objects.get(pk=user_id)
            forum_instance = Forum.objects.get(pk=forum_id)
        except UserDetails.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except Forum.DoesNotExist:
            return Response({"error": "Forum not found"}, status=status.HTTP_404_NOT_FOUND)

        if tag_names is not None:
            tags = []
            for tag_name in tag_names:
                tag, created = Tag.objects.get_or_create(name=tag_name)
                tags.append(tag)

        serializer = CreatePostSerializer(data=data)
        if serializer.is_valid():
            post_instance = serializer.save(postedBy=user_instance, forumID=forum_instance)
            post_instance.tags.set(tags)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

