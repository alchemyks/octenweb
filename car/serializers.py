from rest_framework.serializers import ModelSerializer

from car.models import Car


class CarSerializer(ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'
        extra_kwargs = {
            'auto_park': {'read_only': True},
        }

