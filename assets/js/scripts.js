// Avoid `console` errors in browsers that lack a console.
(function() {
  var method
  var noop = function() {}
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn"
  ]
  var length = methods.length
  var console = (window.console = window.console || {})

  while (length--) {
    method = methods[length]

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop
    }
  }
})()
if (typeof jQuery === "undefined") {
  console.warn("jQuery hasn't loaded")
} else {
  console.log("jQuery " + jQuery.fn.jquery + " has loaded")
}
// Place any jQuery/helper plugins in here.

(function() {
  var $elements = $('.block-forth--item');
  var maxheight = 0;
  $elements.each(function() {
    if ($(this).height() > maxheight) {
      maxheight = $(this).height();
    }
  });
  $elements.height(maxheight);
}());


// jQuery(document).ready(function($) {
function initMap() {

  var uluru = {
    lat: 55.73102774957309,
    lng: 37.63500960543752
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
