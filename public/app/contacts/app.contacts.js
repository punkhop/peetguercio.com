var app = app || {};

app.contacts = (function($){
    "use strict";

    var _isInitialized = false,
        _previousSelection = $('.bcrumbs li .social'),
        init = function(){
            var defer = $.Deferred();
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

                // Extended disable function
                jQuery.fn.extend({
                    disable: function(state) {
                        return this.each(function() {
                            var $this = $(this);
                            if($this.is('input, button, textarea, select'))
                                this.disabled = state;
                            else
                                $this.toggleClass('disabled', state);
                        });
                    }
                });

                // Disabled on all:

                $('.form-newsletter').submit(function(){
                    if(!$(this).find(':invalid').length){
                        //var response = grecaptcha.getResponse();

                        //if(response.length)
                        //{
                        $(this).find('submit').disable(true);
                        $('.form-newsletter').slideUp('fast',function(){
                            $('.panel-newsletter-success').removeClass('hide').slideDown('fast');
                        });
                        return true;
                        //}
                    }
                    return false;
                });
                defer.resolve();
            }
            else{
                defer.resolve();
            }
            return defer.promise();
        };

    return{
        init: init
    };

}($));