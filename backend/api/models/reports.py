from django.db import models
from .department import Department
from .perspective import Perspective
from .goals import Goals
from .yearData import YearData
from .measurement import Measurement

# Months Table (12 Months)
class Months(models.Model):
    name = models.CharField(max_length=20, unique=True)  # January, February, etc.

    def __str__(self):
        return self.name

# Daily Report Table
class DailyReport(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    year = models.ForeignKey(YearData, on_delete=models.CASCADE)
    month = models.ForeignKey(Months, on_delete=models.CASCADE)
    goal = models.ForeignKey(Goals, on_delete=models.CASCADE)
    measurement = models.ForeignKey(Measurement, on_delete=models.CASCADE)
    date = models.DateField()
    time_spent = models.FloatField()  # Hours spent
    amount_used = models.FloatField()  # Budget used
    measurement_value = models.FloatField()
    comparison = models.CharField(max_length=100, blank=True, null=True)
    difference = models.FloatField(default=0.0)
    username = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.department} - {self.date}"

# Monthly Report Table (Aggregates Daily Reports)
class MonthlyReport(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    year = models.ForeignKey(YearData, on_delete=models.CASCADE)
    month = models.ForeignKey(Months, on_delete=models.CASCADE)
    perspective = models.ForeignKey(Perspective, on_delete=models.CASCADE)
    goal = models.ForeignKey(Goals, on_delete=models.CASCADE)
    goal_value = models.FloatField()
    measurement = models.ForeignKey(Measurement, on_delete=models.CASCADE)
    plan = models.TextField()

    # Weekly data (Aggregated from Daily Report)
    first_week = models.FloatField(default=0.0)
    second_week = models.FloatField(default=0.0)
    third_week = models.FloatField(default=0.0)
    fourth_week = models.FloatField(default=0.0)

    achievement = models.FloatField(default=0.0)  # Total achievement for the month
    performance = models.FloatField(default=0.0)

    # Quarterly data
    quarterly_plan = models.FloatField(default=0.0)
    quarterly_achievement = models.FloatField(default=0.0)
    quarterly_performance = models.FloatField(default=0.0)

    # Mid-Year & Annual tracking
    mid_year_target = models.FloatField(default=0.0)
    annual_target = models.FloatField(default=0.0)

    output = models.TextField()
    responsible_body = models.TextField()
    budget_planned = models.FloatField()
    budget_used = models.FloatField()
    year_budget = models.FloatField()
    comment = models.TextField()

    def __str__(self):
        return f"{self.department} - {self.month} {self.year}"
