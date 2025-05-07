# views/user_profile.py (optional, only if needed)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..models.user_profile import Profile
from backend.serializers.user_profile_serializer import ProfileSerializer


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        
        profile = Profile.objects.get(user=request.user)
        return Response({
            "username": profile.user.username,
            "role": profile.role,
            "department": profile.department.name if profile.department else None
        })