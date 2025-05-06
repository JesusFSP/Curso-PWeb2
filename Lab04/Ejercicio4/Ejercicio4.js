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
            drawArequipaChart();
        })
        .catch(error => {
            alert('Error al cargar los datos. Verifique la consola para más detalles.');
        });
}

function drawArequipaChart() {
    let arequipaData = null;
    for (let i = 0; i < covidData.length; i++){
        if(covidData[i].region === 'Arequipa'){
            arequipaData = covidData[i];
            break;
        }
    }

    if (!arequipaData) {
        console.log('No se encontro la region Arequipa');
    }

    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn('date', 'Fecha');
    dataTable.addColumn('number', 'Casos Confirmados');

    for (let j = 0; j < arequipaData.confirmed.length; j++) {
        const day = arequipaData.confirmed[j];
        const partesFecha = day.date.split('-');
        const dia = partesFecha[0];
        const mes = partesFecha[1];
        const año = partesFecha[2];

        const fecha = new Date(`${mes}/${dia}/${año}`);
        const casos = parseInt(day.value);

        dataTable.addRow([fecha, casos]);

        const options = {
            title: 'Evolución de Casos en Arequipa',
            curveType: 'function',
            legend: { position: 'bottom' },
            hAxis: { title: 'Fecha', format: 'dd/MM' },
            vAxis: { title: 'Casos Confirmados' }
        };
        
        // 5. Dibujar el gráfico
        const chart = new google.visualization.LineChart(document.getElementById('arequipaChart'));
        chart.draw(dataTable, options);

    }
}