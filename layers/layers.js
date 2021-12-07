ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_WalulelBoroughs_1 = new ol.format.GeoJSON();
var features_WalulelBoroughs_1 = format_WalulelBoroughs_1.readFeatures(json_WalulelBoroughs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalulelBoroughs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalulelBoroughs_1.addFeatures(features_WalulelBoroughs_1);
var lyr_WalulelBoroughs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WalulelBoroughs_1, 
                style: style_WalulelBoroughs_1,
                interactive: true,
                title: '<img src="styles/legend/WalulelBoroughs_1.png" /> Walulel Boroughs'
            });
var format_Housing_Zones_2 = new ol.format.GeoJSON();
var features_Housing_Zones_2 = format_Housing_Zones_2.readFeatures(json_Housing_Zones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Housing_Zones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Housing_Zones_2.addFeatures(features_Housing_Zones_2);
var lyr_Housing_Zones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Housing_Zones_2, 
                style: style_Housing_Zones_2,
                interactive: true,
                title: '<img src="styles/legend/Housing_Zones_2.png" /> Housing_Zones'
            });
var format_Article_4_Directions_Office_to_Residential_1_3 = new ol.format.GeoJSON();
var features_Article_4_Directions_Office_to_Residential_1_3 = format_Article_4_Directions_Office_to_Residential_1_3.readFeatures(json_Article_4_Directions_Office_to_Residential_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Article_4_Directions_Office_to_Residential_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Article_4_Directions_Office_to_Residential_1_3.addFeatures(features_Article_4_Directions_Office_to_Residential_1_3);
var lyr_Article_4_Directions_Office_to_Residential_1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Article_4_Directions_Office_to_Residential_1_3, 
                style: style_Article_4_Directions_Office_to_Residential_1_3,
                interactive: true,
                title: '<img src="styles/legend/Article_4_Directions_Office_to_Residential_1_3.png" /> Article_4_Directions_Office_to_Residential_1'
            });
var format_Conservation_Areas_4 = new ol.format.GeoJSON();
var features_Conservation_Areas_4 = format_Conservation_Areas_4.readFeatures(json_Conservation_Areas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conservation_Areas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conservation_Areas_4.addFeatures(features_Conservation_Areas_4);
var lyr_Conservation_Areas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conservation_Areas_4, 
                style: style_Conservation_Areas_4,
                interactive: true,
                title: '<img src="styles/legend/Conservation_Areas_4.png" /> Conservation_Areas'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_WalulelBoroughs_1.setVisible(true);lyr_Housing_Zones_2.setVisible(true);lyr_Article_4_Directions_Office_to_Residential_1_3.setVisible(true);lyr_Conservation_Areas_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_WalulelBoroughs_1,lyr_Housing_Zones_2,lyr_Article_4_Directions_Office_to_Residential_1_3,lyr_Conservation_Areas_4];
lyr_WalulelBoroughs_1.set('fieldAliases', {'NAME': 'NAME', 'AREA_CODE': 'AREA_CODE', 'DESCRIPTIO': 'DESCRIPTIO', 'FILE_NAME': 'FILE_NAME', 'NUMBER': 'NUMBER', 'NUMBER0': 'NUMBER0', 'POLYGON_ID': 'POLYGON_ID', 'UNIT_ID': 'UNIT_ID', 'CODE': 'CODE', 'HECTARES': 'HECTARES', 'AREA': 'AREA', 'TYPE_CODE': 'TYPE_CODE', 'DESCRIPT0': 'DESCRIPT0', 'TYPE_COD0': 'TYPE_COD0', 'DESCRIPT1': 'DESCRIPT1', });
lyr_Housing_Zones_2.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Article_4_Directions_Office_to_Residential_1_3.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'shape': 'shape', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Conservation_Areas_4.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_WalulelBoroughs_1.set('fieldImages', {'NAME': 'TextEdit', 'AREA_CODE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'FILE_NAME': 'TextEdit', 'NUMBER': 'TextEdit', 'NUMBER0': 'TextEdit', 'POLYGON_ID': 'TextEdit', 'UNIT_ID': 'TextEdit', 'CODE': 'TextEdit', 'HECTARES': 'TextEdit', 'AREA': 'TextEdit', 'TYPE_CODE': 'TextEdit', 'DESCRIPT0': 'TextEdit', 'TYPE_COD0': 'TextEdit', 'DESCRIPT1': 'TextEdit', });
lyr_Housing_Zones_2.set('fieldImages', {'fid': 'Hidden', 'address': 'TextEdit', 'borough': 'TextEdit', 'boroughdesignation': 'TextEdit', 'classification': 'TextEdit', 'designation': 'TextEdit', 'easting': 'TextEdit', 'extrainfo1': 'TextEdit', 'extrainfo2': 'TextEdit', 'extrainfo3': 'TextEdit', 'firstaddeddate': 'TextEdit', 'hectares': 'TextEdit', 'lastupdateddate': 'TextEdit', 'layerreference': 'TextEdit', 'northing': 'TextEdit', 'notes': 'Hidden', 'objectid': 'Hidden', 'planningauthority': 'TextEdit', 'removeddate': 'Hidden', 'sitename': 'TextEdit', 'sitereference': 'Hidden', 'source': 'Hidden', 'status': 'Hidden', 'uprn': 'Hidden', 'runtime': 'Hidden', });
lyr_Article_4_Directions_Office_to_Residential_1_3.set('fieldImages', {'fid': 'TextEdit', 'address': 'TextEdit', 'borough': 'TextEdit', 'boroughdesignation': 'TextEdit', 'classification': 'TextEdit', 'designation': 'TextEdit', 'easting': 'TextEdit', 'extrainfo1': 'TextEdit', 'extrainfo2': 'TextEdit', 'extrainfo3': 'TextEdit', 'firstaddeddate': 'TextEdit', 'hectares': 'TextEdit', 'lastupdateddate': 'TextEdit', 'layerreference': 'TextEdit', 'northing': 'TextEdit', 'notes': 'TextEdit', 'objectid': 'TextEdit', 'planningauthority': 'TextEdit', 'removeddate': 'TextEdit', 'shape': 'TextEdit', 'sitename': 'TextEdit', 'sitereference': 'TextEdit', 'source': 'TextEdit', 'status': 'TextEdit', 'uprn': 'TextEdit', 'runtime': 'TextEdit', });
lyr_Conservation_Areas_4.set('fieldImages', {'fid': 'TextEdit', 'address': 'TextEdit', 'borough': 'TextEdit', 'boroughdesignation': 'TextEdit', 'classification': 'TextEdit', 'designation': 'TextEdit', 'easting': 'TextEdit', 'extrainfo1': 'TextEdit', 'extrainfo2': 'TextEdit', 'extrainfo3': 'TextEdit', 'firstaddeddate': 'TextEdit', 'hectares': 'TextEdit', 'lastupdateddate': 'TextEdit', 'layerreference': 'TextEdit', 'northing': 'TextEdit', 'notes': 'TextEdit', 'objectid': 'TextEdit', 'planningauthority': 'TextEdit', 'removeddate': 'TextEdit', 'sitename': 'TextEdit', 'sitereference': 'TextEdit', 'source': 'TextEdit', 'status': 'TextEdit', 'uprn': 'TextEdit', 'runtime': 'TextEdit', });
lyr_WalulelBoroughs_1.set('fieldLabels', {'NAME': 'no label', 'AREA_CODE': 'no label', 'DESCRIPTIO': 'no label', 'FILE_NAME': 'no label', 'NUMBER': 'no label', 'NUMBER0': 'no label', 'POLYGON_ID': 'no label', 'UNIT_ID': 'no label', 'CODE': 'no label', 'HECTARES': 'no label', 'AREA': 'no label', 'TYPE_CODE': 'no label', 'DESCRIPT0': 'no label', 'TYPE_COD0': 'no label', 'DESCRIPT1': 'no label', });
lyr_Housing_Zones_2.set('fieldLabels', {'address': 'no label', 'borough': 'no label', 'boroughdesignation': 'no label', 'classification': 'no label', 'designation': 'no label', 'easting': 'no label', 'extrainfo1': 'no label', 'extrainfo2': 'no label', 'extrainfo3': 'no label', 'firstaddeddate': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'layerreference': 'no label', 'northing': 'no label', 'planningauthority': 'no label', 'sitename': 'no label', });
lyr_Article_4_Directions_Office_to_Residential_1_3.set('fieldLabels', {'fid': 'no label', 'address': 'no label', 'borough': 'no label', 'boroughdesignation': 'no label', 'classification': 'no label', 'designation': 'no label', 'easting': 'no label', 'extrainfo1': 'no label', 'extrainfo2': 'no label', 'extrainfo3': 'no label', 'firstaddeddate': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'layerreference': 'no label', 'northing': 'no label', 'notes': 'no label', 'objectid': 'no label', 'planningauthority': 'no label', 'removeddate': 'no label', 'shape': 'no label', 'sitename': 'no label', 'sitereference': 'no label', 'source': 'no label', 'status': 'no label', 'uprn': 'no label', 'runtime': 'no label', });
lyr_Conservation_Areas_4.set('fieldLabels', {'fid': 'no label', 'address': 'no label', 'borough': 'no label', 'boroughdesignation': 'no label', 'classification': 'no label', 'designation': 'no label', 'easting': 'no label', 'extrainfo1': 'no label', 'extrainfo2': 'no label', 'extrainfo3': 'no label', 'firstaddeddate': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'layerreference': 'no label', 'northing': 'no label', 'notes': 'no label', 'objectid': 'no label', 'planningauthority': 'no label', 'removeddate': 'no label', 'sitename': 'no label', 'sitereference': 'no label', 'source': 'no label', 'status': 'no label', 'uprn': 'no label', 'runtime': 'no label', });
lyr_Conservation_Areas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});