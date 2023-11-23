from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Post, UserDetails, Forum, Tag
from .serializers import CreatePostSerializer, CommentPostSerializer
import json
from datetime import datetime

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



class AddCommentView(APIView):
    def post(self, request):

        user_id = request.data.get('userID')
        post_id = request.data.get('postID')
        data = {
            "comment" : request.data.get('comment')
        }

        try:
            user = UserDetails.objects.get(pk=user_id)
            post = Post.objects.get(pk=post_id)
        except UserDetails.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = CommentPostSerializer(data=data)
        if serializer.is_valid():
            comment_text = {
                "Comment" : serializer.validated_data.get('comment'),
                "byUserID" : user_id,
                "user" : user.firstName + " " + user.lastName,
                "Timestamp" : str(datetime.now())
            }
            jsonDec = json.decoder.JSONDecoder()
            comments =  jsonDec.decode(post.comments)
            comments.append(comment_text)
            post.comments = json.dumps(comments)
            post.commentsCount += 1
            post.save()
            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)