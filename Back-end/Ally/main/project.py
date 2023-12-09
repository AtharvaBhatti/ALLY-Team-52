from rest_framework import status
from rest_framework.response import Response # any python data we pass into it will be rendered out as json data by response
from rest_framework.decorators import api_view
from .models import  UserDetails ,Projects ,Conversation
from .serializers import   UserProfileSerializer

@api_view(['GET'])
def projectTeamRecommendations(request, projectID):
    try:

        project_instance=Projects.objects.get(id=projectID)
        """
        AI recommendation model to be built here
        returning hardcoded reponse for now
        """
        recommendedUsers=[1,2,3]
        userList=[]
        for userID in recommendedUsers:
            user_instance = UserDetails.objects.get(id=userID)
            serializer = UserProfileSerializer(user_instance)
            userList.append(serializer.data)




        return Response(userList, status=status.HTTP_200_OK)


    except Projects.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def sendProjectInvite(request):
    project_id = request.data.get('projectID')

    user_id=request.data.get('userID')

    try:
        project_instance =Projects.objects.get(id=project_id)

        user_instance = UserDetails.objects.get(id=user_id)
        


        conversation_instance = Conversation()
        conversation_instance.message={"id": project_instance.id, "description": project_instance.description,
                         "organization": project_instance.organization,"domain": project_instance.domain,
                         "status": project_instance.status,
                         "mentoredBy": project_instance.mentoredBy,
                         "message":"You have been invited to take part in this project!"}

        conversation_instance.recievedBy=user_instance
        messenger_instance=UserDetails.objects.get(id=3) # hardcoded messenger id
        conversation_instance.sentBy=messenger_instance

        conversation_instance.save()
        
        return Response("Invite Sent Successfully", status=status.HTTP_200_OK)


    except Projects.DoesNotExist:
        return Response({"error": "project not found"}, status=status.HTTP_404_NOT_FOUND)
    except UserDetails.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
