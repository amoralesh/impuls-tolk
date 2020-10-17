AOS.init({
    delay: 990,
    duration: 1900,
  });
 

  
$(document).ready(function(){

//   $(document.body).on('touchmove', onScroll); // for mobile
// $(window).on('touchmove', onScroll); 

// // callback
// function onScroll(){ 
//       $(".open-button-2").css("display","none");
//       $(".comunicacion").css("display","none");
// }



  $(window).on('scroll', function () { // Evento de Scroll
    if (($(window).scrollTop() + $(window).height()) == $(document).height()) {

        $(".open-button-2").css("display","none");
        $(".comunicacion").css("display","none");
    } else { 

        $(".open-button-2").css("display","block");
        $(".comunicacion").css("display","block");
    }
  });


  var altoHeader =$("header").height();
   $("#menuSmall").css("top", altoHeader);


  //  $('#modalOfertaRelampago').modal('toggle');
  $('#modalUneteImpuls').modal({backdrop: 'static', keyboard: false});


  $('#CerrarModalUnete').click(function(){
    $('#modalOfertaRelampago').modal({backdrop: 'hide', keyboard: false});
    $('.modal-backdrop').removeClass("modal-backdrop"); 
  });


  

   
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


adjustCSS();
$(window).resize(function(){ adjustCSS() });


});



function adjustCSS(){


if($(window).width() <= 767){ 


  $("#collapseTiendalinea").addClass("collapse");
  $("#collapseIniciaNegocio").addClass("collapse");
  $("#collapseAcercaNosostros").addClass("collapse");
  $("#collapseMicuenta").addClass("collapse");
  $("#collapseAyuda").addClass("collapse");

  $(".contenedorCategoriasLP").css("display", "none");
  $(".contenedorFiltrosLP").css("display", "none");

  if ( $("#carrucelMV").length > 0 ) {
    new Glide('#carrucelMV', {
      type: 'carousel',
    startAt: 0,
    autoplay: 442000,
    hoverpause: true,
    gap: 20,
    // animationTimingFunc: ease,
      perView: 5,
      breakpoints: {
         1000: {
            perView: 4
         },
      800: {
            perView: 2
         }
      }
    }).mount();  
  }

}else{

  $("#collapseTiendalinea").removeClass("collapse");
  $("#collapseIniciaNegocio").removeClass("collapse");
  $("#collapseAcercaNosostros").removeClass("collapse");
  $("#collapseMicuenta").removeClass("collapse");
  $("#collapseAyuda").removeClass("collapse");

  $(".contenedorCategoriasLP").css("display", "block");

  
}

}


function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less-menu")
      .toggleClass('fa-angle-up');

      $(e.target)
      .prev('.panel-heading-s')
      .find(".more-less-subMenu")
      .toggleClass('fa-arrow-up');

      $(e.target)
      .prev('.panel-heading-2')
      .find(".more-less-footer")
      .toggleClass('fa-minus');

      $(e.target)
      .prev('.panel-heading-5')
      .find(".more-less-cuenta")
      .toggleClass('fa-minus-square');
}


       $('.panel-group').on('hidden.bs.collapse', toggleIcon);
       $('.panel-group').on('shown.bs.collapse', toggleIcon);



       function openForm() {
        document.getElementById("miChat").style.display = "block";
        $(".floatWhats").css("right", "240px");

        $(".open-button-2").css("display","none");
       
      }
      
      function closeForm() {
        document.getElementById("miChat").style.display = "none";
        $(".floatWhats").css("right", "20px");
        $(".open-button-2").css("display","block");

        
      }

      function openNav() {
        document.getElementById("menuSmall").style.width = "100%";

        $("#cerrarMM").show();
        $("#abrirMM").hide(); 


        $('body').css("overflow", "hidden");
   
      }
      
      function closeNav() {
        document.getElementById("menuSmall").style.width = "0";
        $("#abrirMM").show();
        $("#cerrarMM").hide(); 
        $('body').css("overflow", "auto");
      }



$( window ).on( "orientationchange", function( event ) {

  setTimeout(function(){


    if($(window).width() <= 767){ 


    
   
    
      $("#collapseTiendalinea").addClass("collapse");
      $("#collapseIniciaNegocio").addClass("collapse");
      $("#collapseAcercaNosostros").addClass("collapse");
      $("#collapseMicuenta").addClass("collapse");
      $("#collapseAyuda").addClass("collapse");

      $(".contenedorCategoriasLP").css("display", "none");
      $(".contenedorFiltrosLP").css("display", "none");

      if ( $("#carrucelMV").length > 0 ) {
        new Glide('#carrucelMV', {
          type: 'carousel',
        startAt: 0,
        autoplay: 442000,
        hoverpause: true,
        gap: 20,
        // animationTimingFunc: ease,
          perView: 5,
          breakpoints: {
             1000: {
                perView: 4
             },
          800: {
                perView: 2
             }
          }
        }).mount();  
      }

   
    
    }else{
    
      $("#collapseTiendalinea").removeClass("collapse");
      $("#collapseIniciaNegocio").removeClass("collapse");
      $("#collapseAcercaNosostros").removeClass("collapse");
      $("#collapseMicuenta").removeClass("collapse");
      $("#collapseAyuda").removeClass("collapse");

      $(".contenedorCategoriasLP").css("display", "block");
    
    }
    
    
    var altoHeader2 =$("header").height();
    $("#menuSmall").css("top", altoHeader2);


  }, 700);

  






});
