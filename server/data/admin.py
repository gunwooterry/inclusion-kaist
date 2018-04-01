from django.contrib import admin
from django.contrib.admin import ModelAdmin

from .models import Organization, Person


@admin.register(Organization)
class OrganizationAdmin(ModelAdmin):
    list_display = (
        'name_ko',
        'name_en',
        'link',
    )


@admin.register(Person)
class PersonAdmin(ModelAdmin):
    list_display = (
        'name_ko',
        'name_en',
        'department_ko',
        'department_en',
    )
