from django.shortcuts import render, redirect
from .forms import AlumnoForm, CursoForm, NotaForm
from .models import Alumno, Curso, NotaAlumnoPorCurso

def lista_alumnos(request):
    alumnos = Alumno.objects.all()
    return render(request, 'sistema/lista_alumnos.html', {'alumnos': alumnos})

def crear_alumno(request):
    if request.method == 'POST':
        form = AlumnoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_alumnos')
    else:
        form = AlumnoForm()
    return render(request, 'sistema/crear_alumno.html', {'form': form})

def lista_cursos(request):
    cursos = Curso.objects.all()
    return render(request, 'sistema/lista_cursos.html', {'cursos': cursos})

def crear_curso(request):
    if request.method == 'POST':
        form = CursoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_cursos')
    else:
        form = CursoForm()
    return render(request, 'sistema/crear_curso.html', {'form': form})

def lista_notas(request):
    notas = NotaAlumnoPorCurso.objects.all()
    return render(request, 'sistema/lista_notas.html', {'notas': notas})

def crear_nota(request):
    if request.method == 'POST':
        form = NotaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_notas')
    else:
        form = NotaForm()
    return render(request, 'sistema/crear_nota.html', {'form': form})