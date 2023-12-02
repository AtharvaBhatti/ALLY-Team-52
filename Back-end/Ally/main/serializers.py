from rest_framework import serializers
from .models import Post, Hackathon , HackathonRegistration, Tag, Seminar, Conversation, UserDetails

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
        model_names = [
            'name',
            'oneLiner',
            'description',
            'institute',
            'openToALL',
            'startDate',
            'endDate',
            'cost',

        ]
        fields = model_names

class HackathonRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model=HackathonRegistration
        model_names = [
            'hackathonID',


        ]
        fields = model_names


class SeminarSerializer(serializers.ModelSerializer):
    class Meta:
        model=Seminar
        model_names = [
            'name',
            'oneLiner',
            'description',
            'institute',
            'openToALL',
            'startDate',
            'endDate',
            'cost',
            'meetLink', # assuming we are scheduling meetings and links will be submitted at time of seminar creation


        ]
        fields = model_names
        

class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = ('message',)


class ConversationDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Conversation
        fields = '__all__'


class LastConversationSerializer(serializers.ModelSerializer):
    sent_name = serializers.CharField()
    recieved_name = serializers.CharField()

    class Meta:
        model = Conversation
        fields = '__all__'


class UserNamesSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    
    class Meta:
        model = UserDetails
        fields = ['id', 'name']
    
    def get_name(self, obj):
        return obj.firstName + " " + obj.lastName


class StudentListSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDetails
        fields = ['id', 'firstName', 'lastName', 'branch', 'yearOfPassing']


class AlumniListSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDetails
        fields = ['id', 'firstName', 'lastName', 'yearsOfExperience', 'company']