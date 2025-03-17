from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.yearData import YearData  # Importing the YearData model
from ..serializers import YearDataSerializer  # Importing the YearData serializer

# View to list all YearData objects or create new ones
class YearDataListView(generics.ListCreateAPIView):
    queryset = YearData.objects.all()
    serializer_class = YearDataSerializer
    permission_classes = [IsAuthenticated]  # Ensures only authenticated users can access

# View to retrieve, update, or delete a specific YearData object by ID
class YearDataDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = YearData.objects.all()
    serializer_class = YearDataSerializer
    permission_classes = [IsAuthenticated]  # Ensures only authenticated users can access
