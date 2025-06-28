from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic.list import ListView
from .forms import RawPersonaForm
from .models import Persona 


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

def personasShowObject(request, myId):
    
    obj = get_object_or_404(Persona, id=myId) # 
    context = {
        'object': obj
    }
    return render(request, "personas/personas_detail.html", context)

def personasDeleteView(request, myId):
    obj = get_object_or_404(Persona, id=myId)
    if request.method == "POST":
        obj.delete() # 
        return redirect('/personas/') 
    context = {
        "object": obj
    }
    return render(request, "personas/personas_delete.html", context)