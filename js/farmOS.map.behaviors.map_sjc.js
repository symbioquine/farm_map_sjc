(function () {
  farmOS.map.behaviors.map_sjc = {
    attach: function (instance) {

      // From https://gis.sanjuanco.com/arcgis/rest/services/Basemaps?f=pjson
      var basemaps = [
        { "name": "Basemaps/Aerials_1932", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2004", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2006", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2008", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2013_WM", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2013", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2016_WM", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2016", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2019_WM", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2019", "type": "MapServer" },
        { "name": "Basemaps/Aerials_2022", "type": "MapServer" },
        { "name": "Basemaps/General_Basemap_WM_nostatelands", "type": "MapServer" },
        { "name": "Basemaps/General_Basemap_WM", "type": "MapServer" },
        { "name": "Basemaps/General_Basemap", "type": "MapServer" },
        { "name": "Basemaps/Reference_Overlay_WM", "type": "MapServer" },
        { "name": "Basemaps/Reference_Overlay", "type": "MapServer" },
        { "name": "Basemaps/Terrain_Basemap_General", "type": "MapServer" },
        { "name": "Basemaps/Terrain_Basemap", "type": "MapServer"}
      ];

      basemaps.forEach(function(basemap) {
        // Add San Juan Islands Basemaps
        var opts = {
          title: "SJC " + basemap.name.split('/')[1],
          url: 'https://gis.sanjuanco.com/arcgis/rest/services/' + basemap.name + '/' + basemap.type,
          visible: false,
          base: true,
          group: 'Base layers',
        };
        instance.addLayer('arcgis-tile', opts);
      });

    }
  };
}());
