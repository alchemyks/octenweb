from django.urls import path

from apps.users.views import (
    AddAvatarView,
    UserActivate,
    UserDeActivate,
    UserDeactivateAdminView,
    UserListView,
    UserRetrieveUpdateDestroy,
    UserToAdminView,
)

urlpatterns = [
    path('', UserListView.as_view()),
    path('/<int:pk>', UserRetrieveUpdateDestroy.as_view()),
    path('/<int:pk>/upadmin', UserToAdminView.as_view()),
    path('/<int:pk>/downadmin', UserDeactivateAdminView.as_view()),
    path('/<int:pk>/activate', UserActivate.as_view()),
    path('/<int:pk>/deactivate', UserDeActivate.as_view()),
    path('/avatar', AddAvatarView.as_view())
]
