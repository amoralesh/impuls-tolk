
$(document).ready(function() {


  $('#list').click(function(event){
      event.preventDefault();
      $('#products .item').addClass('list-group-item');

      $('.parte-1').removeClass('col-md-12');
      $('.parte-2').removeClass('col-md-12');
      $('.parte-1').addClass('col-md-6');
      $('.parte-2').addClass('col-md-6');

      $('.contenedorBtnFavoritos').removeClass('marginTopTemporal');

      $('.list-group-image').addClass('imgBorder-R-lista');
      $('.list-group-image').removeClass('imgBorder-B-lista');


  });

  $('#grid').click(function(event){
      event.preventDefault();$('#products .item').removeClass('list-group-item');
      $('#products .item').addClass('grid-group-item');

      $('.parte-1').removeClass('col-md-6');
      $('.parte-2').removeClass('col-md-6');
      $('.parte-1').addClass('col-md-12');
      $('.parte-2').addClass('col-md-12');

      $('.contenedorBtnFavoritos').addClass('marginTopTemporal');
      
      $('.list-group-image').removeClass('imgBorder-R-lista');
      $('.list-group-image').addClass('imgBorder-B-lista');
    
  });


  function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-minus');
}

$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

});

$(".irAFiltros").click(function(){
  $(".contenedorCategoriasLP").hide();
  $(".contenedorFiltrosLP").show();
});


$('#multi').mdbRange({
  value: {
    min: 80,
    max: 2000
  },
  single: {
    active: true,
    multi: {
      active: true,
      rangeLength: 1
    },
  }
});

$('#multi2').mdbRange({
  value: {
    min: 1,
    max: 5
  },
  single: {
    active: true,
    multi: {
      active: true,
      rangeLength: 1
    },
  }
});



