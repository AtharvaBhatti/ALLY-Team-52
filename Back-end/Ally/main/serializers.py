from rest_framework import serializers
from .models import Post

class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('content',)
