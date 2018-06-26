from rest_framework.generics import CreateAPIView

from .models import Report
from .serializers import ReportSerializer

from django.core.mail import send_mail
from django.conf import settings


class ReportCreate(CreateAPIView):
    serializer_class = ReportSerializer
    queryset = Report.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data
        options = dict(Report.OPTIONS)
        send_mail(
            subject=options[int(data['option'])],
            message=data['content'],
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=['inclusion@kaist.ac.kr'],
            fail_silently=False,
        )
        return super(ReportCreate, self).create(request, *args, **kwargs)
