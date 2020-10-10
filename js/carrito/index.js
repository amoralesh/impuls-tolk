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
       $(".car_tabl_title").click(function(){
            alert(this.attr("id"))
       });
      
  });