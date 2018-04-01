# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-01 11:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('report', '0002_report_submitted'),
    ]

    operations = [
        migrations.AddField(
            model_name='report',
            name='content',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='report',
            name='option',
            field=models.PositiveSmallIntegerField(choices=[(1, '사건 제보'), (2, '상담 요청'), (3, '대화 요청')], default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='report',
            name='phone',
            field=models.CharField(blank=True, max_length=15),
        ),
    ]