var app = (function ($) {
    "use strict";

    var setBlur = function(name, from, to, length){        
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
        init = function(){
            if(!_isInitialized){        
                _isInitialized = true;                

                var bodyTag = $("body");
                /*bodyTag.fadeIntoView({
                    "applyBlur": true,
                    "hiddenOpacity": 0.6
                });*/

                $('.fullpage').fullpage({
                    scrollOverflow:true, 
                    //easing: "easeOutExpo",                    
                    navigation: true,
                    navigationPosition: 'right',
                    navigationTooltips: ['home', 'about','videos','live shows','contact'],
                    anchors: ['home', 'about', 'videos', 'shows', 'contact'],                     
                    //responsiveWidth:600,  
                    scrollingSpeed:1500,                  
                    menu: '#guercioMenu',
                    recordHistory:false,
                    slidesNavigation: false,
                    afterRender: function () {

                        /*$('.carousel').carousel({
                            interval: 5000                           
                        });*/
                        var dir = 'r';
                        setInterval(function () {
                            if($('.fp-section.active .fp-slide.active').index()===$('.fp-section.active .fp-slide').length-1){
                                dir = 'l';
                            }
                            else if ($('.fp-section.active .fp-slide.active').index()===0){
                                dir = 'r';
                            }

                            if(dir === 'l'){
                                $.fn.fullpage.moveSlideLeft();    
                            }
                            else{
                                $.fn.fullpage.moveSlideRight();
                            }
                        }, 5000);
                    },
                    onLeave (index, nextIndex, direction){
                        // if about
                        if(nextIndex===2){
                            //bodyTag.fadeIntoView("fadeIn", {item: 2-1});                                                   
                            // want to fade in after the switch
                            setTimeout(function(){
                                $('#peetAbout').stop(true,true).removeClass('blurs',1000);      
                                setBlur('#peetAbout',3,0,500);
                            },500);

                            //$('#aboutPeet').removeClass("fade-out-blur").addClass("fade-in-blur");     
                        }
                        else{
                            //bodyTag.fadeIntoView("fadeOut", {item: 2-1});
                            //$('#aboutPeet').removeClass("fade-in-blur").addClass("fade-out-blur");
                            $('#peetAbout').stop(true,true).addClass('blurs',1000);      
                            setBlur('#peetAbout',3,0,500);

                        }
                    }
                });  

                //$( "#.logo" ).effect( "size", {to:{width:'auto',height:'auto'}}, 500, function(){} );)
                $('.logo.preLoad').removeClass('large',function(){                    
                    $(window).load(function () {
                        $('.logo.preLoad').removeClass('animatable');
                        setTimeout(function(){
                            $("div.se-pre-con").fadeOut("fast");     
                            // only do snazzy animation if you are on the home page
                            if($('.fp-section.active').index()===0){
                                $('.logo').animate({bottom:'35px'},1250,'easeInOutExpo',function(){
                                    $('.logo.postLoad').removeClass('hide');
                                    $('.logo.preLoad').hide();   

                                });
                            }
                            else{
                                $('.logo.postLoad').removeClass('hide');
                                $('.logo.preLoad').hide();  
                            }
                            
                            $('body').removeClass('body-preload');
                            
                            //$('.logo').css({'top': 'auto', 'bottom': '35px'});

                        },1000);
                    });
                });
                // set initial blur
                setBlur('#peetAbout',0,3,0);

                app.about.init();
                app.contacts.init();
                app.shows.init().done(function(){

                    $('.bigText').textfill({ maxFontPixels: 20 });

                    // a little bit of a "hack" to get this to catch
                    $(window).resize(function(){
                        //$('.bigText').css('width', $('.bigText').width());
                        //$('.bigText').css('height', $('.bigText').height());

                        $('.bigText').textfill({ maxFontPixels: 20 });

                        //forcing fullPage.js to recalculate dimensions.
                        //$.fn.fullpage.reBuild(); 
                    });
                });

            }
        };

    return {
        init:init
    };

}($));