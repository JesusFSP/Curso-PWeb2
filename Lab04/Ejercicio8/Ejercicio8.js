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

    

    const grafico = new google.visualization.ColumnChart(document.getElementById('crecimientoDiarioChart'));
    grafico.draw(tablaDatos, opciones);
}