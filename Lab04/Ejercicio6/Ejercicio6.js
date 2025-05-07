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
    let contador = 0;
    
    for (let i = 0; i < covidData.length; i++) {
        const region = covidData[i];
        if (region.region !== 'Lima' && region.region !== 'Callao') {
            regionesFiltradas.push(region);
            contador++;
        }
    }
    
   
    
    const chart = new google.visualization.LineChart(document.getElementById('crecimientoChart'));
    chart.draw(dataTable, options);
}