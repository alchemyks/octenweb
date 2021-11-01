from django.db import models

# Create your models here.
from apps.auto_park.models import AutoPark


class Car(models.Model):
    class Meta:
        db_table = 'cars'
    brand = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    year = models.IntegerField()
    auto_park = models.ForeignKey(AutoPark, on_delete=models.CASCADE, related_name='cars')
