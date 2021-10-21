from rest_framework.serializers import ModelSerializer

from auto_park.models import AutoPark
from car.serializers import CarSerializer


class AutoParkSerializer(ModelSerializer):
    cars = CarSerializer(many=True, required=False)

    class Meta:
        model = AutoPark
        fields = '__all__'
