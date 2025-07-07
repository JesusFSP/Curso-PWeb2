from django.shortcuts import render

def home(request):
    return render(request, 'reservas/home.html')

def crear_reserva(request):
    return render(request, 'reservas/crear_reserva.html')
