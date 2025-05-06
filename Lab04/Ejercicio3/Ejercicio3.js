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
            drawTop10Regions();
        })
        .catch(error => {
            alert('Error al cargar los datos. Verifique la consola para más detalles.');
        });
}

function drawTop10Regions() {
    let regionesConTotales = [];
    
    for (let i = 0; i < covidData.length; i++) {
        let region = covidData[i];
        let suma = 0;
        
        for (let j = 0; j < region.confirmed.length; j++) {
            suma += parseInt(region.confirmed[j].value);
        }
        
        regionesConTotales.push({
            nombre: region.region,
            total: suma
        });
    }
    
    regionesConTotales.sort(function(a, b) {
        return b.total - a.total;
    });
    
    let top10Regiones = regionesConTotales.slice(0, 10);

    
    
    
}