from django.db import models

# Create your models here.
class userDetails(models.Model):
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