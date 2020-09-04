AOS.init({
    delay: 990,
    duration: 1900,
  });


$(document).ready(function(){
adjustCSS();
$(window).resize(function(){ adjustCSS() });
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


}

