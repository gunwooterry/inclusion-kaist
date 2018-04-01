from rest_framework.generics import ListAPIView

from .models import Organization, Person
from .serializers import OrganizationSerializer, PersonSerializer


class OrganizationList(ListAPIView):
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()


class PersonList(ListAPIView):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()
