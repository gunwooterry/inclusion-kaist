from rest_framework.generics import CreateAPIView

from .models import Report
from .serializers import ReportSerializer


class ReportCreate(CreateAPIView):
    serializer_class = ReportSerializer
    queryset = Report.objects.all()
