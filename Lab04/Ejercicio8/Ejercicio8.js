google.charts.load('current', {
    'packages': ['corechart', 'table']
});

let covidData = [];

google.charts.setOnLoadCallback(loadData);

function loadData() {
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            covidData = data;
            drawCrecimientoDiarioChart() ;
        })
        .catch(error => {
            alert('Error al cargar los datos.');
        });
}

function drawCrecimientoDiarioChart() {
    let regionesSeleccionadas = [];
    let regionesEncontradas = 0;

    for (let i = 0; i < covidData.length; i++) {
        const region = covidData[i];
        if (region.region !== 'Lima' && region.region !== 'Callao') {
            regionesSeleccionadas.push(region);
            regionesEncontradas++;
            if (regionesEncontradas >= 5) break;
        }
    }

    const tablaDatos = new google.visualization.DataTable();
    tablaDatos.addColumn('date', 'Fecha');

    for (let i = 0; i < regionesSeleccionadas.length; i++) {
        tablaDatos.addColumn('number', regionesSeleccionadas[i].region);
    }

    const regionReferencia = regionesSeleccionadas[0];

    for (let dia = 1; dia < regionReferencia.confirmed.length; dia++) {
        const partesFecha = regionReferencia.confirmed[dia].date.split('-');
        const fecha = new Date(`${partesFecha[1]}/${partesFecha[0]}/${partesFecha[2]}`);

        const fila = [fecha];

        for (let r = 0; r < regionesSeleccionadas.length; r++) {
            const region = regionesSeleccionadas[r];

            if (dia < region.confirmed.length) {
                const casosHoy = parseInt(region.confirmed[dia].value);
                const casosAyer = parseInt(region.confirmed[dia - 1].value);
                const nuevosCasos = casosHoy - casosAyer;

                fila.push(nuevosCasos > 0 ? nuevosCasos : 0);
            } else {
                fila.push(null);
            }
        }

        tablaDatos.addRow(fila);
    }

    const opciones = {
        title: 'Nuevos Casos Diarios (excluyendo Lima y Callao)',
        legend: { position: 'bottom' },
        hAxis: {
            title: 'Fecha',
            format: 'dd/MM'
        },
        vAxis: {
            title: 'Nuevos Casos'
        },
        bar: {
            groupWidth: '100%'
        }
    };

    const grafico = new google.visualization.ColumnChart(document.getElementById('crecimientoDiarioChart'));
    grafico.draw(tablaDatos, opciones);
}