AOS.init({
    delay: 990,
    duration: 1900,
  });


$(document).ready(function(){
adjustCSS();
$(window).resize(function(){ adjustCSS() });

$( document ).ready(function() {
  //  $('#modalOfertaRelampago').modal('toggle');
   $('#modalOfertaRelampago').modal({backdrop: 'static', keyboard: false})
   $('.modal-backdrop').removeClass("modal-backdrop");    
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

