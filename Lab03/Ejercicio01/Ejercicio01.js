//Funcion que recibe el numero del dia de la semana y retorna el nombre del dia
function nombre(dia){
    const diasSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];

    if (dia >= 0 && dia <= 6) {
        return diasSemana[dia];
      } else {
        return "Número de día no válido";
      }
}

//Ejemplo del uso de la funcion
const fecha = new Date();
const numeroDia = fecha.getDay(); // getDay() devuelve 0-6
const nombreDia = nombre(numeroDia);

console.log(nombreDia); 