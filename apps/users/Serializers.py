from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer
from utils.email_utils import EmailUtils
from utils.jwt_utils import JwtUtils

from apps.profile.models import ProfileModel
from apps.profile.Serializers import ProfileSerializer

UserModel = get_user_model()


class UserSerializer(ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = UserModel
        fields = (
            'id', 'email', 'password', 'last_login', 'is_superuser', 'is_staff', 'is_active', 'created_at',
            'updated_at', 'profile'
        )

    extra_kwargs = {
        'password': {'write_only': True}
    }

    def create(self, validated_data: dict):
        profile = validated_data.pop('profile')
        user = UserModel.objects.create_user(**validated_data)
        ProfileModel.objects.create(**profile, user=user)
        token = JwtUtils.create_token(user)
        request = self.context.get('request')
        EmailUtils.register_email(user.email, profile.get('name'), token, request)
        return user
