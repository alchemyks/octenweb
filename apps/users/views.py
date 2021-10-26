from django.contrib.auth import get_user_model
from rest_framework import status

from rest_framework.generics import ListCreateAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .Serializers import UserSerializer
from .permissions import IsSuperUser

UserModel = get_user_model()


class UserListView(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

    def get_permissions(self):
        if self.request.method == 'POST':
            return AllowAny(),
        return IsAuthenticated(),


class UserToAdminView(GenericAPIView):
    permission_classes = (IsSuperUser,)
    queryset = UserModel.objects.all()

    def patch(self, *args, **kwargs):
        user = self.get_object()
        user.is_staff = True
        user.save()
        data = UserSerializer(user).data
        return Response(data, status.HTTP_200_OK)


class UserRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

    def get_permissions(self):
        if self.request.method == 'DELETE' or self.request.method == 'PATCH':
            return IsAdminUser(),
        return IsAuthenticated(),




