from django.db import models

# Create your models here.
class Books(models.Model):
    title = models.CharField(max_length=52)
    author = models.CharField(max_length=52)
    series = models.CharField(max_length=52)