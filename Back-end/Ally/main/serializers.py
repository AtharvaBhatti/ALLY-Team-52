from rest_framework import serializers
from .models import Post, Hackathon , HackathonRegistration

class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('content',)

class CommentPostSerializer(serializers.Serializer):
    comment = serializers.CharField()

class HackathonSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hackathon
        fields = '__all__'

class HackathonRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model=HackathonRegistration
        fields = '__all__'

