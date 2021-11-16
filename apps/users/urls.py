from django.urls import path

from .views import UserCreateView, UserDeleteUpdate

urlpatterns = [
    path('', UserCreateView.as_view()),
    path('/<pk>', UserDeleteUpdate.as_view()),
]