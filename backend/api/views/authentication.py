# api/views/authentication.py

from rest_framework import status, generics
from rest_framework.views        import APIView
from rest_framework.response     import Response
from rest_framework.permissions  import IsAuthenticated, AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.models  import User
from ..serializers               import UserSerializer, DepartmentTokenObtainSerializer
from ..models.user_profile       import Profile

# ──────────────────────────────────────────────────────────────────────────────
# 1️⃣ User Registration
# ──────────────────────────────────────────────────────────────────────────────
class CreateUserView(generics.CreateAPIView):
    queryset         = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# ──────────────────────────────────────────────────────────────────────────────
# 2️⃣ Password Reset (stub)
# ──────────────────────────────────────────────────────────────────────────────
class PasswordResetView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        if not email:
            return Response(
                {"error": "Please provide an email address."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        # TODO: integrate real email‐sending here
        return Response({"message": "If that email exists, a reset link was sent."})

# ──────────────────────────────────────────────────────────────────────────────
# 3️⃣ Profile Info (protected)
# ──────────────────────────────────────────────────────────────────────────────
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        try:
            profile = Profile.objects.get(user=request.user)
            return Response({
                "username":   request.user.username,
                "role":       profile.role,
                "department": profile.department.name if profile.department else None
            }, status=status.HTTP_200_OK)
        except Profile.DoesNotExist:
            return Response(
                {"error": "Profile not found."},
                status=status.HTTP_404_NOT_FOUND
            )

# ──────────────────────────────────────────────────────────────────────────────
# 4️⃣ Department-aware Token Obtain
# ──────────────────────────────────────────────────────────────────────────────
class DepartmentTokenView(TokenObtainPairView):
    serializer_class   = DepartmentTokenObtainSerializer
    permission_classes = [AllowAny]
