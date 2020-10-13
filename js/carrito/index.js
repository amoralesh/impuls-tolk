$(document).ready(function(){
    $("input[name=direcciones]").click(function(){
        var id = $(this).attr('id');
        var cheked =  $( "#"+id ).val();

        if(cheked == 'direccion' || cheked == 'tienda' ){
            $("#direccion").toggle();
            $("#tienda").toggle();
        }
    });
    $("input[name=tiendacasa]").click(function(){
        var id = $(this).attr('id');
        var cheked =  $( "#"+id ).val();
       
          if(cheked == 'enviardir' || cheked == 'adddir'){
               
               if(cheked == 'enviardir' ){
                $("#cont_select_dir").toggle();
                $(".input_datos").prop('disabled', true);
                $(".input_car_secDos").prop('disabled', true);
               }
               if(cheked == 'adddir' ){
                $("#cont_select_dir").toggle();
                $(".input_datos").prop('disabled', false);
                $(".input_car_secDos").prop('disabled', false);
                $(".input_datos").val("");
                $(".input_car_secDos").val("");
                
               }
          }
       });
       $("#direccionesGuardadas").click(function(){
           // get info
           var id_direccion =  $( "#direccionesGuardadas").val();
     
           if(id_direccion != "noRegistro"){
            $("#destino").val("Casa");
            $("#nombre").val("luis javier");
            $("#apmaterno").val("flores");
            $("#appaterno").val("castañeda");
            $("#telefono").val("Casa");
            $("#cp").val("34890");
            $("#pais").val("Mexico");
            $("#Estado").val("Durango");
            $("#Ciudad").val("Vicente Guerrero");
            $("#Colonia").val("Nueva España");
            $("#Municipio").val("Vicente Guerrero");
            $("#Calle").val("De Las Rosas MZ7 LT8");
            $("#nexterior").val("121");
            $("#ninterior").val("1");
            $("#Entrecalles").val("atlantico y pasifico");
           }else{
            $(".input_datos").val("");
           }
           
       });
      
       $('#advancedTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show');
        var id = $(this).attr('id');
        show(id)
      });
      $('#realizar-pago').click(function(){
        $("#pago-tab").trigger("click");
      });
      $('#finalizar_pago').click(function(){
        $("#pedido_completo-tab").trigger("click");
      });
      
      function show(id){
    
        $( "#description-tab span" ).removeClass( "show_span" );
        $( "#pago-tab span" ).removeClass( "show_span" );
        $( "#pedido_completo-tab span" ).removeClass( "show_span" );
    
        $( "#description-tab span" ).addClass( "car_span" );
        $( "#pago-tab span" ).addClass( "car_span" );
        $( "#pedido_completo-tab span" ).addClass( "car_span" );
        $( "."+id).removeClass( "car_span" );
        $( "."+id ).addClass( "show_span" );
        
    }
  });
