
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.bscFiveYearPlan import BSC_2005FiveYearPlan
from ..serializers import BSC_2005FiveYearPlanSerializer



class BscFiveYearPlanListView(generics.ListCreateAPIView):
    queryset = BSC_2005FiveYearPlan.objects.all()
    serializer_class = BSC_2005FiveYearPlanSerializer
    permission_classes = [IsAuthenticated]

class BscFiveYearPlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BSC_2005FiveYearPlan.objects.all()
    serializer_class = BSC_2005FiveYearPlanSerializer
    permission_classes = [IsAuthenticated]







