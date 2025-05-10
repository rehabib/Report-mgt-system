
from django.db import models
from .department import Department
from .strategicGoal import AStrategicGoal
from .perspective import Perspective
from .measurement import Measurement
from .yearData import YearData
from .user_profile import UserProfile


class AgencyPlan(models.Model):
    agency = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    perspective = models.ForeignKey(Perspective, on_delete=models.CASCADE)
    astrategic_goal = models.ForeignKey(AStrategicGoal, on_delete=models.CASCADE)
    measurement = models.ForeignKey(Measurement, on_delete=models.CASCADE)
    base_value = models.FloatField()
    aim = models.FloatField()
    year = models.ForeignKey(YearData, on_delete=models.CASCADE)  # Dynamic Year
    main_activity = models.TextField()
    beneficiary_community = models.TextField()
    beneficiary_body = models.TextField()
    budget_government = models.FloatField()
    budget_public = models.FloatField()
    budget_other = models.FloatField()

    def __str__(self):
        return f"{self.perspective} - {self.year}"