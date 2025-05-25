from django import forms
from .models import Alumno, Curso, NotaAlumnoPorCurso

class AlumnoForm(forms.ModelForm):
    class Meta:
        model = Alumno
        fields = '__all__'

class CursoForm(forms.ModelForm):
    class Meta:
        model = Curso
        fields = '__all__'

class NotaForm(forms.ModelForm):
    codigo_alumno = forms.CharField(max_length=10, label="Código del Alumno")
    codigo_curso = forms.CharField(max_length=10, label="Código del Curso")

    class Meta:
        model = NotaAlumnoPorCurso
        fields = ['codigo_alumno', 'codigo_curso', 'nota']

    def clean_codigo_alumno(self):
        codigo = self.cleaned_data.get('codigo_alumno')
        if not Alumno.objects.filter(codigo=codigo).exists():
            raise forms.ValidationError("El alumno con este código no existe.")
        return codigo

    def clean_codigo_curso(self):
        codigo = self.cleaned_data.get('codigo_curso')
        if not Curso.objects.filter(codigo=codigo).exists():
            raise forms.ValidationError("El curso con este código no existe.")
        return codigo

    def save(self, commit=True):
        codigo_alumno = self.cleaned_data.get('codigo_alumno')
        codigo_curso = self.cleaned_data.get('codigo_curso')
        
        alumno = Alumno.objects.get(codigo=codigo_alumno)
        curso = Curso.objects.get(codigo=codigo_curso)
        
        nota = super().save(commit=False)
        nota.alumno = alumno
        nota.curso = curso
        
        if commit:
            nota.save()
        return nota