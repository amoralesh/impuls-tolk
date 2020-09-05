

$(document).on('ready', function() {  
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 3
    });

    $(".regular").slick({
     dots: true,
     infinite: true,
     slidesToShow: 5,
     slidesToScroll: 1
    });

  });