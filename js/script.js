$( function() {
  /*
  - how to call the plugin:
  $( selector ).cbpFWSlider( [options] );
  - options:
  {
    // default transition speed (ms)
    speed : 500,
    // default transition easing
    easing : 'ease'
  }
  - destroy:
  $( selector ).cbpFWSlider( 'destroy' );
  */

} );


$(document).ready(function(){
  console.log("ready!");
  $( '#cbp-fwslider' ).cbpFWSlider();
  var quiz = jQuery('#quiz').quiz('1DE5wQSpG01QPyEreYoWIKPh_Hg_urbsklzKgEmoqzuw'); //your published spreadsheet key or URL goes here
});
