from rest_framework.serializers import ModelSerializer

from .models import Organization, Person 


class OrganizationSerializer(ModelSerializer):
    class Meta:
        model = Organization
        fields = (
            'id',
            'name_ko',
            'name_en',
            'description_ko',
            'description_en',
            'location_ko',
            'location_en',
            'phone',
            'email',
            'link',
        )


class PersonSerializer(ModelSerializer):
    class Meta:
        model = Person
        fields = (
            'id',
            'name_ko',
            'name_en',
            'department_ko',
            'department_en',
            'position_ko',
            'position_en',
            'image',
        )
