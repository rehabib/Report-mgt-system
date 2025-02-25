from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import CreateUserView, PasswordResetView  # Import your custom views

urlpatterns = [
    path("admin/", admin.site.urls),  # Admin panel route
    path("api/user/register/", CreateUserView.as_view(), name="register"),  # Custom registration endpoint
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),  # JWT Token Obtain endpoint
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),  # JWT Token Refresh endpoint
    path("api/password_reset/", PasswordResetView.as_view(), name="password_reset"),  # Forgot password
    path("api-auth/", include("rest_framework.urls")),  # Default API Auth for DRF
    path("api/", include("api.urls")),  # Including your API app URLs
]



