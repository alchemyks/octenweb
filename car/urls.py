from django.urls import path

from car.views import CarListCreateView, CarRetrieveUpdateDestroyView

urlpatterns = [
    path('', CarListCreateView.as_view()),
    path('/<pk>', CarRetrieveUpdateDestroyView.as_view())

]