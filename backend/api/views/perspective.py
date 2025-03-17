
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.perspective import Perspective
from ..serializers import PerspectiveSerializer


class PerspectiveListView(generics.ListCreateAPIView):
    queryset = Perspective.objects.all()
    serializer_class = PerspectiveSerializer
    permission_classes = [IsAuthenticated]

class PerspectiveDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Perspective.objects.all()
    serializer_class = PerspectiveSerializer
    permission_classes = [IsAuthenticated]
