$( "#btnResenasDetalle" ).click(function() {
    $(".cajaResenas").show();
    $(".cajaPreguntas").hide(); 	
$( "#btnResenasDetalle" ).removeClass( "btnEstilo2" ).addClass( "btnEstilo1" );
$( "#btnPreguntasDetalle" ).removeClass( "btnEstilo1" ).addClass( "btnEstilo2" );

  });

  $( "#btnPreguntasDetalle" ).click(function() {
    $(".cajaPreguntas").show();
    $(".cajaResenas").hide(); 	
$( "#btnPreguntasDetalle" ).removeClass( "btnEstilo2" ).addClass( "btnEstilo1" );
$( "#btnResenasDetalle" ).removeClass( "btnEstilo1" ).addClass( "btnEstilo2" );
  });



//   btnEstilo1
// btnEstilo2


// btnResenasDetalle
// btnPreguntasDetalle

// cajaResenas
// cajaPreguntas