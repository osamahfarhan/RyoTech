// header
// $(".menu__arrow").click(function(){
//     $(".menu__language__drop-down").toggleClass("d-none");
// });
// $('.menu__button').keypress(function (e) {
//   var key = e.which;
//   if(key == 13) 
//    {
//      $('.menu__button').click();
//      return false;  
//    }
//  }); 

// $(".site-search__icon").click(function(){
//     $(".site-search__input").toggleClass("toggle");
// });
// For on scrolling fixed header
$(function() {
    var header = $("body");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.addClass("fixed-header");
        } else {
            header.removeClass("fixed-header");
        }
    });
});

//menu click
$(".menu__hamburger").click(function(){
    $("body").toggleClass("menu-open");
});
$('.menu__hamberger').keypress(function (e) {
  var key = e.which;
  if(key == 13) 
   {
     $('.menu__hamberger').click();
     return false;  
   }
 }); 

 // banner padding
if ($(window).width() < 767) {
    var height = $('.banner .carousel-caption').outerHeight(); 
    var newHeight = height+10;
    $('.banner .carousel-inner').css('padding-bottom', newHeight+'px');
    $('.banner .carousel-caption').css('bottom', -height+'px');
 }

// enable bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


// Scrolling Background-Image Parallax The function





// For on scrolling fixed header
$(function() {
    var header = $("body");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.addClass("fixed-header");
        } else {
            header.removeClass("fixed-header");
        }
    });
});


// add class while loading the page
jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
      
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable');
      
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
      }
      
      // Check all animatables and animate them if necessary
      $animatables.each(function(i) {
      var $animatable = $(this);
  
          if ($(window).width() < 1500) {
              if (($animatable.offset().top + $animatable.height() - 750) < offset) {
              $animatable.removeClass('animatable').addClass('animated');
              }
          }
          else {
              if (($animatable.offset().top + $animatable.height() - 150) < offset) {
              $animatable.removeClass('animatable').addClass('animated');
              }
          }
      });
  };
  
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
  
  });



$(window).scroll(function(){
    $(window).trigger('resize.px.parallax');     
});




//load more
jQuery(function(){  
    x=1;
    $('.incubated .carousel-item:lt('+x+')').show(); 
    $('.graduated .carousel-item:lt('+x+')').show(); 

    jQuery('.incubated #loadMore').click(function(){
        jQuery('.incubated .carousel-item').show();
        jQuery('.incubated #loadMore').toggle();
        jQuery('.incubated #showLess').toggle();
        $(window).trigger('resize.px.parallax');
      return false;
   });
   jQuery('.incubated #showLess').click(function(){
        jQuery('.incubated .carousel-item').hide();
        $('.incubated .carousel-item:lt('+x+')').show();
        jQuery('.incubated #loadMore').toggle();
        jQuery('.incubated #showLess').toggle();
        $(window).trigger('resize.px.parallax');
        return false;   
   });

   jQuery('.graduated #graduatedloadMore').click(function(){
    jQuery('.graduated .carousel-item').show();
    jQuery('.graduated #graduatedloadMore').toggle();
    jQuery('.graduated #graduatedshowLess').toggle();
    $(window).trigger('resize.px.parallax');
    return false;
    });
    jQuery('.graduated #graduatedshowLess').click(function(){
        jQuery('.graduated .carousel-item').hide();
        $('.graduated .carousel-item:lt('+x+')').show();
        jQuery('.graduated #graduatedloadMore').toggle();
        jQuery('.graduated #graduatedshowLess').toggle();
        $(window).trigger('resize.px.parallax');
        return false;   
    });
});
