from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .forms import RawPersonaForm
from .models import Persona 

class PersonaCreateView(CreateView):
    model = Persona
    fields = [
        'nombres',
        'apellidos',
        'edad',
        'donador'
    ] 

def personasAnotherCreateView(request):
    
    if request.method == "POST":
        
        form = RawPersonaForm(request.POST)
        if form.is_valid(): 
            print(form.cleaned_data)
            
            Persona.objects.create(**form.cleaned_data)
            form = RawPersonaForm() 
        else:
            print(form.errors) 
    else:
        form = RawPersonaForm()

    context = {
        'form': form
    }
    return render(request, "personas/personasCreate.html", context)

class PersonaListView(ListView):
    model = Persona
    
    queryset = Persona.objects.filter(edad__lte=40)

class PersonaDetailView(DetailView):
    model = Persona

def personasDeleteView(request, myId):
    obj = get_object_or_404(Persona, id=myId)
    if request.method == "POST":
        obj.delete() # 
        return redirect('/personas/') 
    context = {
        "object": obj
    }
    return render(request, "personas/personas_delete.html", context)