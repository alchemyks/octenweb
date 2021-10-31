from django.contrib.auth import get_user_model

from rest_framework import status
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from ..profile.Serializers import AvatarSerializer
from .permissions import IsSuperUser
from .Serializers import UserSerializer

UserModel = get_user_model()


class UserListView(ListCreateAPIView):
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return AllowAny(),
        return IsAuthenticated(),

    def get_queryset(self):
        qs = UserModel.objects.exclude(id=self.request.user.id)
        return qs

    def get_serializer_context(self):
        return {'request': self.request}


class UserToAdminView(GenericAPIView):
    permission_classes = (IsSuperUser,)
    queryset = UserModel.objects.all()

    def patch(self, *args, **kwargs):
        user = self.get_object()
        UserModel.objects.to_admin(user)
        data = UserSerializer(user).data
        return Response(data, status.HTTP_200_OK)


class UserDeactivateAdminView(GenericAPIView):
    permission_classes = (IsSuperUser,)
    queryset = UserModel.objects.all()

    def patch(self, *args, **kwargs):
        user = self.get_object()
        UserModel.objects.to_user(user)
        data = UserSerializer(user).data
        return Response(data, status.HTTP_200_OK)


class UserRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

    def get_permissions(self):
        if self.request.method == 'DELETE' or self.request.method == 'PATCH':
            return IsAdminUser(),
        return IsAuthenticated(),


class UserActivate(GenericAPIView):
    permission_classes = IsAdminUser, IsSuperUser,
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

    def patch(self, *args, **kwargs):
        user = self.get_object()
        user.is_active = True
        user.save()
        data = UserSerializer(user).data
        return Response(data, status.HTTP_200_OK)


class UserDeActivate(GenericAPIView):
    permission_classes = IsAdminUser, IsSuperUser,
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

    def patch(self, *args, **kwargs):
        user = self.get_object()
        user.is_active = False
        user.save()
        data = UserSerializer(user).data
        return Response(data, status.HTTP_200_OK)


class AddAvatarView(GenericAPIView):

    def patch(self, *args, **kwargs):
        avatar_data = self.request.FILES.get('avatar')
        serializer = AvatarSerializer(data={'url': avatar_data})
        serializer.is_valid(raise_exception=True)
        serializer.save(profile=self.request.user.profile)
        user = UserSerializer(self.request.user).data
        return Response(user, status.HTTP_200_OK)





