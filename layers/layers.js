var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BGR_adm2polygon_1 = new ol.format.GeoJSON();
var features_BGR_adm2polygon_1 = format_BGR_adm2polygon_1.readFeatures(json_BGR_adm2polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BGR_adm2polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BGR_adm2polygon_1.addFeatures(features_BGR_adm2polygon_1);
var lyr_BGR_adm2polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BGR_adm2polygon_1, 
                style: style_BGR_adm2polygon_1,
                popuplayertitle: 'BGR_adm2-polygon',
                interactive: true,
                title: '<img src="styles/legend/BGR_adm2polygon_1.png" /> BGR_adm2-polygon'
            });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_odd_4 = new ol.format.GeoJSON();
var features_odd_4 = format_odd_4.readFeatures(json_odd_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_odd_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_odd_4.addFeatures(features_odd_4);
var lyr_odd_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_odd_4, 
                style: style_odd_4,
                popuplayertitle: 'odd',
                interactive: true,
                title: '<img src="styles/legend/odd_4.png" /> odd'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BGR_adm2polygon_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_odd_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BGR_adm2polygon_1,lyr_Buffered_2,lyr_Buffered_3,lyr_odd_4];
lyr_BGR_adm2polygon_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'visibility': 'visibility', });
lyr_Buffered_2.set('fieldAliases', {'x': 'x', 'x1': 'x1', });
lyr_Buffered_3.set('fieldAliases', {'x': 'x', 'x1': 'x1', });
lyr_odd_4.set('fieldAliases', {'x': 'x', 'x1': 'x1', });
lyr_BGR_adm2polygon_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'visibility': 'Range', });
lyr_Buffered_2.set('fieldImages', {'x': 'TextEdit', 'x1': 'TextEdit', });
lyr_Buffered_3.set('fieldImages', {'x': 'TextEdit', 'x1': 'TextEdit', });
lyr_odd_4.set('fieldImages', {'x': '', 'x1': '', });
lyr_BGR_adm2polygon_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'visibility': 'no label', });
lyr_Buffered_2.set('fieldLabels', {'x': 'no label', 'x1': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'x': 'no label', 'x1': 'no label', });
lyr_odd_4.set('fieldLabels', {'x': 'no label', 'x1': 'no label', });
lyr_odd_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});