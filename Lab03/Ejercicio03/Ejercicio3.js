document .addEventListener('DOMContentLoaded', function(){
    const hoy = new Date();
    const añoActual = hoy.getFullYear();
    const diaArequipa = new Date(añoActual, 7, 15);

    //la diferencia representada por milisegundos
    const diferencia = diaArequipa - hoy;
    const diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    if(hoy > diaArequipa){
        diaArequipa.setFullYear(añoActual + 1)
    }
    
    if(diasFaltantes == 0){
        document.querySelector('h1').textContent = 'Hoy es el dia de Arequipa';
    }

    document.getElementById('dias-faltantes').textContent = diasFaltantes;
});