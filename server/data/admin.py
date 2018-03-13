from django.contrib import admin
from django.contrib.admin import ModelAdmin

from .models import Article, Organization, Person


@admin.register(Article)
class ArticleAdmin(ModelAdmin):
    list_display = (
        'title_ko',
        'title_en',
        'date',
    )


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
        'position_ko',
        'position_en',
        'person_type',
    )
