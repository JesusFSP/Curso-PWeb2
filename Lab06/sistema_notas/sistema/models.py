from django.db import models

class Alumno(models.Model):
    codigo = models.CharField(max_length=10, unique=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField()
    fecha_nacimiento = models.DateField()

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Curso(models.Model):
    codigo = models.CharField(max_length=10, unique=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    creditos = models.PositiveIntegerField()

    def __str__(self):
        return self.nombre

class NotaAlumnoPorCurso(models.Model):
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    nota = models.DecimalField(max_digits=4, decimal_places=2)
    fecha = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('alumno', 'curso')  # Un alumno solo puede tener una nota por curso

    def __str__(self):
        return f"{self.alumno} - {self.curso}: {self.nota}"