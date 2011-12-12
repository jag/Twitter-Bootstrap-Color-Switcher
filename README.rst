Twitter Bootstrap Color Switcher
================================

This litte script adds a simple color switch to the standard navigation bar (topbar) twitter bootstrap provides. 

The color switcher can be useful if you are in the process of deciding witch main color scheme to choose for your web project.


How to use it?
--------------
* Get twitter bootstrap (http://twitter.github.com/bootstrap/) with the dropdown JavaScript (http://twitter.github.com/bootstrap/javascript.html#dropdown)
* This color switcher also uses jQuery (http://jquery.com/)
* Add the bootstrap-color-switcher.js file to your web project and reference it in your html file(s)
* In your navigation bar add the following menu item to get the switcher::

	<ul class="dropdown-menu bootstrap-color-switcher">
			<li>
				<a href="#" data-color-switcher="black">black</a>
			</li>
			<li>
				<a href="#" data-color-switcher="white">white</a>
			</li>
			<li>
				<a href="#" data-color-switcher="blue">blue</a>
			</li>
			<li>
				<a href="#" data-color-switcher="green">green</a>
			</li>
			<li>
				<a href="#" data-color-switcher="red">red</a>
			</li>
			<li>
				<a href="#" data-color-switcher="purple">purple</a>
			</li>
			<li>
				<a href="#" data-color-switcher="grey">grey</a>
			</li>
			<li>
				<a href="#" data-color-switcher="orange">orange</a>
			</li>
		</ul>
		
* Important is to add the "bootstrap-color-switcher" class to the <ul>. The links with the <ul> use the "data-color-switcher" attribute to map the color patterns you specify. Read about the color patterns in the next paragraph
* You don't have to use the color switcher in the topbar. But it works quite nicely. Check the index.html example to see how it works.

* To initialize the script paste the following code into the jQuery $(document).ready function::


	$(document).ready(function() {
								
		//initialize the color switcher
		twitterBootstrapColorSwitcher.init();

	});

 
The color switcher comes with common build in color patterns. You can add your own color patterns by passing them to the init method. Like so::

	$(document).ready(function() {
				
				//your custom patterns
				var customColorPatterns = {
					"black" : ["#111", "black"],
					"white" : ["#eee", "white"],
					"blue" : ["#336699", "blue"],
					"green" : ["green", "green"],
					"red" : ["red", "red"],
					"purple" : ["#3F1D3B", "#420D3C"],
					"grey" : ["#888", "#666"],
					"orange" : ["#EF5826", "#ED400B"]
				};
				*/
				
				//initialize the color switcher
				twitterBootstrapColorSwitcher.init(customColorPatterns);

			});



Todos
-----
* Change the text color of the topbar depending on light and dark background colors
* Add text fieds or color switchers to enable entering custom color schemes without adding them programatically