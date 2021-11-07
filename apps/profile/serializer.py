from rest_framework.serializers import ModelSerializer

from apps.profile.models import ProfileModel


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        #fields = '__all__'
        exclude = ('user', )

