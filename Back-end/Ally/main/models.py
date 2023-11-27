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


class Forum(models.Model):
    name = models.CharField(max_length=100)
    institute = models.CharField(max_length=100)
    About = models.TextField()


class Tag(models.Model):
    name = models.CharField(max_length=100)


class Post(models.Model):
    forumID = models.ForeignKey(Forum, on_delete=models.CASCADE)
    postedBy = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    postedTime = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    metaData = models.CharField(max_length=100)
    likes = models.TextField(default='{}')
    comments = models.TextField(default='[]')
    likesCount = models.IntegerField(default=0)
    commentsCount = models.IntegerField(default=0)
    tags = models.ManyToManyField(Tag)

class Hackathon(models.Model):
    name = models.CharField(max_length=100)
    oneLiner=models.CharField(max_length=100)
    description=models.TextField()
    conductedBy= models.ForeignKey(UserDetails, on_delete=models.CASCADE)  # uss instance ka primary column ( id ) store hoga
    institute = models.CharField(max_length=100)
    openToALL = models.BooleanField() # yes/no
    postedOn = models.DateTimeField(auto_now_add=True)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    cost = models.IntegerField()
    registeredCount = models.IntegerField(default=0)
    winner = models.CharField(max_length=100)
    runnerUp = models.CharField(max_length=100)
    metaData = models.CharField(max_length=100)
    otherWinners = models.CharField(max_length=100)

class HackathonRegistration(models.Model):
    hackathonID = models.ForeignKey(Hackathon, on_delete=models.CASCADE)
    # id is the only unique column in hackathon model we should display the id to users for the purpose of registration
    teamLeader = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    teamMembers = models.TextField() # email ids seperated by comms
    submission = models.CharField(max_length=100) # what will submission column hold ? the link ?
    submissionTime = models.DateTimeField(null=True,blank=True)
    registeredTime = models.DateTimeField(auto_now_add=True)


class Seminar(models.Model):
    name = models.CharField(max_length=100)
    oneLiner=models.CharField(max_length=100)
    description=models.TextField()
    conductedBy= models.ForeignKey(UserDetails, on_delete=models.CASCADE)  # uss instance ka primary column ( id ) store hoga
    institute = models.CharField(max_length=100)
    openToALL = models.BooleanField() # yes/no
    postedOn = models.DateTimeField(auto_now_add=True)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    cost = models.IntegerField()
    registeredCount = models.IntegerField(default=0)
    meetLink = models.CharField(max_length=100)
    metaData = models.CharField(max_length=100,default="")
    registeredUsers = models.TextField(default="") # list of users


class Conversation(models.Model):
    sentBy = models.ForeignKey(UserDetails, on_delete=models.CASCADE, related_name='sent_conversations')
    recievedBy = models.ForeignKey(UserDetails, on_delete=models.CASCADE, related_name='received_conversations')
    timeSent = models.DateTimeField(auto_now_add=True)
    message = models.TextField()