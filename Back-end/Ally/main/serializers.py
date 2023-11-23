from rest_framework import serializers
from .models import Post, Hackathon , HackathonRegistration, Tag

class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('content',)

class CommentPostSerializer(serializers.Serializer):
    comment = serializers.CharField()

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name',)

class PostSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        exclude = ('likes', 'comments')

class CommentSerializer(serializers.Serializer):
    Comment = serializers.CharField()
    user = serializers.CharField()
    byUserID = serializers.IntegerField()
    Timestamp = serializers.CharField()

class HackathonSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hackathon
        fields = '__all__'

class HackathonRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model=HackathonRegistration
        fields = '__all__'

