var wms_layers = [];


        var lyr_BingVirtualEarth_0 = new ol.layer.Tile({
            'title': 'Bing Virtual Earth',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AREASVERDES_RPBC_2 = new ol.format.GeoJSON();
var features_AREASVERDES_RPBC_2 = format_AREASVERDES_RPBC_2.readFeatures(json_AREASVERDES_RPBC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
var format_cp_ute_3 = new ol.format.GeoJSON();
var features_cp_ute_3 = format_cp_ute_3.readFeatures(json_cp_ute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cp_ute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cp_ute_3.addFeatures(features_cp_ute_3);
var lyr_cp_ute_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cp_ute_3, 
                style: style_cp_ute_3,
                popuplayertitle: "cp_ute",
                interactive: true,
                title: '<img src="styles/legend/cp_ute_3.png" /> cp_ute'
            });
var format_CAPINA_QUIMICA_RPBC_4 = new ol.format.GeoJSON();
var features_CAPINA_QUIMICA_RPBC_4 = format_CAPINA_QUIMICA_RPBC_4.readFeatures(json_CAPINA_QUIMICA_RPBC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAPINA_QUIMICA_RPBC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPINA_QUIMICA_RPBC_4.addFeatures(features_CAPINA_QUIMICA_RPBC_4);
var lyr_CAPINA_QUIMICA_RPBC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAPINA_QUIMICA_RPBC_4, 
                style: style_CAPINA_QUIMICA_RPBC_4,
                popuplayertitle: "CAPINA_QUIMICA_RPBC",
                interactive: true,
                title: '<img src="styles/legend/CAPINA_QUIMICA_RPBC_4.png" /> CAPINA_QUIMICA_RPBC'
            });
var group_AREASRPBC = new ol.layer.Group({
                                layers: [lyr_AREASVERDES_RPBC_2,lyr_cp_ute_3,lyr_CAPINA_QUIMICA_RPBC_4,],
                                fold: "open",
                                title: "AREAS RPBC"});
var group_OutrasFeies = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Outras  Feições"});
var group_Imagens = new ol.layer.Group({
                                layers: [lyr_BingVirtualEarth_0,lyr_GoogleSatellite_1,],
                                fold: "open",
                                title: "Imagens"});
var group_Transporte = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Transporte"});

lyr_BingVirtualEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_AREASVERDES_RPBC_2.setVisible(true);lyr_cp_ute_3.setVisible(true);lyr_CAPINA_QUIMICA_RPBC_4.setVisible(true);
var layersList = [group_Imagens,group_AREASRPBC];
lyr_AREASVERDES_RPBC_2.set('fieldAliases', {'Cod': 'Cod', 'ult_interv': 'ult_interv', 'status': 'status', 'BM': 'BM', 'OBS': 'OBS', 'tipologia': 'tipologia', 'Aream2': 'Aream2', 'area': 'area', 'ICAV': 'ICAV', 'perimeter': 'perimeter', 'hj': 'hj', 'dia_dif2': 'dia_dif2', 'mes': 'mes', });
lyr_cp_ute_3.set('fieldAliases', {'FID': 'FID', });
lyr_CAPINA_QUIMICA_RPBC_4.set('fieldAliases', {'lOCAL': 'lOCAL', 'area': 'area', 'ult_interv': 'ult_interv', });
lyr_AREASVERDES_RPBC_2.set('fieldImages', {'Cod': 'TextEdit', 'ult_interv': 'DateTime', 'status': 'TextEdit', 'BM': 'TextEdit', 'OBS': 'TextEdit', 'tipologia': 'TextEdit', 'Aream2': 'TextEdit', 'area': 'TextEdit', 'ICAV': 'TextEdit', 'perimeter': 'TextEdit', 'hj': 'DateTime', 'dia_dif2': 'Range', 'mes': 'TextEdit', });
lyr_cp_ute_3.set('fieldImages', {'FID': 'TextEdit', });
lyr_CAPINA_QUIMICA_RPBC_4.set('fieldImages', {'lOCAL': '', 'area': '', 'ult_interv': '', });
lyr_AREASVERDES_RPBC_2.set('fieldLabels', {'Cod': 'inline label - always visible', 'ult_interv': 'no label', 'status': 'no label', 'BM': 'no label', 'OBS': 'no label', 'tipologia': 'no label', 'Aream2': 'no label', 'area': 'no label', 'ICAV': 'no label', 'perimeter': 'no label', 'hj': 'no label', 'dia_dif2': 'inline label - visible with data', 'mes': 'no label', });
lyr_cp_ute_3.set('fieldLabels', {'FID': 'no label', });
lyr_CAPINA_QUIMICA_RPBC_4.set('fieldLabels', {'lOCAL': 'no label', 'area': 'no label', 'ult_interv': 'no label', });
lyr_CAPINA_QUIMICA_RPBC_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});