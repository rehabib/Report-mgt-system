
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.measurement import Measurement
from ..serializers import MeasurementSerializer


class MeasurementListView(generics.ListCreateAPIView):
    queryset = Measurement.objects.all()
    serializer_class = MeasurementSerializer
    permission_classes = [IsAuthenticated]

class MeasurementDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Measurement.objects.all()
    serializer_class = MeasurementSerializer
    permission_classes = [IsAuthenticated]
