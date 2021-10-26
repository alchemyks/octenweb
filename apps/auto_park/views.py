from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView, ListCreateAPIView

# Create your views here.
from rest_framework.permissions import AllowAny

from apps.auto_park.models import AutoPark
from apps.auto_park.serializers import AutoParkSerializer
from apps.car.serializers import CarSerializer


class AutoParkListView(ListCreateAPIView):
    queryset = AutoPark.objects.all()
    serializer_class = AutoParkSerializer


class AutoParkGetById(RetrieveUpdateDestroyAPIView):
    queryset = AutoPark.objects.all()
    serializer_class = AutoParkSerializer


class AutoParkAddCar(CreateAPIView):
    serializer_class = CarSerializer
    queryset = AutoPark.objects.all()
    # permission_classes = (AllowAny,)


    def perform_create(self, serializer):
        autopark = self.get_object()
        serializer.save(auto_park=autopark)
