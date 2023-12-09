"""Ally URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from main.forum import *
from main.root import api_root
from main.hackathon import *
from main.seminar import *
from main.messages import *
from main.general import *
from main.plans import *
from main.courses import *
from main.profile import *
from main.project import *

urlpatterns = [
    path("", api_root),
    path('admin/', admin.site.urls),
    path('create_post/', CreatePost.as_view(), name='create_post'),
    path('comment_post/', AddCommentView.as_view(), name='comment_post'),
    path('react_post/', AddReactionView.as_view(), name='react_post'),
    path('posts/<int:forumID>/', ListPostView.as_view(), name='post_list'),
    path('comments/<int:postID>/', ListCommentView.as_view(), name='comment_list'),
    path('likes/<int:postID>/', ListReactionView.as_view(), name='like_list'),
    path('create_hackathon/',createHackathon,name="create_hackathon"),
    path('get_hackathon/<str:institute>/',listHackathon,name="list_hackathon"),
    path('register_hackathon/',registerHackathon,name="register_hackathon"),
    path('registered_hackathon/<int:hackathonID>/',getHackReg,name="registered_hackathon"),
    path('view_hackathon/<int:hackathonID>/',viewHackathon,name="view_hackathon"),
    path('submit_hackathon/',submitHackathon,name="submit_hackathon"),
    path('winner_hackathon/',winnerHackathon,name="winner_hackathon"),
    path('create_seminar/',createSeminar,name="create_seminar"),
    path('register_seminar/',registerSeminar,name="register_seminar"),
    path('list_seminar/<str:institute>/',listSeminar,name="list_seminar"),
    path('view_seminar/<int:userID>/<int:seminarID>/',viewSeminar,name="view_seminar"),
    path('send_message/', ConversationCreateView.as_view(), name='send_message'),
    path('message_details/', ConversationDetailView.as_view(), name='message_details'),
    path('user_conversations/<int:user_id>/', LastConversationWithUserAPIView.as_view(), name='user_conversations'),
    path('endorse/', EndorsementAPIView.as_view(), name='endorse'),
    path('endorsements/<int:user_id>/', EndorsementListAPIView.as_view(), name='endorsement_list'),
    path('student_list/', GetStudentListView.as_view(), name="student_list"),
    path('alumni_list/', GetAlumniListView.as_view(), name="alumni_list"),
    path('plan_list/', PlanListAPIView.as_view(), name="plan_list"),
    path('view_plan/<int:plan_id>/', PlanListAPIView.as_view(), name="view_plan"),
    path('register_plan/', PlanListAPIView.as_view(), name="register_plan"),
    path('course_list/', CourseListAPIView.as_view(), name="course_list"),
    path('view_course/<int:course_id>/<int:user_id>/', DetailedCourseView.as_view(), name="view_course"),
    path('course_register/', RegisterCourseView.as_view(), name="course_register"),
    path('course_complete/', CompleteCourseView.as_view(), name="course_complete"),
    path('view_userprofile/<int:userID>/', viewUser, name='view_userprofile'),
    path('project_team_recommendations/<int:projectID>/',projectTeamRecommendations , name='project_team_recommendations'),
    path('send_project_invite/',sendProjectInvite,name="send_project_invite"),
]