from django.shortcuts import render, get_object_or_404
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
def personasListView(request):
    queryset = Persona.objects.all()
    context = {
        "object_list": queryset
    }
    return render(request, "personas/personas_list.html", context)

def personasShowObject(request, myId):
    # obj = Persona.objects.get(id=myId)
    obj = get_object_or_404(Persona, id=myId) # 
    context = {
        'object': obj
    }
    return render(request, "personas/personas_detail.html", context)