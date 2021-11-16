from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer

from apps.profile.models import ProfileModel
from apps.profile.serializer import ProfileSerializer

UserModel = get_user_model()


class UserSerializer(ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = UserModel
        fields = ('id', 'username', 'password', 'is_driver', 'profile')
        
    extra_kwargs = {
            'password': {'write_only': True}
    }

    def create(self, validated_data):
        profile = validated_data.pop('profile')
        user = UserModel.objects.create_user(**validated_data)
        ProfileModel.objects.create(**profile, user=user)
        return user

