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
            initializarRegiones();
        })
        .catch(error => {
            alert('Error al cargar los datos.');
        });
}

function initializarRegiones() {
    // Llenar los selectores de regiones
    const region1 = document.getElementById('region1');
    const region2 = document.getElementById('region2');
    
    covidData.forEach(region => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        option1.value = option2.value = region.region;
        option1.textContent = option2.textContent = region.region;
        region1.appendChild(option1);
        region2.appendChild(option2);
    });
}

function drawComparativeChart() {
    const region1 = document.getElementById('region1').value;
    const region2 = document.getElementById('region2').value;
    
    if (!region1 || !region2) {
        alert('Por favor seleccione dos regiones para comparar');
        return;
    }
    
    let regionData1 = null;
    let regionData2 = null;
    
    for (let i = 0; i < covidData.length; i++) {
        if (covidData[i].region === region1) {
            regionData1 = covidData[i];
        }
        if (covidData[i].region === region2) {
            regionData2 = covidData[i];
        }
        if (regionData1 && regionData2) break;
    }
    
    if (!regionData1 || !regionData2) {
        console.log('No se encontraron datos para una o ambas regiones');
        return;
    }
    
    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn('date', 'Fecha');
    dataTable.addColumn('number', region1);
    dataTable.addColumn('number', region2);
    
    const diasAComparar = Math.min(regionData1.confirmed.length, regionData2.confirmed.length);
    
    for (let i = 0; i < diasAComparar; i++) {
        const partesFecha1 = regionData1.confirmed[i].date.split('-');
        const fechaFormateada = new Date(`${partesFecha1[1]}/${partesFecha1[0]}/${partesFecha1[2]}`);
        
        const casosRegion1 = parseInt(regionData1.confirmed[i].value);
        const casosRegion2 = parseInt(regionData2.confirmed[i].value);
        
        dataTable.addRow([
            fechaFormateada,
            casosRegion1,
            casosRegion2
        ]);
    }
    
    const options = {
        title: `Comparación entre ${region1} y ${region2}`,
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: { 
            title: 'Fecha', 
            format: 'dd/MM' 
        },
        vAxis: { 
            title: 'Casos Confirmados' 
        }
    };
    
    const chart = new google.visualization.LineChart(document.getElementById('comparativeChart'));
    chart.draw(dataTable, options);
}