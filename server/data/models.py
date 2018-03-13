from django.db import models

class Article(models.Model):
    title_ko = models.CharField(max_length=200)
    title_en = models.CharField(max_length=200)
    date = models.DateField()

    def __str__(self):
        return self.title_ko


class Organization(models.Model):
    name_ko = models.CharField(max_length=100)
    name_en = models.CharField(max_length=100)
    
    image = models.ImageField(blank=True, null=True)
    link = models.URLField()

    def __str__(self):
        return self.name_ko


class Person(models.Model):
    PERSON_TYPES = [
        ('F', 'Faculty'),
        ('C', 'Contributor'),
    ]

    name_ko = models.CharField(max_length=50)
    name_en = models.CharField(max_length=50)
    department_ko = models.CharField(max_length=100)
    department_en = models.CharField(max_length=100)
    position_ko = models.CharField(max_length=100)
    position_en = models.CharField(max_length=100)

    person_type = models.CharField(max_length=1, choices=PERSON_TYPES)
    image = models.ImageField(blank=True, null=True)

    def __str__(self):
        return '{} ({})'.format(self.name_ko, self.department_ko)
