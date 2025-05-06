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
            drawTotalConfirmed();
        })
        .catch(error => {
            alert('Error al cargar los datos.');
        });
}

function drawTotalConfirmed() {
    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Región');
    dataTable.addColumn('number', 'Total Confirmados');
    
    covidData.forEach(region => {
        const total = region.confirmed.reduce((sum, day) => sum + parseInt(day.value), 0);
        dataTable.addRow([region.region, total]);
    });
    
    const options = {
        title: 'Total de Casos Confirmados por Región',
        legend: { position: 'none' },
        hAxis: { title: 'Región', slantedText: true, slantedTextAngle: 45 },
        vAxis: { title: 'Total Confirmados' }
    };
    
    const chart = new google.visualization.ColumnChart(document.getElementById('totalConfirmed'));
    chart.draw(dataTable, options);
}