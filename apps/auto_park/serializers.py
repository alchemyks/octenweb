from rest_framework.serializers import ModelSerializer

from apps.auto_park.models import AutoPark
from apps.car.serializers import CarSerializer


class AutoParkSerializer(ModelSerializer):
    cars = CarSerializer(many=True, read_only=True)

    class Meta:
        model = AutoPark
        fields = '__all__'
