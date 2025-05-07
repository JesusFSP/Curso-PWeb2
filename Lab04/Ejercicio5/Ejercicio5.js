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
            drawAllRegionsComparison();
        })
        .catch(error => {
            alert('Error al cargar los datos.');
        });
}

function drawAllRegionsComparison() {
    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn('date', 'Fecha');

    const allRegions = [];
    for (let i = 0; i < covidData.length; i++) {
        const region = covidData[i];
        dataTable.addColumn('number', region.region);
        allRegions.push(region);
    }

    let referenceRegion = allRegions[0];
    for (let i = 1; i < allRegions.length; i++) {
        if (allRegions[i].confirmed.length > referenceRegion.confirmed.length) {
            referenceRegion = allRegions[i];
        }
    }

    for (let day = 0; day < referenceRegion.confirmed.length; day++) {
        const dateParts = referenceRegion.confirmed[day].date.split('-');
        const date = new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`);

        const row = [date];

        for (let r = 0; r < allRegions.length; r++) {
            const region = allRegions[r];

            if (day < region.confirmed.length) {
                row.push(parseInt(region.confirmed[day].value));
            } else {
                row.push(null); 
            }
        }

        dataTable.addRow(row);
    }

    const options = {
        title: 'Comparación de Casos Confirmados entre Todas las Regiones',
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: {
            title: 'Fecha',
            format: 'dd/MM/yyyy',
        },
        vAxis: {
            title: 'Casos Confirmados',
            scaleType: 'log'
        },
        chartArea: {
            width: '85%',
            height: '70%'
        },
        
    };

    const chart = new google.visualization.LineChart(document.getElementById('allRegionsChart'));
    chart.draw(dataTable, options);
}