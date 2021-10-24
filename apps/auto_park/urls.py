from django.urls import path

from apps.auto_park.views import AutoParkListView, AutoParkAddCar, AutoParkGetById

urlpatterns = [

    path('/<pk>/cars', AutoParkAddCar.as_view()),
    path('/<int:pk>', AutoParkGetById.as_view()),
    path('', AutoParkListView.as_view()),
]
