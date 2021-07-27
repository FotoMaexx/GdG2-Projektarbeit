var mapShower = document.getElementById('freiburg');
mapShower.style.height = '500px';
mapShower.style.marginTop = '100px';

var freiburgmap = L.map('freiburg').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoibXJteGR6biIsImEiOiJja3JtMTJqd2YwaWwwMnFudnM0d2FnNnhoIn0.OoAiV0D5lXGH-beUJKX5uA'
}).addTo(freiburgmap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(freiburgmap);