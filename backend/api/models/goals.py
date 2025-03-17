from django.db import models

class Goals(models.Model):
    goal_name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.goal_name
