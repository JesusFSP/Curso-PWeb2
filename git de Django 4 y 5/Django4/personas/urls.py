from django.urls import path
from .views import (
    personasListView,
    personasShowObject,
    personasDeleteView,
    personasAnotherCreateView,
)

app_name = 'personas' 
urlpatterns = [
    path('', personasListView, name='lista'),
    path('crear/', personasAnotherCreateView, name='crear'),
    path('<int:myId>/', personasShowObject, name='detalle'),
    path('<int:myId>/delete/', personasDeleteView, name='borrar'),
]