from django.db import models


# Create your models here.
class Computer(models.Model):
    class Meta:
        db_table = 'computers'
    brand = models.CharField(max_length=20)
    model = models.CharField(max_length=56)
    ram_size = models.IntegerField()
    cpu_f = models.IntegerField()
    monitor_diag = models.IntegerField()
