from django import forms

class RawPersonaForm(forms.Form):
    nombres   = forms.CharField(label='Nombres')
    apellidos = forms.CharField()
    edad      = forms.IntegerField()
    donador   = forms.BooleanField(required=False) # Es buena idea hacerlo no requerido