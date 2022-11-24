var mapShower = document.getElementById('freiburg');
mapShower.style.height = '500px';
mapShower.style.marginTop = '100px';

var freiburgmap = L.map('freiburg').setView([48, 7.85], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/mrmxdzn/cksfzxh2k65dm17p1r695ic71/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXJteGR6biIsImEiOiJja3JtMHlkMmgwaWZsMm9ub3c2ZXJwdHRzIn0.t0Qz-b_Gmjlnh7ugjH6wcg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(freiburgmap);

 L.geoJson(grenze).addTo(freiburgmap);

var uni = L.circle([47.993799967147496, 7.845858228503585], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var uni2 = L.circle([47.98090887388986, 7.892467242094161], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var uni3 = L.circle([48.00384592234822, 7.857474883985231], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var uni4 = L.circle([47.997736959468256, 7.803701707942834], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var uni5 = L.circle([47.98871869457226, 7.872035667152073], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var uni6 = L.circle([47.99208592094861, 7.835051512745338], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

/*var marker1 = L.circle([47.9956267069844, 7.8528604071160375], {
    color: '#ff7f00',
    fillColor: '#ff7f00',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var marker2 = L.circle([47.99460096754487, 7.845109556809629], {
    color: '#ff7f00',
    fillColor: '#ff7f00',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var marker3 = L.circle([47.994459081734064, 7.8594144672439565], {
    color: '#ff7f00',
    fillColor: '#ff7f00',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var marker4 = L.circle([47.994212913837764, 7.852597385645492], {
    color: '#ff7f00',
    fillColor: '#ff7f00',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var marker5 = L.circle([47.91604109325798, 7.896377045708866], {
    color: '#ff7f00',
    fillColor: '#ff7f00',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);*/

var wirtschaft1 = L.circle([47.99054492319938, 7.837377985645322], {
    color: 'green',
    fillColor: '#37a700',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var wirtschaft2 = L.circle([48.01175905856233, 7.83670653961607], {
    color: 'green',
    fillColor: '#37a700',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var wirtschaft3 = L.circle([48.013447607552976, 7.840694510865576], {
    color: 'green',
    fillColor: '#37a700',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var wirtschaft4 = L.circle([48.033384664955726, 7.8588659541578085], {
    color: 'green',
    fillColor: '#37a700',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

var wirtschaft5 = L.circle([47.98464731989062, 7.8280869691797985], {
    color: 'green',
    fillColor: '#37a700',
    fillOpacity: 0.5,
    radius: 50
}).addTo(freiburgmap);

wirtschaft1.bindPopup("<b>IT & Medien</b><br>embeX GmbH");
wirtschaft2.bindPopup("<b>Umweltwirtschaft & Erneuerbare Energien</b><br>Solar Info Center Freiburg");
wirtschaft3.bindPopup("<b>Tourismus & Messe- und Kongresswesen</b><br>Freiburg Wirtschaft Touristik und Messe GmbH & Co. KG - Messe");
wirtschaft4.bindPopup("<b>Life Sciences, Medizintechnik & Gesundheitswirtschaft</b><br>Pfizer Manufacturing Deutschland GmbH");
wirtschaft5.bindPopup("<b>Mikrosystem- & Mess-, Steuer-, Regeltechnik</b><br>PTW Freiburg Phys.-Techn. Werkstätten Dr. Pychlau GmbH");

uni.bindPopup("Albert-Ludwigs-Universität Freiburg");
uni2.bindPopup("Pädagogische Hochschule Freiburg");
uni3.bindPopup("Katholische Hochschule Freiburg");
uni4.bindPopup("Evangelische Hochschule Freiburg");
uni5.bindPopup("Hochschule für Musik Freiburg");
uni6.bindPopup("Hochschule Macromedia, University of Applied Sciences");

/*marker1.bindPopup("<b>Sehenswürdigkeit</b><br>Freiburger Münster");
marker2.bindPopup("<b>Sehenswürdigkeit</b><br>Universitätsbibliothek Freiburg");
marker3.bindPopup("<b>Sehenswürdigkeit</b><br>Schlossberg<br>Bewaldeter Berg mit Wanderwegen und Aussichtspunkten mit Panoramablick über Freiburg.");
marker4.bindPopup("<b>Sehenswürdigkeit</b><br>Augustinermuseum");
marker5.bindPopup("<b>Sehenswürdigkeit</b><br>Schauinsland");*/


function getColor(d) {
    return d === 'Universitäten/Hochschulen'  ? "#ff0a00" :
        d === 'Bedeutende Unternehmen'  ? "#00891f" :
            d === 'Sehenswürdigkeiten' ? "#ff7f00" :
                d === 'Roadside Hazards' ? "#984ea3" :
                    "#ff7f00";
}
var legend = L.control({position: 'topright'});
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'), categories;
    labels = ['<strong>Kategorien</strong>'],
        categories = ['Universitäten/Hochschulen','Bedeutende Unternehmen',/*'Sehenswürdigkeiten'*/];

    for (var i = 0; i < categories.length; i++) {

        div.innerHTML +=
            labels.push(
                '<i class="circle" style="background:' + getColor(categories[i]) + '"></i> ' +
                (categories[i] ? categories[i] : '+'));

    }
    div.innerHTML = labels.join('<br>');
    return div;
};
legend.addTo(freiburgmap);