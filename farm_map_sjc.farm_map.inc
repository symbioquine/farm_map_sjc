<?php
/**
 * @file
 * Farm Map hooks implemented by the Farm Map SJC module.
 */

/**
 * Implements hook_farm_map_behaviors().
 */
function farm_map_sjc_farm_map_behaviors() {
  return array(
    'farm_map_sjc' => array(
      'js' => 'farmOS.map.behaviors.farm_map_sjc.js',
    ),
  );
}

/**
 * Implements hook_farm_map_view().
 */
function farm_map_sjc_farm_map_view($name, $element) {
  farm_map_add_behavior('farm_map_sjc');
}
