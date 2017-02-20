var app = app || {};

app.contacts = (function($){
    "use strict";

    var _isInitialized = false,
        _previousSelection = $('.bcrumbs li .social'),
        init = function(){
            if(!_isInitialized){        
                _isInitialized = true;

                var slidePreviousSelection = function(show){
                    if(show){
                        $(_previousSelection.attr('data-target')).stop().show("slide",{ direction: "down" },500);
                    }
                    else{
                        $(_previousSelection.attr('data-target')).stop().hide("slide",{ direction: "up" },500);
                    }
                };

                var selectItem = function(){                    
                    $(this).addClass('active');
                    var self = $(this);
                    if(!_previousSelection || _previousSelection.attr('data-target') !== self.attr('data-target')){
                        if(_previousSelection){
                            _previousSelection.removeClass('active');    
                            slidePreviousSelection(false);
                        }

                        _previousSelection = self;

                        setTimeout(function(){
                            slidePreviousSelection(true);
                        },750);

                    }
                };

                $('.bcrumbs li .area').click(selectItem);                
            }

        };

    return{
        init: init
    };

}($));