# api/serializers.py

from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import AuthenticationFailed

from .models.user_profile import Profile
from .models.department   import Department
from .serializers import AgencyPlanSerializer

# ──────────────────────────────────────────────────────────────────────────────
# 1️⃣ User Registration Serializer
# ──────────────────────────────────────────────────────────────────────────────
class UserSerializer(serializers.ModelSerializer):
    role          = serializers.ChoiceField(
                       choices=Profile.ROLE_CHOICES,
                       write_only=True
                   )
    department_id = serializers.IntegerField(
                       write_only=True,
                       required=False,
                       allow_null=True
                   )

    class Meta:
        model  = User
        fields = ["id", "username", "password", "role", "department_id"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        role          = validated_data.pop("role")
        department_id = validated_data.pop("department_id", None)

        # 1) Create the User
        user = User.objects.create_user(**validated_data)

        # 2) Attach Profile
        department = None
        if department_id is not None:
            department = Department.objects.get(pk=department_id)
        Profile.objects.create(
            user       = user,
            role       = role,
            department = department
        )
        return user

# ──────────────────────────────────────────────────────────────────────────────
# 2️⃣ Department-aware Token Serializer
# ──────────────────────────────────────────────────────────────────────────────
class DepartmentTokenObtainSerializer(TokenObtainPairSerializer):
    department_id = serializers.IntegerField(write_only=True, required=True)

    def validate(self, attrs):
        # 1) Extract & remove department_id before super()
        dept_id = attrs.pop("department_id")

        # 2) Standard username/password validation
        data = super().validate(attrs)
        user = self.user

        # 3) Confirm the user’s Profile.department matches
        if not hasattr(user, "profile") or user.profile.department_id != dept_id:
            raise AuthenticationFailed("Invalid department for this user.")

        # 4) Optionally include user info in the response
        data.update({
            "user_id":       user.id,
            "username":      user.username,
            "department_id": dept_id,
            "role":          user.profile.role,
        })
        return data
