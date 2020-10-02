
 if($(window).width() <= 767){
   new Glide('#marcasGl', {
      type: 'carousel',
    startAt: 0,
    autoplay: 2000,
    hoverpause: true,
    gap: 20,
    // animationTimingFunc: ease,
      perView: 5,
      breakpoints: {
         1000: {
            perView: 4
         },
      800: {
            perView: 4
         }
      }
    }).mount();  
    
    new Glide('#marcasEx', {
      type: 'carousel',
    startAt: 0,
    autoplay: 2000,
    hoverpause: true,
    gap: 20,
    // animationTimingFunc: ease,
      perView: 5,
      breakpoints: {
         1000: {
            perView: 4
         },
      800: {
            perView: 4
         }
      }
    }).mount();  

   
   }else{

      new Glide('#marcasGl', {
         type: 'carousel',
       startAt: 0,
       autoplay: 2000,
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
       
       new Glide('#marcasEx', {
         type: 'carousel',
       startAt: 0,
       autoplay: 2000,
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



