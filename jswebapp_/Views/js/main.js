require.config({

	paths:{
		'jquery': 'libs/jquery-1.10.2.min',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap'
	},

	shim: {
		'underscore':{
			exports: '_'
		},
		'backbone':{
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap':{
			dep: [
				'jquery'
			]
		}
	}

});


require([
	'backbone',
	'app/app'
], function(Backbone, App){
	'use strict';

	App.initialize();
	console.log(App);
});
