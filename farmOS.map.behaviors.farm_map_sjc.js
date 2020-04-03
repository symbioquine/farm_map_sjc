(function () {
  farmOS.map.behaviors.farm_map_sjc = {
    attach: function (instance) {

      // Add San Juan Islands Aerials
      var opts = {
        title: 'SJC Aerials',
        url: 'https://myexample.farm/service',
        params: {
          LAYERS: 'Image',
          VERSION: '1.3.0',
        },
        group: 'Base layers',
      };
      instance.addLayer('wms', opts);
    },
  };
}());

