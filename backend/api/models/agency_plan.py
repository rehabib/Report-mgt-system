# backend/api/models/agency_plan.py

from django.db import models
from .perspective import Perspective
from .strategicGoal import AStrategicGoal
from .measurement import Measurement
from .yearData import YearData
from .user_profile import Profile

class AgencyPlan(models.Model):
    agency             = models.ForeignKey(Profile, on_delete=models.CASCADE)
    perspective        = models.ForeignKey(Perspective, on_delete=models.CASCADE)
    astrategic_goal    = models.ForeignKey(AStrategicGoal, on_delete=models.CASCADE)
    measurement        = models.ForeignKey(Measurement, on_delete=models.CASCADE)
    base_value         = models.FloatField()
    aim                = models.FloatField()
    main_activity      = models.TextField()
    beneficiary_community = models.TextField()
    beneficiary_body      = models.TextField()
    budget_government     = models.FloatField()
    budget_public         = models.FloatField()
    budget_other          = models.FloatField()

    # NEW: store arbitrary year→value pairs
    PLAN_TYPE_CHOICES = [
        (1, 'One Year'),
        (3, 'Three Year'),
        (5, 'Five Year'),
        (10, 'Ten Year'),
    ]

    plan_type = models.IntegerField(
        choices=PLAN_TYPE_CHOICES,
        default=1,
        help_text="Duration of the plan in years"
    )

    yearly_data = models.JSONField(
        default=dict,
        help_text="A mapping of year to numeric value, e.g. {'2023': 12.5, '2024': 15.0}"
    )
    def __str__(self):
        return f"{self.agency.user.username} – {self.perspective} Plan"
