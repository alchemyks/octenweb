from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer

from apps.profile.models import ProfileModel
from apps.profile.serializer import ProfileSerializer
from apps.users.managers import UserManager

UserModel = get_user_model()


class UserSerializer(ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = UserModel
        fields = ('id', 'username', 'password', 'is_driver', 'profile')
        
    extra_kwargs = {
            'password': {'write_only': True},
            'profile': {'read_only': True}
    }

    def create(self, validated_data):
        profile = validated_data.pop('profile')
        user = UserModel.objects.create_user(**validated_data)
        ProfileModel.objects.create(**profile, user=user)
        return user

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile_serializer = ProfileSerializer(instance.profile, data=profile_data)
        profile_serializer.is_valid()
        profile_serializer.save()
        if validated_data.get('password'):
            password = validated_data.pop('password')
            instance.set_password(password)
        super().update(instance, validated_data)
        instance.save()
        return instance

