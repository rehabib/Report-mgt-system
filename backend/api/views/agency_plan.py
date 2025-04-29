
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.agency_plan import AgencyPlan
from ..serializers import AgencyPlanSerializer



class AgencyPlanListView(generics.ListCreateAPIView):
    queryset = AgencyPlan.objects.all()
    serializer_class = AgencyPlanSerializer
    permission_classes = [IsAuthenticated]

class AgencyPlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AgencyPlan.objects.all()
    serializer_class = AgencyPlanSerializer
    permission_classes = [IsAuthenticated]







