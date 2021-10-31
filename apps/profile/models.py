from django.contrib.auth import get_user_model
from django.db import models

from utils.avatar_utils import AvatarUtils

UserModel = get_user_model()


class ProfileModel(models.Model):
    class Meta:
        db_table = 'profile'
        ordering = ('id',)
    
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    age = models.IntegerField()
    phone = models.CharField(max_length=10)
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE, related_name='profile')


class AvatarModel(models.Model):
    class Meta:
        db_table = 'avatars'
        ordering = ('id',)

    url = models.ImageField(upload_to=AvatarUtils.upload_to)
    profile = models.ForeignKey(ProfileModel, on_delete=models.CASCADE, related_name='avatars')
