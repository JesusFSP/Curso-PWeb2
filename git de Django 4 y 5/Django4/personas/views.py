from django.shortcuts import render
from .forms import RawPersonaForm

def personasAnotherCreateView(request):
    form = RawPersonaForm()
    context = {
        'form': form
    }
    return render(request, "personas/personasCreate.html", context)
# Create your views here.
