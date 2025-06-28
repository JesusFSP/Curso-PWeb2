from django.urls import path
from .views import (
    PersonaListView, 
    personasShowObject,
    personasDeleteView,
    personasAnotherCreateView,
)

app_name = 'personas' 
urlpatterns = [
    path('', PersonaListView.as_view(), name='persona-list'),
    path('crear/', personasAnotherCreateView, name='crear'),
    path('<int:myId>/', personasShowObject, name='detalle'),
    path('<int:myId>/delete/', personasDeleteView, name='borrar'),
]