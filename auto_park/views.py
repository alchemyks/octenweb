from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, ListCreateAPIView

# Create your views here.
from auto_park.models import AutoPark
from auto_park.serializers import AutoParkSerializer
from car.serializers import CarSerializer


class AutoParkListView(ListCreateAPIView):
    queryset = AutoPark.objects.all()
    serializer_class = AutoParkSerializer


class AutoParkGetById(RetrieveUpdateDestroyAPIView):
    queryset = AutoPark.objects.all()
    serializer_class = AutoParkSerializer


class AutoParkAddCar(CreateAPIView):
    serializer_class = CarSerializer
    queryset = AutoPark.objects.all()

    def perform_create(self, serializer):
        autopark = self.get_object()
        serializer.save(auto_park=autopark)
