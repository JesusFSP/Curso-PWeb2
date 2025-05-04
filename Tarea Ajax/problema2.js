let datosRegiones = [];
let miGrafico = null;

window.onload = function () {
    cargarDatos();
};

function cargarDatos() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            datosRegiones = JSON.parse(this.responseText);
        } else {
            alert('Error al cargar los datos');
        }
    };

    xhr.send();
}

function mostrarGrafico() {
    const regionesFiltradas = datosRegiones.filter(region =>
        region.region !== "Lima" && region.region !== "Callao"
    );

    const regionesMostrar = regionesFiltradas.slice(0, 5);

    const fechas = regionesMostrar[0].confirmed.map(item => item.date);

    const datasets = regionesMostrar.map((region, index) => {
        // Colores básicos para cada región
        const colores = ['red', 'blue', 'green', 'orange', 'purple'];

        return {
            label: region.region,
            data: region.confirmed.map(item => parseInt(item.value)),
            borderColor: colores[index],
            backgroundColor: colores[index] + '20', // Añade transparencia
            borderWidth: 1
        };
    });

    crearGrafico(fechas, datasets);
}

function crearGrafico(fechas, datasets) {
    const ctx = document.getElementById('myChart').getContext('2d');

    if (miGrafico) {
        miGrafico.destroy();
    }

    miGrafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Crecimiento de Casos (sin Lima y Callao)'
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