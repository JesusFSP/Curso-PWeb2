from django.urls import path
from . import views

app_name = 'reservas'

urlpatterns = [
    path('', views.home, name='home'),
    path('reservar/', views.crear_reserva, name='crear_reserva'),
]
