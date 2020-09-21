$(document).ready(function(){
    $('#requiereFact').click(function(){
        if($(this).prop("checked") == true){
            $("#requiereFacturaCollapse").show();
        }
        else if($(this).prop("checked") == false){
         $("#requiereFacturaCollapse").hide();
        }
    });
});