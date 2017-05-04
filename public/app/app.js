var app = (function ($, svg4everybody) {
    "use strict";

    var setBlur = function (name, from, to, length) {
        /*$({blurRadius: from}).animate({blurRadius: to}, {
            duration: length,
            easing: 'swing', // or "linear"
            // use jQuery UI or Easing plugin for more options
            step: function() {                                    
                $(name).css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
        */
    },
        _isInitialized = false,
        init = function () {
            if (!_isInitialized) {

                // disable scrolling
                function noscroll() {
                    window.scrollTo(0, 0);
                };
                window.addEventListener('scroll', noscroll);

                // instantiate svg4everybody
                svg4everybody();

                var support = { animations: Modernizr.cssanimations },
                    container = document.getElementById('page-top'),
                    loader = new PathLoader(document.getElementById('ip-loader-circle')),
                    animEndEventNames = { 'WebkitAnimation': 'webkitAnimationEnd', 'OAnimation': 'oAnimationEnd', 'msAnimation': 'MSAnimationEnd', 'animation': 'animationend' },
                    // animation end event name
                    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];



                function startLoading() {
                    // simulate loading something..
                    var load = function (instance) {
                        _isInitialized = true;

                        function secondLoad() {
                            instance.setProgress(50);

                            //fancybox.js init
                            $('.fancybox').fancybox({
                                openEffect: 'none',
                                closeEffect: 'none',
                                prevEffect: 'none',
                                nextEffect: 'none',

                                arrows: false,
                                helpers: {
                                    media: {},
                                    buttons: {}
                                }
                            });

                            instance.setProgress(60);

                            var bodyTag = $("body");

                            $('.fullpage').fullpage({
                                scrollOverflow: true,
                                //easing: "easeOutExpo",                    
                                navigation: true,
                                bigSectionsDestination: 'top',
                                navigationPosition: 'right',
                                navigationTooltips: ['home', 'about', 'videos', 'live shows', 'colleges', 'contact'],
                                anchors: ['home', 'about', 'videos', 'shows', 'colleges', 'contact'],
                                //responsiveWidth:600,  
                                scrollingSpeed: 1500,
                                menu: '#guercioMenu',
                                recordHistory: false,
                                slidesNavigation: false,
                                afterRender: function () {

                                    /*$('.carousel').carousel({
                                interval: 5000                           
                            });*/
                                    var dir = 'r';
                                    setInterval(function () {
                                        if ($('.fp-section.active .fp-slide.active').index() === $('.fp-section.active .fp-slide').length - 1) {
                                            dir = 'l';
                                        }
                                        else if ($('.fp-section.active .fp-slide.active').index() === 0) {
                                            dir = 'r';
                                        }

                                        if (dir === 'l') {
                                            $.fn.fullpage.moveSlideLeft();
                                        }
                                        else {
                                            $.fn.fullpage.moveSlideRight();
                                        }
                                    }, 5000);
                                },
                                onLeave(index, nextIndex, direction) {
                                    // if about
                                    if (nextIndex === 2) {
                                        //bodyTag.fadeIntoView("fadeIn", {item: 2-1});                                                   
                                        // want to fade in after the switch
                                        setTimeout(function () {
                                            $('#peetAbout').stop(true, true).removeClass('blurs', 1000);
                                            setBlur('#peetAbout', 3, 0, 500);
                                        }, 500);

                                        //$('#aboutPeet').removeClass("fade-out-blur").addClass("fade-in-blur");     
                                    }
                                    else {
                                        //bodyTag.fadeIntoView("fadeOut", {item: 2-1});
                                        //$('#aboutPeet').removeClass("fade-in-blur").addClass("fade-out-blur");
                                        $('#peetAbout').stop(true, true).addClass('blurs', 1000);
                                        setBlur('#peetAbout', 3, 0, 500);

                                    }
                                }
                            });

                            // lity specific stuff working with fullpage
                            $(document).on('lity:open', function (event, instance) {
                                $.fn.fullpage.setAllowScrolling(false);
                            });


                            $(document).on('lity:close', function (event, instance) {
                                $.fn.fullpage.setAllowScrolling(true);
                            });

                            instance.setProgress(20);

                            //$( "#.logo" ).effect( "size", {to:{width:'auto',height:'auto'}}, 500, function(){} );)

                            // set initial blur
                            setBlur('#peetAbout', 0, 3, 0);

                            app.about.init().done(function () {
                                instance.setProgress(70);
                                app.contacts.init().done(function () {
                                    instance.setProgress(80);
                                    app.shows.init().done(function () {
                                        instance.setProgress(90);
                                        $('.bigText').textfill({ maxFontPixels: 20 });

                                        // a little bit of a "hack" to get this to catch
                                        $(window).resize(function () {
                                            //$('.bigText').css('width', $('.bigText').width());
                                            //$('.bigText').css('height', $('.bigText').height());

                                            $('.bigText').textfill({ maxFontPixels: 20 });

                                            //forcing fullPage.js to recalculate dimensions.
                                            //$.fn.fullpage.reBuild(); 
                                        });

                                        instance.setProgress(95);
                                        $('.logo.preLoad').removeClass('animatable');
                                        setTimeout(function () {
                                            instance.setProgress(100);
                                            $("div.se-pre-con").fadeOut("fast");
                                            // only do snazzy animation if you are on the home page
                                            if ($('.fp-section.active').index() === 0) {
                                                $('.logo').animate({ bottom: '35px' }, 1250, 'easeInOutExpo', function () {
                                                    $('.logo.postLoad').removeClass('hide');
                                                    $('.logo.preLoad').hide();

                                                });
                                            }
                                            else {
                                                $('.logo.postLoad').removeClass('hide');
                                                $('.logo.preLoad').hide();
                                            }

                                            $('body').removeClass('body-preload');
                                            window.removeEventListener('scroll', noscroll);
                                            //$('.logo').css({'top': 'auto', 'bottom': '35px'});

                                        }, 1000);
                                    });
                                });
                            });
                        }

                        var iframes = $('iframe');
                        var iframesFinished = 0;
                        iframes.on('load', function () {
                            iframesFinished++;
                        })

                        function showprogress() {
                            if (document.images.length === 0) {
                                setTimeout(secondLoad, 2000)
                                return false;
                            }

                            var loaded = 0;
                            for (var i = 0; i < document.images.length; i++) {
                                if (document.images[i].complete) {
                                    loaded++;
                                }
                            }
                            var imagePercentage = Math.round(
                                100 * loaded / document.images.length);

                            //var framePercentage = Math.round(
                            //    100 * iframesFinished / iframes.length);

                            //instance.setProgress(imagePercentage / 2 + framePercentage / 2 * .5);
                            instance.setProgress(imagePercentage / 2 * .5);

                            if (imagePercentage === 100) {
                                $('body').addClass('body-loading');
                                $('.logo.preLoad').removeClass('large');
                            }

                            //if (imagePercentage / 2 + framePercentage / 2 === 100) {
                            if (imagePercentage === 100) {
                                setTimeout(secondLoad, 2000)
                            }
                            else {
                                window.setTimeout(showprogress, 100);
                            }
                        }

                        window.setTimeout(showprogress, 100);

                    };

                    loader.setProgressFn(load);
                };

                startLoading();
            }
        };

    return {
        init: init
    };

}($, svg4everybody));