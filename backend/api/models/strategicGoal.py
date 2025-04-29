from django.db import models
from .goals import Goals

class AStrategicGoal(models.Model):
  strategic_goal = models.CharField(max_length=255)

  def __str__(self):
        return self.strategic_goal
  

class DStrategicGoal(models.Model):
    strategic_goal = models.CharField(max_length=255)
    goal = models.ForeignKey(Goals, on_delete=models.CASCADE)

    def __str__(self):
        return self.strategic_goal  
    

 ##Agency Strategic Goals relate to the Agency.
 ##Director Strategic Goals relate to the IT Plan and department-level reports.   