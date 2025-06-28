from django.shortcuts import render
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
            print(form.errors) # [cite: 12]
    else:
        form = RawPersonaForm()

    context = {
        'form': form
    }
    return render(request, "personas/personasCreate.html", context)
def personasAnotherCreateView(request):
    form = RawPersonaForm()
    context = {
        'form': form
    }
    return render(request, "personas/personasCreate.html", context)

