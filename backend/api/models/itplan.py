from django.db import models
from .yearData import YearData
from .perspective import Perspective
from .strategicGoal import DStrategicGoal
from .measurement import Measurement

class ITPlan(models.Model):
    serial_number = models.AutoField(primary_key=True)
    perspective = models.ForeignKey(Perspective, on_delete=models.CASCADE)
    strategic_goal = models.ForeignKey(DStrategicGoal, on_delete=models.CASCADE)
    goal_value = models.FloatField()
    measurement = models.ForeignKey(Measurement, on_delete=models.CASCADE)
    year = models.ForeignKey(YearData, on_delete=models.CASCADE)  # Dynamic Year

    # Fields for all 12 months
    january = models.FloatField(default=0.0)
    february = models.FloatField(default=0.0)
    march = models.FloatField(default=0.0)
    april = models.FloatField(default=0.0)
    may = models.FloatField(default=0.0)
    june = models.FloatField(default=0.0)
    july = models.FloatField(default=0.0)
    august = models.FloatField(default=0.0)
    september = models.FloatField(default=0.0)
    october = models.FloatField(default=0.0)
    november = models.FloatField(default=0.0)
    december = models.FloatField(default=0.0)

    budget = models.FloatField()
    result = models.TextField()
    accountable = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.perspective} - {self.year}"

