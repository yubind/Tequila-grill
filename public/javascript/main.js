$(function() {
    

 $(".toggle-btn").on("click", function() {
   $(".nav-toggle").stop().slideToggle("medium");
 });
    
});



// map //

 function initMap() {
        var options = {
            zoom: 13,
            center: {lat: 45.2101, lng: -123.197990}
        }
        
        
        var map = new google.maps.Map(document.getElementById("map"), options);
        
        
        var marker = new google.maps.Marker({
            map: map,
            position: {lat: 45.2227, lng: -123.1958}
        });
        
      }