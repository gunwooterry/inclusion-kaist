from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin

from data.views import OrganizationList, PersonList
from report.views import ReportCreate

static_urls = static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns = static_urls + [
    url(r'^admin/', admin.site.urls),
    url(r'^orgs/', OrganizationList.as_view()),
    url(r'^people/', PersonList.as_view()),
    url(r'^reports/', ReportCreate.as_view()),
]
