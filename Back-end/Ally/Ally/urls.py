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


]
