from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.
from apps.users.models import UserModel
from apps.users.serializer import UserSerializer


class UserCreateView(APIView):

    def get(self, *args, **kwargs):
        users = UserModel.objects.all()
        serializer = UserSerializer(instance=users, many=True)
        return Response(serializer.data, status.HTTP_200_OK)

    def post(self, *args, **kwargs):
        data = self.request.data
        serializer = UserSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserDeleteUpdate(APIView):

    def patch(self, *args, **kwargs):
        pk = kwargs.get('pk')
        data = self.request.data
        exist = UserModel.objects.filter(pk=pk).exists()
        if not exist:
            return Response('Oops, id is not found', status.HTTP_404_NOT_FOUND)
        user_for_edit = UserModel.objects.get(pk=pk)
        serializer = UserSerializer(instance=user_for_edit, data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status.HTTP_200_OK)

    def delete(self, *args, **kwargs):
        pk = kwargs.get('pk')
        exist = UserModel.objects.filter(pk=pk).exists()
        if not exist:
            return Response('Oops, user is not found!', status.HTTP_404_NOT_FOUND)
        user = UserModel.objects.get(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    