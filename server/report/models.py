from django.db import models

class Report(models.Model):
    OPTIONS = [
        (1, '사건 제보'),
        (2, '상담 요청'),
        (3, '대화 요청'),
    ]

    option = models.PositiveSmallIntegerField(choices=OPTIONS)
    content = models.TextField()
    phone = models.CharField(max_length=15, blank=True)
    submitted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Report #{}'.format(self.id)
