var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BuildingMERC_2 = new ol.format.GeoJSON();
var features_BuildingMERC_2 = format_BuildingMERC_2.readFeatures(json_BuildingMERC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingMERC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingMERC_2.addFeatures(features_BuildingMERC_2);
var lyr_BuildingMERC_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BuildingMERC_2, 
                style: style_BuildingMERC_2,
                popuplayertitle: "BuildingMERC",
                interactive: true,
                title: '<img src="styles/legend/BuildingMERC_2.png" /> BuildingMERC'
            });
var format_RouteMERC_3 = new ol.format.GeoJSON();
var features_RouteMERC_3 = format_RouteMERC_3.readFeatures(json_RouteMERC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteMERC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteMERC_3.addFeatures(features_RouteMERC_3);
var lyr_RouteMERC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteMERC_3, 
                style: style_RouteMERC_3,
                popuplayertitle: "RouteMERC",
                interactive: true,
                title: '<img src="styles/legend/RouteMERC_3.png" /> RouteMERC'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_BuildingMERC_2.setVisible(true);lyr_RouteMERC_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OSMStandard_1,lyr_BuildingMERC_2,lyr_RouteMERC_3];
lyr_BuildingMERC_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'payment:cards': 'payment:cards', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'type': 'type', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_RouteMERC_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'route': 'route', 'piste:oneway': 'piste:oneway', 'piste:lit': 'piste:lit', 'piste:difficulty': 'piste:difficulty', 'colour': 'colour', 'service': 'service', 'seasonal': 'seasonal', 'name:de': 'name:de', 'network:wikipedia': 'network:wikipedia', 'website': 'website', 'via': 'via', 'tourism': 'tourism', 'roundtrip': 'roundtrip', 'piste:type': 'piste:type', 'official_name': 'official_name', 'network:wikidata': 'network:wikidata', 'network:ru': 'network:ru', 'network:en': 'network:en', 'to': 'to', 'public_transport:version': 'public_transport:version', 'payment:contactless': 'payment:contactless', 'payment:cash': 'payment:cash', 'operator': 'operator', 'from': 'from', 'contact:website': 'contact:website', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'surface': 'surface', 'ref': 'ref', 'network': 'network', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'int_name': 'int_name', 'distance': 'distance', 'description': 'description', });
lyr_BuildingMERC_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'payment:cards': '', 'name:ru': '', 'name:en': '', 'name': '', 'type': '', 'building:levels': '', 'addr:street': '', 'addr:housenumber': '', 'address': '', });
lyr_RouteMERC_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'route': '', 'piste:oneway': '', 'piste:lit': '', 'piste:difficulty': '', 'colour': '', 'service': '', 'seasonal': '', 'name:de': '', 'network:wikipedia': '', 'website': '', 'via': '', 'tourism': '', 'roundtrip': '', 'piste:type': '', 'official_name': '', 'network:wikidata': '', 'network:ru': '', 'network:en': '', 'to': '', 'public_transport:version': '', 'payment:contactless': '', 'payment:cash': '', 'operator': '', 'from': '', 'contact:website': '', 'wikipedia': '', 'wikidata': '', 'type': '', 'surface': '', 'ref': '', 'network': '', 'name:ru': '', 'name:en': '', 'name': '', 'int_name': '', 'distance': '', 'description': '', });
lyr_BuildingMERC_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'payment:cards': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'type': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_RouteMERC_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'route': 'no label', 'piste:oneway': 'no label', 'piste:lit': 'no label', 'piste:difficulty': 'no label', 'colour': 'no label', 'service': 'no label', 'seasonal': 'no label', 'name:de': 'no label', 'network:wikipedia': 'no label', 'website': 'no label', 'via': 'no label', 'tourism': 'no label', 'roundtrip': 'no label', 'piste:type': 'no label', 'official_name': 'no label', 'network:wikidata': 'no label', 'network:ru': 'no label', 'network:en': 'no label', 'to': 'no label', 'public_transport:version': 'no label', 'payment:contactless': 'no label', 'payment:cash': 'no label', 'operator': 'no label', 'from': 'no label', 'contact:website': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'surface': 'no label', 'ref': 'no label', 'network': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'int_name': 'no label', 'distance': 'no label', 'description': 'no label', });
lyr_RouteMERC_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});