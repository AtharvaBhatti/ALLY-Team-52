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

class HackathonSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hackathon
        model_names = [
            'name',
            'oneLiner',
            'description',
            'conductedBy',
            'institute',
            'openToALL',
            'postedOn',
            'startDate',
            'endDate',
            'cost',
            'metaData',

        ]
        fields = model_names

class HackathonRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model=HackathonRegistration
        model_names = [
            'hackathonID',
            'teamLeader', # email id
            'teamMembers', # list of email ids

        ]
        fields = model_names

