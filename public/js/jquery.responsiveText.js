/*
 *
 * jQuery.responsiveText
 * Version 0.0.1
 * @requires jQuery v1.7 >
 * 
 * Copyright (c) 2012 Karl Laurentius Roos
 * Example at: http://project.karlroos.se/jquery.responsivetext/
 * Licensed under the MIT licens:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
(function($){
	$.fn.responsiveText = function(options){
		var _this = this;
		var settings = $.extend({
			"max":	20,
			"min":	14,
			"step": 50
		}, options);
		
		$(window).resize(function(){
			var size = window.innerWidth / settings.step;
			
			if(size > settings.max){
				size = settings.max;
			}
			
			if(size < settings.min){
				size = settings.min;
			}
			
			$(_this).css("font-size", size + "px");
		}).trigger("resize");
	};
})(jQuery);