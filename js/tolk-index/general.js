AOS.init({
    delay: 990,
    duration: 1900,
  });


$(document).ready(function(){
adjustCSS();
$(window).resize(function(){ adjustCSS() });


  //  $('#modalOfertaRelampago').modal('toggle');
  $('#modalUneteImpuls').modal({backdrop: 'static', keyboard: false});
   $('#modalOfertaRelampago').modal({backdrop: 'static', keyboard: false})
  //  $('.modal-backdrop').removeClass("modal-backdrop");  
   
$("#fechaN").inputmask("datetime", {
     inputFormat: "dd/mm/yyyy",
     outputFormat: "mm-yyyy-dd",
     inputEventOnly: true
 });

 $( ".btnSesion" ).click(function() {
  $(".conSesion").show();
  $(".sinSesion").hide(); 	

});

$( ".cerrarS" ).click(function() {
  $(".conSesion").hide();
  $(".sinSesion").show(); 	
  location.reload();
});


$(".open-button").click(function(){


});

$(".open-button").click(function(){


});


})

function adjustCSS(){


if($(window).width() <= 767){
  $("#menuCategorias").removeClass("navbar-light");
  // $("#menuCategorias").removeClass("white");
  $("#menuCategorias").addClass("navbar-dark");
  $("#menuCategorias").addClass("special-color-dark");

  $(".efectosRecomendados").removeAttr("data-aos");

}else{
  $("#menuCategorias").removeClass("navbar-dark");
  $("#menuCategorias").removeClass("special-color-dark");
  $("#menuCategorias").addClass("navbar-light");
  $("#menuCategorias").addClass("white");
//   $(".efectosRecomendados").addattr("data-aos");
}



$ ("#modalRegistro").on('show.bs.modal', function (e) {
  $ ("#modalLogin"). modal ("hide");
});

$ ("#modalLogin").on('show.bs.modal', function (e) {
  $ ("#modalRegistro"). modal ("hide");
});

$ ("#modalActivaCuenta").on('show.bs.modal', function (e) {
  $ ("#modalLogin"). modal ("hide");
});

$ ("#modalLogin").on('show.bs.modal', function (e) {
  $ ("#modalActivaCuenta"). modal ("hide");
});

$ ("#modalOlvidasteContrasena").on('show.bs.modal', function (e) {
  $ ("#modalLogin"). modal ("hide");
});

$ ("#modalLogin").on('show.bs.modal', function (e) {
  $ ("#modalOlvidasteContrasena"). modal ("hide");
});




}

