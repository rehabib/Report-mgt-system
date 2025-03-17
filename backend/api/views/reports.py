
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models.reports import DailyReport
from ..serializers import DailyReportSerializer
from ..models.reports import MonthlyReport
from ..serializers import MonthlyReportSerializer
from ..models.reports import Months
from ..serializers import MonthsSerializer

class DailyReportListView(generics.ListCreateAPIView):
    queryset = DailyReport.objects.all()
    serializer_class = DailyReportSerializer
    permission_classes = [IsAuthenticated]

class DailyReportDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DailyReport.objects.all()
    serializer_class = DailyReportSerializer
    permission_classes = [IsAuthenticated]
    


class MonthsListView(generics.ListCreateAPIView):
    queryset = Months.objects.all()
    serializer_class = MonthsSerializer
    permission_classes = [IsAuthenticated]

class MonthsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Months.objects.all()
    serializer_class = MonthsSerializer
    permission_classes = [IsAuthenticated]

class MonthlyReportListView(generics.ListCreateAPIView):
    queryset = MonthlyReport.objects.all()
    serializer_class = MonthlyReportSerializer
    permission_classes = [IsAuthenticated]

class MonthlyReportDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MonthlyReport.objects.all()
    serializer_class = MonthlyReportSerializer
    permission_classes = [IsAuthenticated]
