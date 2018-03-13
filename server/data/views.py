from rest_framework.generics import ListAPIView

from .models import Article, Organization, Person
from .serializers import ArticleSerializer, OrganizationSerializer, PersonSerializer


class ArticleList(ListAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all().order_by('-date')


class OrganizationList(ListAPIView):
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()


class PersonList(ListAPIView):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()
