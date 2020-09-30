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

  $( "#cd" ).click(function() {
    $("#cd").hide();
    $("#vd").show();
  });

  $( "#vd" ).click(function() {
    $("#vd").hide();
    $("#cd").show();
  });


  var header = document.getElementById("misTallas");
  var btns = header.getElementsByClassName("tallasDP");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }





//   btnEstilo1
// btnEstilo2


// btnResenasDetalle
// btnPreguntasDetalle

// cajaResenas
// cajaPreguntas