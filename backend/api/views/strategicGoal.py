from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.strategicGoal import AStrategicGoal
from ..models.strategicGoal import DStrategicGoal
from ..serializers import AStrategicGoalSerializer
from ..serializers import DStrategicGoalSerializer

class AStrategicGoalListView(generics.ListCreateAPIView):
    queryset = AStrategicGoal.objects.all()
    serializer_class = AStrategicGoalSerializer
    permission_classes = [IsAuthenticated]

class AStrategicGoalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AStrategicGoal.objects.all()
    serializer_class = AStrategicGoalSerializer
    permission_classes = [IsAuthenticated]




class DStrategicGoalListView(generics.ListCreateAPIView):
    queryset = DStrategicGoal.objects.all()
    serializer_class = DStrategicGoalSerializer
    permission_classes = [IsAuthenticated]

class DStrategicGoalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DStrategicGoal.objects.all()
    serializer_class = DStrategicGoalSerializer
    permission_classes = [IsAuthenticated]