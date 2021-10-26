from django.urls import path

from apps.users.views import UserListView, UserRetrieveUpdateDestroy

urlpatterns = [
    path('', UserListView.as_view()),
    path('/<int:pk>', UserRetrieveUpdateDestroy.as_view())
]
