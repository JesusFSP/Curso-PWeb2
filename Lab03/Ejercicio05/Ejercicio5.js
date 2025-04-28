document.addEventListener('DOMContentLoaded', function () {
    const generarBtn = document.getElementById('generar-btn');
    const calcularBtn = document.getElementById('calcular-btn');
    const tablaContainer = document.getElementById('tabla-container');
    const resultadoDiv = document.getElementById('resultado');

    generarBtn.addEventListener('click', generarTabla);
    calcularBtn.addEventListener('click', calcularSuma);

    function generarTabla() {
        const filas = parseInt(document.getElementById('filas').value);
        const columnas = parseInt(document.getElementById('columnas').value);

        let tablaHTML = '<table><tr>';

        for (let c = 1; c <= columnas; c++) {
            tablaHTML += `<th>Columna ${c}</th>`;
        }
        tablaHTML += '</tr>';

        for (let f = 1; f <= filas; f++) {
            tablaHTML += '<tr>';
            for (let c = 1; c <= columnas; c++) {
                const valor = Math.floor(Math.random() * 100) + 1; // Números entre 1-100
                tablaHTML += `<td>${valor}</td>`;
            }
            tablaHTML += '</tr>';
        }

        tablaHTML += '</table>';
        tablaContainer.innerHTML = tablaHTML;
        
    }

    function calcularSuma() {
        const celdas = document.querySelectorAll('#tabla-container td');
        let suma = 0;

        celdas.forEach(celda => {
            suma += parseInt(celda.textContent);
        });

        resultadoDiv.textContent = `La suma total es: ${suma}`;
    }
});