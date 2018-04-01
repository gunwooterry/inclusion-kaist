from django.db import models

class Organization(models.Model):
    name_ko = models.CharField(max_length=100)
    name_en = models.CharField(max_length=100)
    description_ko = models.CharField(max_length=500, blank=True)
    description_en = models.CharField(max_length=500, blank=True)
    location_ko = models.CharField(max_length=100, blank=True)
    location_en = models.CharField(max_length=100, blank=True)

    phone = models.CharField(max_length=15, blank=True)
    email = models.EmailField(blank=True)
    link = models.URLField(blank=True)

    def __str__(self):
        return self.name_ko


class Person(models.Model):
    name_ko = models.CharField(max_length=50)
    name_en = models.CharField(max_length=50)
    department_ko = models.CharField(max_length=100, blank=True)
    department_en = models.CharField(max_length=100, blank=True)
    position_ko = models.CharField(max_length=100, blank=True)
    position_en = models.CharField(max_length=100, blank=True)

    image = models.ImageField(blank=True, null=True, upload_to='profiles')

    def __str__(self):
        return '{} ({})'.format(self.name_ko, self.department_ko)
