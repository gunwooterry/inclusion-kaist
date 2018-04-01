from django.contrib import admin
from django.contrib.admin import ModelAdmin

from .models import Report

@admin.register(Report)
class ReportAdmin(ModelAdmin):
    list_display = (
        '__str__',
        'option',
        'submitted',
    )
