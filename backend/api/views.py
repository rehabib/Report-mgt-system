from rest_framework import status, serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class CreateUserView(generics.CreateAPIView):

    queryset =  User.objects.all()
    serializer_class = UserSerializer
    permission_classes =[AllowAny]
# Password Reset View (Forgot Password)
class PasswordResetView(APIView):
    def post(self, request, *args, **kwargs):
        # This view is typically used to trigger a password reset email
        # For simplicity, let's assume you're triggering an email in this example
        email = request.data.get("email")
        
        if not email:
            return Response(
                {"error": "Please provide an email address."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Here you would add logic to send a password reset email
        return Response({"message": "Password reset email sent."}, status=status.HTTP_200_OK)
