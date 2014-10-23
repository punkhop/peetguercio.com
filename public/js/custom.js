


/* ==============================================
Sticky Navbar
=============================================== */

$(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});
});




/* ==============================================
Auto Close Responsive Navbar on Click
=============================================== */

function close_toggle() {
if ($(window).width() <= 768) {
  $('.navbar-collapse a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
}
else {
 $('.navbar .navbar-default a').off('click');
}
}
close_toggle();

$(window).resize(close_toggle);



/* ==============================================
Smooth Scroll To Anchor
=============================================== */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar a,.btn').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeOutExpo');
        event.preventDefault();
    });
});


/***********logo effect******************/
// var mywindow = $(window);
// var mypos = mywindow.scrollTop();
// mywindow.scroll(function() {
//     if(mywindow.scrollTop() > 170)
//     {
//         $('.logo').fadeIn();
//     }
//     else
//     {
//         $('.logo').fadeOut();
//     }
//     mypos = mywindow.scrollTop();
//  });


/*********** BIG VIDEO **********/
$(function() {
  opts ={
    webm:'video.mov',
    scale:true,
    zIndex:0
  };
  var videoBG = $('.main_video').videoBG(opts);
});
