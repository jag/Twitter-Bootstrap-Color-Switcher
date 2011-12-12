var twitterBootstrapColorSwitcher = function () {

    // private property presetColorMap
	var presetColorMap = {
			"black" : ["#111", "black"],
			"white" : ["#eee", "white"],
			"blue" : ["#336699", "blue"],
			"green" : ["green", "green"],
			"red" : ["red", "red"],
			"purple" : ["#3F1D3B", "#420D3C"],
			"grey" : ["#888", "#666"],
			"orange" : ["#EF5826", "#ED400B"]
		};
		

    // private method setColor()
    function setColor(color, customColorMap) {
    	//Check if there has a custom color map been set
    	var colorMap = customColorMap;
    	if(colorMap === undefined){
    		colorMap = setColorMap(presetColorMap);
    	}else{
    		colorMap = setColorMap(customColorMap);
    	}

    	try{
		var colorTop = colorMap[color][0];
		var colorBottom = colorMap[color][1];
		
		//CSS Object to hold the color values to change the topbar color
		var cssObj = {
			'background-color' : colorTop,
			'background-image' : ['-webkit-linear-gradient(top,'+colorTop+','+colorBottom+')', 
									'linear-gradient(top,'+colorTop+','+colorBottom+')', 
									'-moz-linear-gradient(top,'+colorTop+','+colorBottom+')',
									'-khtml-gradient(linear, left top, left bottom, from('+colorTop+'), to('+colorBottom+'))',
									'-ms-linear-gradient(top, '+colorTop+', '+colorBottom+')',
									'-o-linear-gradient(top, '+colorTop+', '+colorBottom+')'
									]
		};
		$(".topbar .fill").cssMap(cssObj);
		$(".topbar-inner").cssMap(cssObj);
    	}catch(error){
    		alert("Ups! The color: \"" + color + "\" you defined in your " +
    				"\"data-color-switcher\" attribute doesn't match any of the color patterns we or you specified. " +
    				"Add the color: \"" + color + "\" to your customColorMap or use one of the patterns.");
    	}
	}
    
    function setColorMap(map) {
		return map;
	}

	(function($) {
			$.fn.cssMap = function(map) {
				var $element = this;
				$.each(map, function(property, value) {
					if( value instanceof Array) {
						for(var i = 0, len = value.length; i < len; i++) {
							$element.css(property, value[i]);
						}
					} else {
						$element.css(property, value);
					}
				});
			}
		})(jQuery);

    return {

        // public method
        init: function (customColors) {
            var self = this; // assign reference to current object to "self"

            $('.bootstrap-color-switcher a').click(function() {

				setColor($(this).attr('data-color-switcher'), customColors);

			});
        }
    };
}();