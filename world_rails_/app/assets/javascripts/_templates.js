
	//Collection - Array of Entities
	var Countrys = Backbone.Collection.extend({
		url: 'http://localhost:8000/Country/getAllCountrys'
	});

	//View
	var CountryList = Backbone.View.extend({
		el: '.page',
		render: function(){
			var that = this;
			var countrys = new Countrys();
			countrys.fetch({
				success: function(countrys){
					alert(countrys);
					var template = _.template($('#country-list-template').html(), {countrys: countrys.models});
					that.$el.html(template);
				}
			});
		}
	});




	// Routes
	var Router = Backbone.Router.extend({
		routes: {
			'/': 'home'
			// 'new': 'editUser',
			// 'edit/:id': 'editUser' 

		}
	});

	//Views
	var countryList = new CountryList();
	//var editUser = new EditUser();

	//Routes
	var router = new Router();
	
	//Events
	router.on('route:home', function(){
		countryList.render();
	});



	Backbone.history.start();








