from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from django.forms import model_to_dict
from rest_framework.views import APIView
from rest_framework import status
from .models import Computer


class ComputerCR(APIView):
    def get(self, *args, **kwargs):
        comps = Computer.objects.all().values()
        return Response(comps, status.HTTP_200_OK)

    def post(self, *args, **kwargs):
        data = self.request.data
        comp = Computer.objects.create(**data)
        return Response(model_to_dict(comp), status.HTTP_201_CREATED)


class ComputerRUD(APIView):
    def get(self, *args, **kwargs):
        pk = kwargs.get('pk')
        exists = Computer.objects.filter(pk=pk).exists()
        if not exists:
            return Response('User with this id is non found', status.HTTP_404_NOT_FOUND)
        comp = Computer.objects.get(pk=pk)
        return Response(model_to_dict(comp), status.HTTP_200_OK)

    def patch(self, *args, **kwargs):
        pk = kwargs.get('pk')
        print(pk)
        data = self.request.data
        exists = Computer.objects.filter(pk=pk).exists()
        if not exists:
            return Response('User with this id is non found', status.HTTP_404_NOT_FOUND)
        Computer.objects.filter(pk=pk).update(**data)
        return Response('Computer updated', status.HTTP_200_OK)

    def delete(self, *args, **kwargs):
        pk = kwargs.get('pk')
        exists = Computer.objects.filter(pk=pk).exists()
        if not exists:
            return Response('User with this id is non found', status.HTTP_404_NOT_FOUND)
        comp = Computer.objects.get(pk=pk)
        comp.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



