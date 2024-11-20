ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([352265.332406, 7357493.506606, 357075.473338, 7360340.137458]);
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
var format_DELIMIT_AREA_RPBC_1 = new ol.format.GeoJSON();
var features_DELIMIT_AREA_RPBC_1 = format_DELIMIT_AREA_RPBC_1.readFeatures(json_DELIMIT_AREA_RPBC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DELIMIT_AREA_RPBC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DELIMIT_AREA_RPBC_1.addFeatures(features_DELIMIT_AREA_RPBC_1);
var lyr_DELIMIT_AREA_RPBC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DELIMIT_AREA_RPBC_1, 
                style: style_DELIMIT_AREA_RPBC_1,
                popuplayertitle: "DELIMIT_AREA_RPBC",
                interactive: true,
    title: 'DELIMIT_AREA_RPBC<br />\
    <img src="styles/legend/DELIMIT_AREA_RPBC_1_0.png" /> ADMINISTRATIVO<br />\
    <img src="styles/legend/DELIMIT_AREA_RPBC_1_1.png" /> AREA OPERACIONAL<br />\
    <img src="styles/legend/DELIMIT_AREA_RPBC_1_2.png" /> ARLE<br />\
    <img src="styles/legend/DELIMIT_AREA_RPBC_1_3.png" /> ARNO<br />\
    <img src="styles/legend/DELIMIT_AREA_RPBC_1_4.png" /> AROE<br />\
    <img src="styles/legend/DELIMIT_AREA_RPBC_1_5.png" /> ARSUL<br />\
    <img src="styles/legend/DELIMIT_AREA_RPBC_1_6.png" /> UTE-CBT<br />\
    <img src="styles/legend/DELIMIT_AREA_RPBC_1_7.png" /> <br />'
        });
var format_AREASVERDES_RPBC_2 = new ol.format.GeoJSON();
var features_AREASVERDES_RPBC_2 = format_AREASVERDES_RPBC_2.readFeatures(json_AREASVERDES_RPBC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREASVERDES_RPBC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASVERDES_RPBC_2.addFeatures(features_AREASVERDES_RPBC_2);
var lyr_AREASVERDES_RPBC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREASVERDES_RPBC_2, 
                style: style_AREASVERDES_RPBC_2,
                popuplayertitle: "AREASVERDES_RPBC",
                interactive: true,
    title: 'AREASVERDES_RPBC<br />\
    <img src="styles/legend/AREASVERDES_RPBC_2_0.png" /> 0 - 30<br />\
    <img src="styles/legend/AREASVERDES_RPBC_2_1.png" /> 30 - 60<br />\
    <img src="styles/legend/AREASVERDES_RPBC_2_2.png" /> 60 - 90<br />\
    <img src="styles/legend/AREASVERDES_RPBC_2_3.png" /> 90 - 120<br />\
    <img src="styles/legend/AREASVERDES_RPBC_2_4.png" /> 120 - 150<br />\
    <img src="styles/legend/AREASVERDES_RPBC_2_5.png" /> 150 -   <br />'
        });
var group_AREASRPBC = new ol.layer.Group({
                                layers: [lyr_AREASVERDES_RPBC_2,],
                                fold: "open",
                                title: "AREAS RPBC"});
var group_OutrasFeies = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Outras  Feições"});
var group_Imagens = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "Imagens"});

lyr_GoogleSatellite_0.setVisible(true);lyr_DELIMIT_AREA_RPBC_1.setVisible(false);lyr_AREASVERDES_RPBC_2.setVisible(true);
var layersList = [group_Imagens,lyr_DELIMIT_AREA_RPBC_1,group_AREASRPBC];
lyr_DELIMIT_AREA_RPBC_1.set('fieldAliases', {'LOCAL': 'LOCAL', 'Area_Aprox': 'Area_Aprox', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_AREASVERDES_RPBC_2.set('fieldAliases', {'Cod': 'Cod', 'ult_interv': 'ult_interv', 'status': 'status', 'BM': 'BM', 'OBS': 'OBS', 'tipologia': 'tipologia', 'Aream2': 'Aream2', 'area': 'area', 'ICAV': 'ICAV', 'perimeter': 'perimeter', 'hj': 'hj', 'dia_dif2': 'dia_dif2', 'mes': 'mes', });
lyr_DELIMIT_AREA_RPBC_1.set('fieldImages', {'LOCAL': 'TextEdit', 'Area_Aprox': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_AREASVERDES_RPBC_2.set('fieldImages', {'Cod': 'TextEdit', 'ult_interv': 'DateTime', 'status': 'TextEdit', 'BM': 'TextEdit', 'OBS': 'TextEdit', 'tipologia': 'TextEdit', 'Aream2': 'TextEdit', 'area': 'TextEdit', 'ICAV': 'TextEdit', 'perimeter': 'TextEdit', 'hj': 'DateTime', 'dia_dif2': 'Range', 'mes': 'TextEdit', });
lyr_DELIMIT_AREA_RPBC_1.set('fieldLabels', {'LOCAL': 'no label', 'Area_Aprox': 'no label', });
lyr_AREASVERDES_RPBC_2.set('fieldLabels', {'Cod': 'no label', 'ult_interv': 'no label', 'status': 'no label', 'BM': 'no label', 'OBS': 'no label', 'tipologia': 'no label', 'Aream2': 'no label', 'area': 'no label', 'ICAV': 'no label', 'perimeter': 'no label', 'hj': 'no label', 'dia_dif2': 'no label', 'mes': 'no label', });
lyr_AREASVERDES_RPBC_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});