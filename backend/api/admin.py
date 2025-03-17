from django.contrib import admin

# Register your models here.
# api/admin.py
from django.contrib import admin
from .models import Department, Goals, Perspective, Measurement, DStrategicGoal, YearData, BSC_2005FiveYearPlan, ITPlan, AStrategicGoal, MonthlyReport,DailyReport, Months

admin.site.register(Department)
admin.site.register(Goals)
admin.site.register(Perspective)
admin.site.register(Measurement)
admin.site.register(DStrategicGoal)
admin.site.register(AStrategicGoal)
admin.site.register(YearData)
admin.site.register(BSC_2005FiveYearPlan)
admin.site.register(ITPlan)
admin.site.register(MonthlyReport)
admin.site.register(DailyReport)
admin.site.register(Months)