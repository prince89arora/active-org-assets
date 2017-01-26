var $ = require('jquery');

/**
 * Custom jQuery functions to support dashboard.
 */
var custom = {

	init : function() {
		this.setSidebarHeight();	
	},

	setSidebarHeight : function() {
		$('#sidebar-wrapper').css('height', $(window).height());
	}

};

//Initializing on page load
$(document).ready(function () {
	console.log("jQuery loaded..");
	custom.init();
});