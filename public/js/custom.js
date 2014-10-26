


/* ==============================================
Sticky Navbar AND Logo Fading
=============================================== */

$(document).ready(function(){
    var LOGO_FADE_MILLISECONDS = 500;
    $(".navbar").sticky({topSpacing:0});
    $(".navbar").on('sticky-start', function() {
      console.log("sticky: on");
      $('#logos').fadeIn(LOGO_FADE_MILLISECONDS);
    });
    $(".navbar").on('sticky-end', function() {
      console.log("sticky: off");
      $('#logos').fadeOut(LOGO_FADE_MILLISECONDS);
    });
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


/*********** BIG VIDEO **********/
$(function() {
  opts ={
    webm:'video.mov',
    scale:true,
    zIndex:0
  };
  var videoBG = $('.main_video').videoBG(opts);
});

/* ==============================================
Video Lightboxes
=============================================== */

$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {},
      overlay: {
        locked: false
      }
		}
	});
});
