$(document).ready( function() {

    $(".down").click(function() {
     $('html, body').animate({
         scrollTop: $(".subhead").offset().top-149
     }, 1300);
    });
});