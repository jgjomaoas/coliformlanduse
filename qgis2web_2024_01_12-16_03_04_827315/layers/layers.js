ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:102454").setExtent([314072.626656, 1555160.709594, 329644.665736, 1565233.946442]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_PandinIDW_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Pandin (IDW)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PandinIDW_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13510216.529262, 1587071.566155, 13510981.474190, 1587644.848946]
                            })
                        });
var lyr_CalibatoIDW_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Calibato (IDW)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CalibatoIDW_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13511284.525667, 1585659.189447, 13512143.263165, 1586461.066629]
                            })
                        });
var lyr_YamboIDW_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Yambo (IDW)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/YamboIDW_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13510029.512517, 1587548.381398, 13510872.975089, 1588213.351394]
                            })
                        });
var lyr_PalakpakinIDW_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Palakpakin (IDW)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PalakpakinIDW_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13507003.289756, 1586406.174335, 13507972.042427, 1587270.761300]
                            })
                        });
var lyr_MojicapIDW_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mojicap (IDW)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MojicapIDW_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13506590.853447, 1587938.539983, 13507164.381050, 1588482.587298]
                            })
                        });
var lyr_BunotIDW_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bunot (IDW)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BunotIDW_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13507570.686999, 1583161.067643, 13508297.051200, 1583869.589270]
                            })
                        });
var lyr_SampalocIDW_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sampaloc (IDW)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SampalocIDW_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13505787.126723, 1582583.684140, 13507031.725232, 1583819.537979]
                            })
                        });
var format_Calibato_8 = new ol.format.GeoJSON();
var features_Calibato_8 = format_Calibato_8.readFeatures(json_Calibato_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Calibato_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calibato_8.addFeatures(features_Calibato_8);
var lyr_Calibato_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calibato_8, 
                style: style_Calibato_8,
                interactive: true,
                title: '<img src="styles/legend/Calibato_8.png" /> Calibato'
            });
var format_Mohicap_9 = new ol.format.GeoJSON();
var features_Mohicap_9 = format_Mohicap_9.readFeatures(json_Mohicap_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Mohicap_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mohicap_9.addFeatures(features_Mohicap_9);
var lyr_Mohicap_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mohicap_9, 
                style: style_Mohicap_9,
                interactive: true,
                title: '<img src="styles/legend/Mohicap_9.png" /> Mohicap'
            });
var format_Bunot_10 = new ol.format.GeoJSON();
var features_Bunot_10 = format_Bunot_10.readFeatures(json_Bunot_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Bunot_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunot_10.addFeatures(features_Bunot_10);
var lyr_Bunot_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bunot_10, 
                style: style_Bunot_10,
                interactive: true,
                title: '<img src="styles/legend/Bunot_10.png" /> Bunot'
            });
var format_Palakpakin_11 = new ol.format.GeoJSON();
var features_Palakpakin_11 = format_Palakpakin_11.readFeatures(json_Palakpakin_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Palakpakin_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Palakpakin_11.addFeatures(features_Palakpakin_11);
var lyr_Palakpakin_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Palakpakin_11, 
                style: style_Palakpakin_11,
                interactive: true,
                title: '<img src="styles/legend/Palakpakin_11.png" /> Palakpakin'
            });
var format_Pandin_12 = new ol.format.GeoJSON();
var features_Pandin_12 = format_Pandin_12.readFeatures(json_Pandin_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Pandin_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pandin_12.addFeatures(features_Pandin_12);
var lyr_Pandin_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pandin_12, 
                style: style_Pandin_12,
                interactive: true,
                title: '<img src="styles/legend/Pandin_12.png" /> Pandin'
            });
var format_Sampaloc_13 = new ol.format.GeoJSON();
var features_Sampaloc_13 = format_Sampaloc_13.readFeatures(json_Sampaloc_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Sampaloc_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sampaloc_13.addFeatures(features_Sampaloc_13);
var lyr_Sampaloc_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sampaloc_13, 
                style: style_Sampaloc_13,
                interactive: true,
                title: '<img src="styles/legend/Sampaloc_13.png" /> Sampaloc'
            });
var format_Yambo_14 = new ol.format.GeoJSON();
var features_Yambo_14 = format_Yambo_14.readFeatures(json_Yambo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102454'});
var jsonSource_Yambo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yambo_14.addFeatures(features_Yambo_14);
var lyr_Yambo_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yambo_14, 
                style: style_Yambo_14,
                interactive: true,
                title: '<img src="styles/legend/Yambo_14.png" /> Yambo'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PandinIDW_1.setVisible(true);lyr_CalibatoIDW_2.setVisible(true);lyr_YamboIDW_3.setVisible(true);lyr_PalakpakinIDW_4.setVisible(true);lyr_MojicapIDW_5.setVisible(true);lyr_BunotIDW_6.setVisible(true);lyr_SampalocIDW_7.setVisible(true);lyr_Calibato_8.setVisible(true);lyr_Mohicap_9.setVisible(true);lyr_Bunot_10.setVisible(true);lyr_Palakpakin_11.setVisible(true);lyr_Pandin_12.setVisible(true);lyr_Sampaloc_13.setVisible(true);lyr_Yambo_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PandinIDW_1,lyr_CalibatoIDW_2,lyr_YamboIDW_3,lyr_PalakpakinIDW_4,lyr_MojicapIDW_5,lyr_BunotIDW_6,lyr_SampalocIDW_7,lyr_Calibato_8,lyr_Mohicap_9,lyr_Bunot_10,lyr_Palakpakin_11,lyr_Pandin_12,lyr_Sampaloc_13,lyr_Yambo_14];
lyr_Calibato_8.set('fieldAliases', {'YEAR': 'YEAR', 'SEASON': 'SEASON', 'LAKE': 'LAKE', 'STATION': 'STATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'TOTAL COLIFORM (100/MPN)': 'TOTAL COLIFORM (100/MPN)', 'FECAL COLIFORM (100/MPN)': 'FECAL COLIFORM (100/MPN)', });
lyr_Mohicap_9.set('fieldAliases', {'YEAR': 'YEAR', 'SEASON': 'SEASON', 'LAKE': 'LAKE', 'STATION': 'STATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'TOTAL COLIFORM (100/MPN)': 'TOTAL COLIFORM (100/MPN)', 'FECAL COLIFORM (100/MPN)': 'FECAL COLIFORM (100/MPN)', });
lyr_Bunot_10.set('fieldAliases', {'YEAR': 'YEAR', 'SEASON': 'SEASON', 'LAKE': 'LAKE', 'STATION': 'STATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'TOTAL COLIFORM (100/MPN)': 'TOTAL COLIFORM (100/MPN)', 'FECAL COLIFORM (100/MPN)': 'FECAL COLIFORM (100/MPN)', });
lyr_Palakpakin_11.set('fieldAliases', {'YEAR': 'YEAR', 'SEASON': 'SEASON', 'LAKE': 'LAKE', 'STATION': 'STATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'TOTAL COLIFORM (100/MPN)': 'TOTAL COLIFORM (100/MPN)', 'FECAL COLIFORM (100/MPN)': 'FECAL COLIFORM (100/MPN)', });
lyr_Pandin_12.set('fieldAliases', {'YEAR': 'YEAR', 'SEASON': 'SEASON', 'LAKE': 'LAKE', 'STATION': 'STATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'TOTAL COLIFORM (100/MPN)': 'TOTAL COLIFORM (100/MPN)', 'FECAL COLIFORM (100/MPN)': 'FECAL COLIFORM (100/MPN)', });
lyr_Sampaloc_13.set('fieldAliases', {'YEAR': 'YEAR', 'SEASON': 'SEASON', 'LAKE': 'LAKE', 'STATION': 'STATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'TOTAL COLIFORM (100/MPN)': 'TOTAL COLIFORM (100/MPN)', 'FECAL COLIFORM (100/MPN)': 'FECAL COLIFORM (100/MPN)', });
lyr_Yambo_14.set('fieldAliases', {'YEAR': 'YEAR', 'SEASON': 'SEASON', 'LAKE': 'LAKE', 'STATION': 'STATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'TOTAL COLIFORM (100/MPN)': 'TOTAL COLIFORM (100/MPN)', 'FECAL COLIFORM (100/MPN)': 'FECAL COLIFORM (100/MPN)', });
lyr_Calibato_8.set('fieldImages', {'YEAR': '', 'SEASON': '', 'LAKE': '', 'STATION': '', 'LATITUDE': '', 'LONGITUDE': '', 'TOTAL COLIFORM (100/MPN)': '', 'FECAL COLIFORM (100/MPN)': '', });
lyr_Mohicap_9.set('fieldImages', {'YEAR': '', 'SEASON': '', 'LAKE': '', 'STATION': '', 'LATITUDE': '', 'LONGITUDE': '', 'TOTAL COLIFORM (100/MPN)': '', 'FECAL COLIFORM (100/MPN)': '', });
lyr_Bunot_10.set('fieldImages', {'YEAR': '', 'SEASON': '', 'LAKE': '', 'STATION': '', 'LATITUDE': '', 'LONGITUDE': '', 'TOTAL COLIFORM (100/MPN)': '', 'FECAL COLIFORM (100/MPN)': '', });
lyr_Palakpakin_11.set('fieldImages', {'YEAR': '', 'SEASON': '', 'LAKE': '', 'STATION': '', 'LATITUDE': '', 'LONGITUDE': '', 'TOTAL COLIFORM (100/MPN)': '', 'FECAL COLIFORM (100/MPN)': '', });
lyr_Pandin_12.set('fieldImages', {'YEAR': 'Range', 'SEASON': 'TextEdit', 'LAKE': 'TextEdit', 'STATION': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'TOTAL COLIFORM (100/MPN)': 'Range', 'FECAL COLIFORM (100/MPN)': 'Range', });
lyr_Sampaloc_13.set('fieldImages', {'YEAR': '', 'SEASON': '', 'LAKE': '', 'STATION': '', 'LATITUDE': '', 'LONGITUDE': '', 'TOTAL COLIFORM (100/MPN)': '', 'FECAL COLIFORM (100/MPN)': '', });
lyr_Yambo_14.set('fieldImages', {'YEAR': 'Range', 'SEASON': 'TextEdit', 'LAKE': 'TextEdit', 'STATION': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'TOTAL COLIFORM (100/MPN)': 'Range', 'FECAL COLIFORM (100/MPN)': 'Range', });
lyr_Calibato_8.set('fieldLabels', {'YEAR': 'header label', 'SEASON': 'header label', 'LAKE': 'header label', 'STATION': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'TOTAL COLIFORM (100/MPN)': 'header label', 'FECAL COLIFORM (100/MPN)': 'header label', });
lyr_Mohicap_9.set('fieldLabels', {'YEAR': 'header label', 'SEASON': 'header label', 'LAKE': 'header label', 'STATION': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'TOTAL COLIFORM (100/MPN)': 'header label', 'FECAL COLIFORM (100/MPN)': 'header label', });
lyr_Bunot_10.set('fieldLabels', {'YEAR': 'header label', 'SEASON': 'header label', 'LAKE': 'header label', 'STATION': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'TOTAL COLIFORM (100/MPN)': 'header label', 'FECAL COLIFORM (100/MPN)': 'header label', });
lyr_Palakpakin_11.set('fieldLabels', {'YEAR': 'header label', 'SEASON': 'header label', 'LAKE': 'header label', 'STATION': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'TOTAL COLIFORM (100/MPN)': 'header label', 'FECAL COLIFORM (100/MPN)': 'header label', });
lyr_Pandin_12.set('fieldLabels', {'YEAR': 'header label', 'SEASON': 'header label', 'LAKE': 'header label', 'STATION': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'TOTAL COLIFORM (100/MPN)': 'header label', 'FECAL COLIFORM (100/MPN)': 'header label', });
lyr_Sampaloc_13.set('fieldLabels', {'YEAR': 'header label', 'SEASON': 'header label', 'LAKE': 'header label', 'STATION': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'TOTAL COLIFORM (100/MPN)': 'header label', 'FECAL COLIFORM (100/MPN)': 'header label', });
lyr_Yambo_14.set('fieldLabels', {'YEAR': 'header label', 'SEASON': 'header label', 'LAKE': 'header label', 'STATION': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'TOTAL COLIFORM (100/MPN)': 'header label', 'FECAL COLIFORM (100/MPN)': 'header label', });
lyr_Yambo_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});