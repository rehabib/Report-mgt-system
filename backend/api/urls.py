from django.urls import path
from .views.bscFiveYearPlan import BscFiveYearPlanListView, BscFiveYearPlanDetailView
from .views.department import DepartmentListView, DepartmentDetailView
from .views.goals import GoalsListView, GoalsDetailView
from .views.itplan import ITPlanListView, ITPlanDetailView
from .views.measurement import MeasurementListView, MeasurementDetailView
from .views.perspective import PerspectiveListView, PerspectiveDetailView
from .views.reports import MonthlyReportListView, MonthlyReportDetailView
from .views.reports import MonthsListView, MonthsDetailView
from .views.reports import DailyReportListView, DailyReportDetailView
from .views.strategicGoal import AStrategicGoalListView, AStrategicGoalDetailView
from .views.strategicGoal import DStrategicGoalListView, DStrategicGoalDetailView
from .views.yearData import YearDataListView, YearDataDetailView

urlpatterns = [
    path('bscFiveYearPlan/', BscFiveYearPlanListView.as_view(), name='bscFiveYearPlan-list'),
    path('bscFiveYearPlan/<int:pk>/', BscFiveYearPlanDetailView.as_view(), name='bscFiveYearPlan-detail'),

    path('department/', DepartmentListView.as_view(), name='department-list'),
    path('department/<int:pk>/', DepartmentDetailView.as_view(), name='department-detail'),

    path('goals/', GoalsListView.as_view(), name='goals-list'),
    path('goals/<int:pk>/', GoalsDetailView.as_view(), name='goals-detail'),

    path('itplan/', ITPlanListView.as_view(), name='itplan-list'),
    path('itplan/<int:pk>/', ITPlanDetailView.as_view(), name='itplan-detail'),

    path('measurement/', MeasurementListView.as_view(), name='measurement-list'),
    path('measurement/<int:pk>/', MeasurementDetailView.as_view(), name='measurement-detail'),

    path('perspective/', PerspectiveListView.as_view(), name='perspective-list'),
    path('perspective/<int:pk>/', PerspectiveDetailView.as_view(), name='perspective-detail'),

    path('monthly-reports/', MonthlyReportListView.as_view(), name='monthly-report-list'),
    path('months/', MonthsListView.as_view(), name='month-list'),
    path('daily-reports/', DailyReportListView.as_view(), name='daily-report-list'),

    path('monthly-reports/<int:pk>/', MonthlyReportDetailView.as_view(), name='monthly-report-detail'),
    path('months/<int:pk>/', MonthsDetailView.as_view(), name='months-detail'),
    path('daily-reports/<int:pk>/', DailyReportDetailView.as_view(), name='daily-report-detail'),

    path('strategicGoal/', AStrategicGoalListView.as_view(), name='strategicGoal-list'),
    path('strategicGoal/<int:pk>/', AStrategicGoalDetailView.as_view(), name='strategicGoal-detail'),

    path('strategicGoal/', DStrategicGoalListView.as_view(), name='strategicGoal-list'),
    path('strategicGoal/<int:pk>/', DStrategicGoalDetailView.as_view(), name='strategicGoal-detail'),


    path('yearData/', YearDataListView.as_view(), name='yearData-list'),
    path('yearData/<int:pk>/', YearDataDetailView.as_view(), name='yearData-detail'),
]
