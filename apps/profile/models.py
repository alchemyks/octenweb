from django.db import models

# Create your models here.
from apps.users.models import UserModel


class ProfileModel(models.Model):
    class Meta:
        db_table = 'profile'

    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE, related_name='profile')
