let datosRegiones = [];
let miGrafico = null;

window.onload = function () {
    cargarDatos();
};

function cargarDatos() {
    const xhr = new XMLHttpRequest();
    xhr.open('Get', 'data.json', 'true');

    xhr.onload = function () {
        if (this.status === 200) {
            datosRegiones = JSON.parse(this.responseText);
            llenarSelectors();
        }
        else {
            alert('Error al cargar los datos');
        }
    }
    xhr.send();
}

function llenarSelectors() {
    const select1 = document.getElementById('region1')
    const select2 = document.getElementById('region2')

    datosRegiones.forEach(region => {
        const option1 = document.createElement('option');
        option1.value = region.region;
        option1.textContent = region.region;
        select1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = region.region;
        option2.textContent = region.region;
        select2.appendChild(option2);
    });
};

function compararRegiones() {
    const region1 = document.getElementById('region1').value;
    const region2 = document.getElementById('region2').value;
    
    if (!region1 || !region2) {
        alert('Selecciona dos regiones para comparar');
        return;
    }
    
    // Buscamos los datos de las regiones seleccionadas
    const datosRegion1 = datosRegiones.find(r => r.region === region1);
    const datosRegion2 = datosRegiones.find(r => r.region === region2);
    
    // Preparamos los datos para el gráfico
    const fechas = datosRegion1.confirmed.map(item => item.date);
    const casos1 = datosRegion1.confirmed.map(item => parseInt(item.value));
    const casos2 = datosRegion2.confirmed.map(item => parseInt(item.value));
    
    // Creamos o actualizamos el gráfico
    crearGrafico(fechas, casos1, casos2, region1, region2);
}

// Función para crear el gráfico
function crearGrafico(fechas, casos1, casos2, nombre1, nombre2) {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Si ya existe un gráfico, lo destruimos
    if (miGrafico) {
        miGrafico.destroy();
    }

    miGrafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [
                {
                    label: nombre1,
                    data: casos1,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    borderWidth: 1
                },
                {
                    label: nombre2,
                    data: casos2,
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Comparación de Casos Confirmados'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

