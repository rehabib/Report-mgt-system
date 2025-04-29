
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.director_plan import DirectorPlan
from ..serializers import DirectorPlanSerializer
class DirectorPlanListView(generics.ListCreateAPIView):
    queryset = DirectorPlan.objects.all()
    serializer_class = DirectorPlanSerializer
    permission_classes = [IsAuthenticated]

class DirectorPlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DirectorPlan.objects.all()
    serializer_class = DirectorPlanSerializer
    permission_classes = [IsAuthenticated]
