(function ($, formatGoogleCalendar) {
    "use strict";

    $(document).ready(function () {


        formatGoogleCalendar.init({
            calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/g27.net_9ht2e4uhfh602mnen6psa6mun0@group.calendar.google.com/events?key=AIzaSyBgnhLwWs3CJfpYpBfoPsUGyoUsYzmLjEk',
            past: true,
            upcoming: true,
            sameDayTimes: false,
            pastTopN: 20,
            upcomingTopN: 6,
            itemsTagName: 'li',
            upcomingSelector: '.events-upcoming',
            //pastSelector: '#events-past',
            upcomingHeading: '<h2>Live Shows</h2>',
            //pastHeading: '<h2>Past events</h2>',
            format: ['*date*', '*summary*', '*description*', '*location*']
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 250) {
                $('#section2').removeClass('blurs');
            } else {
                $('#section2').addClass('blurs');
            }
        });
        /**********For Sticky / Fixed Navigation***************/

        // GDR 170201 - Comment out temporarily to fix formatting
        $(function () {


            $.scrollify({
                section: ".example-classname",
                standardScrollElements:".scrollable",
                scrollbars: false,
                scrollOverflow:true,
                before: function (i, panels) {
                    var ref = panels[i].attr("data-section-name");

                    $(".pagination2 .active").removeClass("active");

                    $(".pagination2").find("a[href=\"#" + ref + "\"]").addClass("active");
                },
                afterRender:  function () {
                    var pagination2 = "<ul class=\"pagination2\">",
                        activeClass = "";
                    $(".panel").each(function (i) {
                        activeClass = "";
                        if (i === 0) {
                            activeClass = "active";
                        }
                        pagination2 += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
                    });
                    pagination2 += "</ul>";
                    $(".home").append(pagination2);
                }
            });

        });


        $(function(){
            /*$.scrollify({
                section : ".cd-section",
                //sectionName : "home",
                //interstitialSection : "",
                easing: "easeOutExpo",
                scrollSpeed: 2000
            });*/

            $(".pagination2 a").on("click", $.scrollify.move);
            $(".scroll,.scroll-btn").click(function (e) {
                e.preventDefault();
                $.scrollify.next();
            });
        });

        /******************COntact Sections Code Here******************/

        $('.bcrumbs li:nth-child(1)').click(function () {
            $(this).addClass('active');
            $('.bcrumbs li:nth-child(3)').removeClass('active');
            $('.bcrumbs li:nth-child(5)').removeClass('active');
            $('.sc-sec').show();
            $('.rep-sec').hide();
            $('.contact-sec').hide();
        });
        $('.bcrumbs li:nth-child(3)').click(function () {
            $(this).addClass('active');
            $('.bcrumbs li:nth-child(1)').removeClass('active');
            $('.bcrumbs li:nth-child(5)').removeClass('active');
            $('.sc-sec').hide();
            $('.rep-sec').show();
            $('.contact-sec').hide();
        });
        $('.bcrumbs li:nth-child(5)').click(function () {
            $(this).addClass('active');
            $('.bcrumbs li:nth-child(1)').removeClass('active');
            $('.bcrumbs li:nth-child(3)').removeClass('active');
            $('.sc-sec').hide();
            $('.rep-sec').hide();
            $('.contact-sec').show();
        });
        /***************For Video Section on Top***************/

        /*
            GDR 170201 - comment out this document.ready
            $( document ).ready(function() {

                // Resive video
                scaleVideoContainer();

                initBannerVideoSize('.video-container .poster img');
                initBannerVideoSize('.video-container .filter');
                initBannerVideoSize('.video-container video');

                $(window).on('resize', function() {
                    scaleVideoContainer();
                    scaleBannerVideoSize('.video-container .poster img');
                    scaleBannerVideoSize('.video-container .filter');
                    scaleBannerVideoSize('.video-container video');
                });

            });
            */

        $(window).load(function () {
            $(".se-pre-con").fadeOut("slow");
            $('.logo').addClass('wow');
            $('.logo').addClass('animated');
            $('.logo').addClass('slideInDown');
            $('.logo').css({'top': 'auto', 'bottom': '35px'});
        });

        var effects = document.querySelectorAll('.effects')[0];
        /* GDR 170201 - Add if statement */
        if (effects) {
            effects.addEventListener('click', function (e) {
                if (e.target.className.indexOf('hvr') > -1) {
                    e.preventDefault();
                    e.target.blur();

                }
            });
        }

        $(function () {
            /*$('.carousel').carousel({
                cycle: true,
                pause: false
            });*/
        });
        //jQuery to collapse the navbar on scroll        
        /*
        GDR 170201 - Remove scroll functionality (old nav)
        $(window).scroll(function() {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });
        */

        /* GDR 170201 - Add if statements below */

        var vid = document.getElementById("bgvid"),
            pauseButton = document.getElementById("vidpause");

        function vidFade() {
            vid.classList.add("stopfade");
        }

        if (vid) {


            vid.addEventListener('ended', function () {
                // only functional if "loop" is removed 
                vid.pause();
                // to capture IE10
                vidFade();
            });
        }
        if (pauseButton) {
            pauseButton.addEventListener("click", function () {
                vid.classList.toggle("stopfade");
                if (vid.paused) {
                    vid.play();
                    pauseButton.innerHTML = "Pause";
                } else {
                    vid.pause();
                    pauseButton.innerHTML = "Paused";
                }
            });
        }

    });
}($, formatGoogleCalendar));