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
            drawRegionList();
        })
        .catch(error => {
            alert('Error al cargar los datos.');
        });
}

function drawRegionList() {
    const container = document.getElementById('regionList');
    container.innerHTML = '<h2>Lista de Regiones</h2><div class="region-list" > <ul></ul>';

    covidData.forEach(region => {
        container.querySelector('ul').innerHTML += `<li>${region.region}</li>`;
    });
    container.innerHTML += '</ul></div>';
}