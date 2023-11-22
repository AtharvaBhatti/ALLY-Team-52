from django.db import models

# Create your models here.
class UserDetails(models.Model):
    ROLE_CHOICES = [
        ('Student', 'Student'),
        ('Alumni', 'Alumni'),
    ]
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    dateOfBirth = models.DateField()
    email = models.CharField(max_length=100)
    mobileNo = models.CharField(max_length=100)
    about = models.CharField(max_length=100)
    type = models.CharField(max_length=100, choices=ROLE_CHOICES)
    institute = models.CharField(max_length=100)
    yearOfPassing = models.CharField(max_length=100)
    branch = models.CharField(max_length=100)
    yearsOfExperience = models.IntegerField()
    company = models.CharField(max_length=100)
    currentScore = models.IntegerField()
    techStack = models.TextField()
    courses = models.TextField()
    plan = models.IntegerField()
    endorsements = models.TextField()


class Tag(models.Model):
    name = models.CharField(max_length=100)


class Post(models.Model):
    forumID = models.IntegerField()
    postedBy = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    postedTime = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    metaData = models.CharField(max_length=100)
    likes = models.TextField()
    comments = models.TextField()
    likesCount = models.IntegerField()
    commentsCount = models.IntegerField()
    tags = models.ManyToManyField(Tag)