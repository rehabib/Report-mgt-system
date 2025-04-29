from django.urls import path
from .views.agency_plan import AgencyPlanListView, AgencyPlanDetailView
from .views.department import DepartmentListView, DepartmentDetailView
from .views.goals import GoalsListView, GoalsDetailView
from .views.director_plan import DirectorPlanListView, DirectorPlanDetailView
from .views.measurement import MeasurementListView, MeasurementDetailView
from .views.perspective import PerspectiveListView, PerspectiveDetailView
from .views.reports import MonthlyReportListView, MonthlyReportDetailView
from .views.reports import MonthsListView, MonthsDetailView
from .views.reports import DailyReportListView, DailyReportDetailView
from .views.strategicGoal import AStrategicGoalListView, AStrategicGoalDetailView
from .views.strategicGoal import DStrategicGoalListView, DStrategicGoalDetailView
from .views.yearData import YearDataListView, YearDataDetailView

urlpatterns = [
    path('agency_plan/', AgencyPlanListView.as_view(), name='agency_plan-list'),
    path('agency_plan/<int:pk>/', AgencyPlanDetailView.as_view(), name='agency_plan-detail'),

    path('department/', DepartmentListView.as_view(), name='department-list'),
    path('department/<int:pk>/', DepartmentDetailView.as_view(), name='department-detail'),

    path('goals/', GoalsListView.as_view(), name='goals-list'),
    path('goals/<int:pk>/', GoalsDetailView.as_view(), name='goals-detail'),

    path('director_plan/', DirectorPlanListView.as_view(), name='director_plan-list'),
    path('director_plan/<int:pk>/', DirectorPlanDetailView.as_view(), name='director_plan-detail'),

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

    path('astrategicGoal/', AStrategicGoalListView.as_view(), name='astrategicGoal-list'),
    path('astrategicGoal/<int:pk>/', AStrategicGoalDetailView.as_view(), name='astrategicGoal-detail'),

    path('dstrategicGoal/', DStrategicGoalListView.as_view(), name='dstrategicGoal-list'),
    path('dstrategicGoal/<int:pk>/', DStrategicGoalDetailView.as_view(), name='dstrategicGoal-detail'),


    path('yearData/', YearDataListView.as_view(), name='yearData-list'),
    path('yearData/<int:pk>/', YearDataDetailView.as_view(), name='yearData-detail'),
]
