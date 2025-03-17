
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.goals import Goals
from ..serializers import GoalsSerializer

class GoalsListView(generics.ListCreateAPIView):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer
    permission_classes = [IsAuthenticated]

class GoalsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer
    permission_classes = [IsAuthenticated]
