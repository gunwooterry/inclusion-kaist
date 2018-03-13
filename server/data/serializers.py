from rest_framework.serializers import ModelSerializer

from .models import Article, Organization, Person 


class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = (
            'title_ko',
            'title_en',
            'date',
        )


class OrganizationSerializer(ModelSerializer):
    class Meta:
        model = Organization
        fields = (
            'name_ko',
            'name_en',
            'image',
            'link',
        )


class PersonSerializer(ModelSerializer):
    class Meta:
        model = Person
        fields = (
            'name_ko',
            'name_en',
            'department_ko',
            'department_en',
            'position_ko',
            'position_en',
            'person_type',
            'image',
        )
