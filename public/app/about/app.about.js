var app = app || {};

app.about = (function(){
    "use strict";

    var _isInitialized = false,
        init = function(){
            if(!_isInitialized){        
                _isInitialized = true;        
            }

            /*$(window).scroll(function () {
                if ($(window).scrollTop() > 250) {
                    $('#aboutPeet').removeClass('blurs');
                } else {
                    $('#aboutPeet').addClass('blurs');
                }
            });*/        
            
        };

    return{
        init: init
    };
}());