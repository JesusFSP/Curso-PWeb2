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
        console.log('No se encontro la region Arequipa')
    }

    const dataTable = new google.visualizacion.dataTable();
    dataTable.addColumn('date', 'Fecha');
    dataTable.addColumn('number', 'Casos Confirmados');
}