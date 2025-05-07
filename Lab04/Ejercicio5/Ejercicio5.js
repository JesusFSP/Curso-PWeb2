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
            drawComparativeChart();
        })
        .catch(error => {
            alert('Error al cargar los datos. Verifique la consola para más detalles.');
        });
}