ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([352052.357638, 7358191.062789, 355587.211971, 7360320.834672]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AREASVERDES_RPBC_1 = new ol.format.GeoJSON();
var features_AREASVERDES_RPBC_1 = format_AREASVERDES_RPBC_1.readFeatures(json_AREASVERDES_RPBC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREASVERDES_RPBC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASVERDES_RPBC_1.addFeatures(features_AREASVERDES_RPBC_1);
var lyr_AREASVERDES_RPBC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREASVERDES_RPBC_1, 
                style: style_AREASVERDES_RPBC_1,
                popuplayertitle: "AREASVERDES_RPBC",
                interactive: true,
    title: 'AREASVERDES_RPBC<br />\
    <img src="styles/legend/AREASVERDES_RPBC_1_0.png" /> 0 - 30<br />\
    <img src="styles/legend/AREASVERDES_RPBC_1_1.png" /> 30 - 60<br />\
    <img src="styles/legend/AREASVERDES_RPBC_1_2.png" /> 60 - 90<br />\
    <img src="styles/legend/AREASVERDES_RPBC_1_3.png" /> 90 - 120<br />\
    <img src="styles/legend/AREASVERDES_RPBC_1_4.png" /> 120 - 150<br />\
    <img src="styles/legend/AREASVERDES_RPBC_1_5.png" /> 150 -   <br />'
        });
var group_AREASRPBC = new ol.layer.Group({
                                layers: [lyr_AREASVERDES_RPBC_1,],
                                fold: "open",
                                title: "AREAS RPBC"});
var group_Imagens = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "Imagens"});

lyr_GoogleSatellite_0.setVisible(true);lyr_AREASVERDES_RPBC_1.setVisible(true);
var layersList = [group_Imagens,group_AREASRPBC];
lyr_AREASVERDES_RPBC_1.set('fieldAliases', {'Cod': 'Cod', 'ult_interv': 'ult_interv', 'status': 'status', 'BM': 'BM', 'OBS': 'OBS', 'tipologia': 'tipologia', 'Aream2': 'Aream2', 'area': 'area', 'ICAV': 'ICAV', 'perimeter': 'perimeter', 'hj': 'hj', 'dia_dif2': 'dia_dif2', 'mes': 'mes', });
lyr_AREASVERDES_RPBC_1.set('fieldImages', {'Cod': 'TextEdit', 'ult_interv': 'DateTime', 'status': 'TextEdit', 'BM': 'TextEdit', 'OBS': 'TextEdit', 'tipologia': 'TextEdit', 'Aream2': 'TextEdit', 'area': 'TextEdit', 'ICAV': 'TextEdit', 'perimeter': 'TextEdit', 'hj': 'DateTime', 'dia_dif2': 'Range', 'mes': 'TextEdit', });
lyr_AREASVERDES_RPBC_1.set('fieldLabels', {'Cod': 'no label', 'ult_interv': 'no label', 'status': 'no label', 'BM': 'no label', 'OBS': 'no label', 'tipologia': 'no label', 'Aream2': 'no label', 'area': 'no label', 'ICAV': 'no label', 'perimeter': 'no label', 'hj': 'no label', 'dia_dif2': 'no label', 'mes': 'no label', });
lyr_AREASVERDES_RPBC_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});