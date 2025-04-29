from django.contrib import admin

# Register your models here.
# api/admin.py
from .models import Department, Goals, Perspective, Measurement, DStrategicGoal, YearData, AgencyPlan, DirectorPlan, AStrategicGoal, MonthlyReport,DailyReport, Months
from .models.user_profile import Profile
admin.site.register(Profile)
admin.site.register(Department)
admin.site.register(Goals)
admin.site.register(Perspective)
admin.site.register(Measurement)
admin.site.register(DStrategicGoal)
admin.site.register(AStrategicGoal)
admin.site.register(YearData)
admin.site.register(AgencyPlan)
admin.site.register(DirectorPlan)
admin.site.register(MonthlyReport)
admin.site.register(DailyReport)
admin.site.register(Months)
admin.site.register(Profile)
