var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASI_LN_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_1 = format_ADMINISTRASI_LN_25K_1.readFeatures(json_ADMINISTRASI_LN_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_1.addFeatures(features_ADMINISTRASI_LN_25K_1);
var lyr_ADMINISTRASI_LN_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25K_1, 
                style: style_ADMINISTRASI_LN_25K_1,
                popuplayertitle: "ADMINISTRASI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_1.png" /> ADMINISTRASI_LN_25K'
            });
var format_ADMINISTRASIDESA_AR_25Kcopy_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25Kcopy_2 = format_ADMINISTRASIDESA_AR_25Kcopy_2.readFeatures(json_ADMINISTRASIDESA_AR_25Kcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25Kcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25Kcopy_2.addFeatures(features_ADMINISTRASIDESA_AR_25Kcopy_2);
var lyr_ADMINISTRASIDESA_AR_25Kcopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25Kcopy_2, 
                style: style_ADMINISTRASIDESA_AR_25Kcopy_2,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K copy",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25Kcopy_2.png" /> ADMINISTRASIDESA_AR_25K copy'
            });
var format_RT_3 = new ol.format.GeoJSON();
var features_RT_3 = format_RT_3.readFeatures(json_RT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_3.addFeatures(features_RT_3);
var lyr_RT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_3, 
                style: style_RT_3,
                popuplayertitle: "RT",
                interactive: true,
    title: 'RT<br />\
    <img src="styles/legend/RT_3_0.png" /> <br />\
    <img src="styles/legend/RT_3_1.png" /> RT01/RW06<br />\
    <img src="styles/legend/RT_3_2.png" /> RT01/RW07<br />\
    <img src="styles/legend/RT_3_3.png" /> RT01/RW05<br />\
    <img src="styles/legend/RT_3_4.png" /> RT02/RW02<br />\
    <img src="styles/legend/RT_3_5.png" /> RT02/RW03<br />\
    <img src="styles/legend/RT_3_6.png" /> RT02/RW05<br />\
    <img src="styles/legend/RT_3_7.png" /> RT02/RW07<br />\
    <img src="styles/legend/RT_3_8.png" /> RT03/RW03<br />\
    <img src="styles/legend/RT_3_9.png" /> RT03/RW05<br />\
    <img src="styles/legend/RT_3_10.png" /> RT04/RW05<br />\
    <img src="styles/legend/RT_3_11.png" /> RT01/02<br />\
    <img src="styles/legend/RT_3_12.png" /> RT01/RW03<br />\
    <img src="styles/legend/RT_3_13.png" /> RT01/RW08<br />\
    <img src="styles/legend/RT_3_14.png" /> RT01/RW09<br />\
    <img src="styles/legend/RT_3_15.png" /> RT02/RW08<br />\
    <img src="styles/legend/RT_3_16.png" /> RT02/RW09<br />\
    <img src="styles/legend/RT_3_17.png" /> RT03/RW02<br />\
    <img src="styles/legend/RT_3_18.png" /> RT03/RW08<br />\
    <img src="styles/legend/RT_3_19.png" /> RT03/RW09<br />\
    <img src="styles/legend/RT_3_20.png" /> RT04/RW08<br />\
    <img src="styles/legend/RT_3_21.png" /> RT04/RW09<br />\
    <img src="styles/legend/RT_3_22.png" /> RT05/RW08<br />\
    <img src="styles/legend/RT_3_23.png" /> RT01/RW02<br />\
    <img src="styles/legend/RT_3_24.png" /> RT02/RW01<br />\
    <img src="styles/legend/RT_3_25.png" /> RT02/RW06<br />\
    <img src="styles/legend/RT_3_26.png" /> RT03/RW01<br />\
    <img src="styles/legend/RT_3_27.png" /> RT04/RW01<br />\
    <img src="styles/legend/RT_3_28.png" /> RT05/RW09<br />\
    <img src="styles/legend/RT_3_29.png" /> RW01/RW01<br />\
    <img src="styles/legend/RT_3_30.png" /> RT03/RW06<br />\
    <img src="styles/legend/RT_3_31.png" /> RT04/RW06<br />'
        });
var format_sungai_4 = new ol.format.GeoJSON();
var features_sungai_4 = format_sungai_4.readFeatures(json_sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_4.addFeatures(features_sungai_4);
var lyr_sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_4, 
                style: style_sungai_4,
                popuplayertitle: "sungai",
                interactive: true,
                title: '<img src="styles/legend/sungai_4.png" /> sungai'
            });
var format_hutan_5 = new ol.format.GeoJSON();
var features_hutan_5 = format_hutan_5.readFeatures(json_hutan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hutan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hutan_5.addFeatures(features_hutan_5);
var lyr_hutan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hutan_5, 
                style: style_hutan_5,
                popuplayertitle: "hutan",
                interactive: true,
    title: 'hutan<br />\
    <img src="styles/legend/hutan_5_0.png" /> <br />'
        });
var format_sawah_6 = new ol.format.GeoJSON();
var features_sawah_6 = format_sawah_6.readFeatures(json_sawah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_6.addFeatures(features_sawah_6);
var lyr_sawah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_6, 
                style: style_sawah_6,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_6.png" /> sawah'
            });
var format_Lapangan_7 = new ol.format.GeoJSON();
var features_Lapangan_7 = format_Lapangan_7.readFeatures(json_Lapangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_7.addFeatures(features_Lapangan_7);
var lyr_Lapangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_7, 
                style: style_Lapangan_7,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_7.png" /> Lapangan'
            });
var format_bangunan_8 = new ol.format.GeoJSON();
var features_bangunan_8 = format_bangunan_8.readFeatures(json_bangunan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_8.addFeatures(features_bangunan_8);
var lyr_bangunan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_8, 
                style: style_bangunan_8,
                popuplayertitle: "bangunan",
                interactive: true,
                title: '<img src="styles/legend/bangunan_8.png" /> bangunan'
            });
var format_JALAN_9 = new ol.format.GeoJSON();
var features_JALAN_9 = format_JALAN_9.readFeatures(json_JALAN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_9.addFeatures(features_JALAN_9);
var lyr_JALAN_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_9, 
                style: style_JALAN_9,
                popuplayertitle: "JALAN",
                interactive: true,
    title: 'JALAN<br />\
    <img src="styles/legend/JALAN_9_0.png" /> 6<br />\
    <img src="styles/legend/JALAN_9_1.png" /> 1<br />\
    <img src="styles/legend/JALAN_9_2.png" /> 2<br />\
    <img src="styles/legend/JALAN_9_3.png" /> 3<br />\
    <img src="styles/legend/JALAN_9_4.png" /> 5<br />\
    <img src="styles/legend/JALAN_9_5.png" /> 7<br />\
    <img src="styles/legend/JALAN_9_6.png" /> <br />'
        });
var format_NamaLap_10 = new ol.format.GeoJSON();
var features_NamaLap_10 = format_NamaLap_10.readFeatures(json_NamaLap_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamaLap_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaLap_10.addFeatures(features_NamaLap_10);
var lyr_NamaLap_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamaLap_10, 
                style: style_NamaLap_10,
                popuplayertitle: "NamaLap",
                interactive: true,
                title: '<img src="styles/legend/NamaLap_10.png" /> NamaLap'
            });
var format_Kantor_11 = new ol.format.GeoJSON();
var features_Kantor_11 = format_Kantor_11.readFeatures(json_Kantor_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kantor_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantor_11.addFeatures(features_Kantor_11);
var lyr_Kantor_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kantor_11, 
                style: style_Kantor_11,
                popuplayertitle: "Kantor",
                interactive: true,
                title: '<img src="styles/legend/Kantor_11.png" /> Kantor'
            });
var format_Rumah_12 = new ol.format.GeoJSON();
var features_Rumah_12 = format_Rumah_12.readFeatures(json_Rumah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_12.addFeatures(features_Rumah_12);
var lyr_Rumah_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_12, 
                style: style_Rumah_12,
                popuplayertitle: "Rumah",
                interactive: true,
                title: '<img src="styles/legend/Rumah_12.png" /> Rumah'
            });
var format_Wisata_13 = new ol.format.GeoJSON();
var features_Wisata_13 = format_Wisata_13.readFeatures(json_Wisata_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wisata_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wisata_13.addFeatures(features_Wisata_13);
var lyr_Wisata_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wisata_13, 
                style: style_Wisata_13,
                popuplayertitle: "Wisata",
                interactive: true,
                title: '<img src="styles/legend/Wisata_13.png" /> Wisata'
            });
var format_Jembatan_14 = new ol.format.GeoJSON();
var features_Jembatan_14 = format_Jembatan_14.readFeatures(json_Jembatan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jembatan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jembatan_14.addFeatures(features_Jembatan_14);
var lyr_Jembatan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jembatan_14, 
                style: style_Jembatan_14,
                popuplayertitle: "Jembatan",
                interactive: true,
                title: '<img src="styles/legend/Jembatan_14.png" /> Jembatan'
            });
var format_Perusahaan_15 = new ol.format.GeoJSON();
var features_Perusahaan_15 = format_Perusahaan_15.readFeatures(json_Perusahaan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perusahaan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perusahaan_15.addFeatures(features_Perusahaan_15);
var lyr_Perusahaan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perusahaan_15, 
                style: style_Perusahaan_15,
                popuplayertitle: "Perusahaan",
                interactive: true,
                title: '<img src="styles/legend/Perusahaan_15.png" /> Perusahaan'
            });
var format_Masjid_16 = new ol.format.GeoJSON();
var features_Masjid_16 = format_Masjid_16.readFeatures(json_Masjid_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_16.addFeatures(features_Masjid_16);
var lyr_Masjid_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_16, 
                style: style_Masjid_16,
                popuplayertitle: "Masjid",
                interactive: true,
                title: '<img src="styles/legend/Masjid_16.png" /> Masjid'
            });
var format_SPBU_17 = new ol.format.GeoJSON();
var features_SPBU_17 = format_SPBU_17.readFeatures(json_SPBU_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_17.addFeatures(features_SPBU_17);
var lyr_SPBU_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_17, 
                style: style_SPBU_17,
                popuplayertitle: "SPBU",
                interactive: true,
                title: '<img src="styles/legend/SPBU_17.png" /> SPBU'
            });
var format_sekolah_18 = new ol.format.GeoJSON();
var features_sekolah_18 = format_sekolah_18.readFeatures(json_sekolah_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolah_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah_18.addFeatures(features_sekolah_18);
var lyr_sekolah_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolah_18, 
                style: style_sekolah_18,
                popuplayertitle: "sekolah",
                interactive: true,
                title: '<img src="styles/legend/sekolah_18.png" /> sekolah'
            });
var format_PangkasRambut_19 = new ol.format.GeoJSON();
var features_PangkasRambut_19 = format_PangkasRambut_19.readFeatures(json_PangkasRambut_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PangkasRambut_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PangkasRambut_19.addFeatures(features_PangkasRambut_19);
var lyr_PangkasRambut_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PangkasRambut_19, 
                style: style_PangkasRambut_19,
                popuplayertitle: "Pangkas Rambut",
                interactive: true,
                title: '<img src="styles/legend/PangkasRambut_19.png" /> Pangkas Rambut'
            });
var format_tempatmakan_20 = new ol.format.GeoJSON();
var features_tempatmakan_20 = format_tempatmakan_20.readFeatures(json_tempatmakan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempatmakan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatmakan_20.addFeatures(features_tempatmakan_20);
var lyr_tempatmakan_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatmakan_20, 
                style: style_tempatmakan_20,
                popuplayertitle: "tempat makan",
                interactive: true,
                title: '<img src="styles/legend/tempatmakan_20.png" /> tempat makan'
            });
var format_Shop_21 = new ol.format.GeoJSON();
var features_Shop_21 = format_Shop_21.readFeatures(json_Shop_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shop_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_21.addFeatures(features_Shop_21);
var lyr_Shop_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shop_21, 
                style: style_Shop_21,
                popuplayertitle: "Shop",
                interactive: true,
                title: '<img src="styles/legend/Shop_21.png" /> Shop'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASI_LN_25K_1.setVisible(true);lyr_ADMINISTRASIDESA_AR_25Kcopy_2.setVisible(true);lyr_RT_3.setVisible(true);lyr_sungai_4.setVisible(true);lyr_hutan_5.setVisible(true);lyr_sawah_6.setVisible(true);lyr_Lapangan_7.setVisible(true);lyr_bangunan_8.setVisible(true);lyr_JALAN_9.setVisible(true);lyr_NamaLap_10.setVisible(true);lyr_Kantor_11.setVisible(true);lyr_Rumah_12.setVisible(true);lyr_Wisata_13.setVisible(true);lyr_Jembatan_14.setVisible(true);lyr_Perusahaan_15.setVisible(true);lyr_Masjid_16.setVisible(true);lyr_SPBU_17.setVisible(true);lyr_sekolah_18.setVisible(true);lyr_PangkasRambut_19.setVisible(true);lyr_tempatmakan_20.setVisible(true);lyr_Shop_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASI_LN_25K_1,lyr_ADMINISTRASIDESA_AR_25Kcopy_2,lyr_RT_3,lyr_sungai_4,lyr_hutan_5,lyr_sawah_6,lyr_Lapangan_7,lyr_bangunan_8,lyr_JALAN_9,lyr_NamaLap_10,lyr_Kantor_11,lyr_Rumah_12,lyr_Wisata_13,lyr_Jembatan_14,lyr_Perusahaan_15,lyr_Masjid_16,lyr_SPBU_17,lyr_sekolah_18,lyr_PangkasRambut_19,lyr_tempatmakan_20,lyr_Shop_21];
lyr_ADMINISTRASI_LN_25K_1.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RT_3.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_sungai_4.set('fieldAliases', {'id': 'id', });
lyr_hutan_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_sawah_6.set('fieldAliases', {'id': 'id', });
lyr_Lapangan_7.set('fieldAliases', {'id': 'id', });
lyr_bangunan_8.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'access_roo': 'access_roo', 'building_m': 'building_m', 'building': 'building', 'roof_mater': 'roof_mater', 'name': 'name', 'addr_house': 'addr_house', });
lyr_JALAN_9.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'LEBAR': 'LEBAR', });
lyr_NamaLap_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kantor_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Rumah_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Wisata_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Jembatan_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Perusahaan_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Masjid_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_SPBU_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_sekolah_18.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_PangkasRambut_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_tempatmakan_20.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Shop_21.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_ADMINISTRASI_LN_25K_1.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RT_3.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_sungai_4.set('fieldImages', {'id': 'TextEdit', });
lyr_hutan_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_sawah_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Lapangan_7.set('fieldImages', {'id': 'TextEdit', });
lyr_bangunan_8.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_stree': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'building': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_JALAN_9.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', 'LEBAR': 'TextEdit', });
lyr_NamaLap_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kantor_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Rumah_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Wisata_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Jembatan_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Perusahaan_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Masjid_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_SPBU_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_sekolah_18.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_PangkasRambut_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_tempatmakan_20.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Shop_21.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_1.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RT_3.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_sungai_4.set('fieldLabels', {'id': 'no label', });
lyr_hutan_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_sawah_6.set('fieldLabels', {'id': 'no label', });
lyr_Lapangan_7.set('fieldLabels', {'id': 'no label', });
lyr_bangunan_8.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'building': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'addr_house': 'no label', });
lyr_JALAN_9.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', 'LEBAR': 'no label', });
lyr_NamaLap_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kantor_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Rumah_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Wisata_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Jembatan_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Perusahaan_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Masjid_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_SPBU_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_sekolah_18.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_PangkasRambut_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_tempatmakan_20.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Shop_21.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Shop_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});