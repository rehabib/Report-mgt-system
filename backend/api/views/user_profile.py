# views/user_profile.py (optional, only if needed)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from your_app.models import Profile
from backend.serializers.user_profile_serializer import ProfileSerializer

@api_view(['GET'])
def get_user_profile(request):
    profile = Profile.objects.get(user=request.user)
    serializer = ProfileSerializer(profile)
    return Response(serializer.data)
