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
            drawCrecimientoChart();
        })
        .catch(error => {
            alert('Error al cargar los datos.');
        });
}

function drawCrecimientoChart() {
    let regionesFiltradas = [];

    for (let i = 0; i < covidData.length; i++) {
        const region = covidData[i];
        if (region.region !== 'Lima' && region.region !== 'Callao') {
            regionesFiltradas.push(region);
        }
    }

    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn('date', 'Fecha');

    for (let i = 0; i < regionesFiltradas.length; i++) {
        dataTable.addColumn('number', regionesFiltradas[i].region);
    }

    const regionReferencia = regionesFiltradas[0];

    for (let dia = 0; dia < regionReferencia.confirmed.length; dia++) {
        const partesFecha = regionReferencia.confirmed[dia].date.split('-');
        const fecha = new Date(`${partesFecha[1]}/${partesFecha[0]}/${partesFecha[2]}`);

        const filaDatos = [fecha];

        for (let r = 0; r < regionesFiltradas.length; r++) {
            const region = regionesFiltradas[r];

            if (dia < region.confirmed.length) {
                filaDatos.push(parseInt(region.confirmed[dia].value));
            } else {
                filaDatos.push(null);
            }
        }

        dataTable.addRow(filaDatos);
    }

    const chart = new google.visualization.LineChart(document.getElementById('crecimientoChart'));
    chart.draw(dataTable, options);
}