
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.itplan import ITPlan
from ..serializers import ITPlanSerializer
class ITPlanListView(generics.ListCreateAPIView):
    queryset = ITPlan.objects.all()
    serializer_class = ITPlanSerializer
    permission_classes = [IsAuthenticated]

class ITPlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ITPlan.objects.all()
    serializer_class = ITPlanSerializer
    permission_classes = [IsAuthenticated]
