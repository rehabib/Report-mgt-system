# models/user_profile.py
from django.contrib.auth.models import User
from django.db import models
from .department import Department

class Profile(models.Model):
    ROLE_CHOICES = (
        ('director', 'Director'),
        ('agency', 'Agency'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    department = models.ForeignKey(Department, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.user.username} - {self.role}"
