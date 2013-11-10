(function ($, window, document, undefined) {

  'use strict';

  $(function () {

     /*_________________________________________________
    |
    | GMAPS for contact
    | _________________________________________________
    */
    
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
      center: new google.maps.LatLng(53.349805, -6.26031),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, map_options);


  });

})(jQuery, window, document);