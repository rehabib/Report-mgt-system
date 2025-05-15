# api/urls.py

from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView

from .views.authentication import (
    DepartmentTokenView,  # issues JWT + checks department_id
    ProfileView,          # GET /api/profile/
)
from .views.department      import DepartmentListView, DepartmentDetailView
from .views.goals           import GoalsListView, GoalsDetailView
from .views.agency_plan     import AgencyPlanListView, AgencyPlanDetailView
from .views.director_plan   import DirectorPlanListView, DirectorPlanDetailView
from .views.measurement     import MeasurementListView, MeasurementDetailView
from .views.perspective     import PerspectiveListView, PerspectiveDetailView
from .views.strategicGoal   import AStrategicGoalListView, AStrategicGoalDetailView
from .views.strategicGoal   import DStrategicGoalListView, DStrategicGoalDetailView
from .views.yearData        import YearDataListView, YearDataDetailView
from .views.reports         import (
    MonthsListView, MonthsDetailView,
    DailyReportListView, DailyReportDetailView,
    MonthlyReportListView, MonthlyReportDetailView
)

urlpatterns = [
    # ─── JWT Authentication ────────────────────────────────────────────────
    # POST   /api/token/          → DepartmentTokenView
    # POST   /api/token/refresh/  → TokenRefreshView
    path("api/", include("api.urls")),
    path("token/",         DepartmentTokenView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(),   name="token_refresh"),

    # ─── Profile ───────────────────────────────────────────────────────────
    # GET    /api/profile/
    path("profile/", ProfileView.as_view(), name="profile-view"),

    # ─── Lookup & CRUD endpoints ───────────────────────────────────────────
    path("department/",           DepartmentListView.as_view(),     name="department-list"),
    path("department/<int:pk>/",  DepartmentDetailView.as_view(),   name="department-detail"),

    path("goals/",           GoalsListView.as_view(),     name="goals-list"),
    path("goals/<int:pk>/",  GoalsDetailView.as_view(),   name="goals-detail"),

    path("perspective/",           PerspectiveListView.as_view(),     name="perspective-list"),
    path("perspective/<int:pk>/",  PerspectiveDetailView.as_view(),   name="perspective-detail"),

    path("measurement/",           MeasurementListView.as_view(),     name="measurement-list"),
    path("measurement/<int:pk>/",  MeasurementDetailView.as_view(),   name="measurement-detail"),

    path("astrategicGoal/",           AStrategicGoalListView.as_view(),     name="astrategicGoal-list"),
    path("astrategicGoal/<int:pk>/",  AStrategicGoalDetailView.as_view(),   name="astrategicGoal-detail"),

    path("dstrategicGoal/",           DStrategicGoalListView.as_view(),     name="dstrategicGoal-list"),
    path("dstrategicGoal/<int:pk>/",  DStrategicGoalDetailView.as_view(),   name="dstrategicGoal-detail"),

    path("yearData/",           YearDataListView.as_view(),     name="yearData-list"),
    path("yearData/<int:pk>/",  YearDataDetailView.as_view(),   name="yearData-detail"),

    # ─── Plan endpoints ───────────────────────────────────────────────────
    path("agency_plan/",           AgencyPlanListView.as_view(),     name="agency_plan-list"),
    path("agency_plan/<int:pk>/",  AgencyPlanDetailView.as_view(),   name="agency_plan-detail"),

    path("director_plan/",           DirectorPlanListView.as_view(),     name="director_plan-list"),
    path("director_plan/<int:pk>/",  DirectorPlanDetailView.as_view(),   name="director_plan-detail"),

    # ─── Report endpoints ─────────────────────────────────────────────────
    path("months/",                MonthsListView.as_view(),           name="months-list"),
    path("months/<int:pk>/",       MonthsDetailView.as_view(),         name="months-detail"),

    path("daily-reports/",         DailyReportListView.as_view(),      name="daily-report-list"),
    path("daily-reports/<int:pk>/",DailyReportDetailView.as_view(),    name="daily-report-detail"),

    path("monthly-reports/",         MonthlyReportListView.as_view(),      name="monthly-report-list"),
    path("monthly-reports/<int:pk>/",MonthlyReportDetailView.as_view(),    name="monthly-report-detail"),
]
