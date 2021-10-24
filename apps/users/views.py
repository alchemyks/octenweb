from django.contrib.auth import get_user_model
from django.shortcuts import render

from rest_framework.generics import ListCreateAPIView

from .Serializers import UserSerializer

UserModel = get_user_model()


class UserListView(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
