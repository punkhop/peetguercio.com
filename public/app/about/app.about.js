var app = app || {};

app.about = (function(){
    "use strict";

    var _isInitialized = false,
        init = function(){
            var defer = $.Deferred();
            if(!_isInitialized){        
                _isInitialized = true;        
            }

            defer.resolve();

            /*$(window).scroll(function () {
                if ($(window).scrollTop() > 250) {
                    $('#aboutPeet').removeClass('blurs');
                } else {
                    $('#aboutPeet').addClass('blurs');
                }
            });*/        
            return defer.promise();
        };

    return{
        init: init
    };
}());