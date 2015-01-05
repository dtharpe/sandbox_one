// //Model
// Person = Backbone.Model.extend({
// 	defaults: {
// 		name: 'Fetus',
// 		age: 0,
// 		child: ''
// 	},
// 	//Called on creation of object
// 	initialize: function(){
		
// 		alert('Weklcome');
		
// 		this.on('change:name', function(model){
// 			var name = model.get('name');
// 			alert('Changed ' + name);
// 		});
// 	}
// 	// adopt: function(newChild){
// 	// 	this.set({child: newChild});
// 	// }
// });

// // var person = new Person;
// // person.set({
// // 	name: 'Thomas',
// // 	age: 67,
// // 	child: 'Ryan'
// // });
// // console.log(person);

// // var age = person.get("age");
// // var name = person.get("name");
// // var child = person.get("child");

// // person.adopt('John');
// // var child = person.get('child');
// // console.log(child);

// var person = new Person({name:'Thomas'});
// person.set({
// 	name: 'Stewie Griffin'
// });



//Model -> Server
// var UserModel = Backbone.Model.extend({
// 	urlRoot: '/user',
// 	defaults: {
// 		name: '',
// 		email: ''
// 	}
// });

// var user = new UserModel();
// var userDetails={
// 	name: 'Thomas',
// 	email: 'tomas@email.com'
// };

// user.save(userDetails, {
// 	success: function(user){
// 		alert(user.toJSON())
// 	}
// });


//require//

require.config({
	paths:{
		jquery: 'libs/jquery/jquery',
	    underscore: 'libs/underscore/underscore',
	    backbone: 'libs/backbone/backbone'
	}
});

require(['app'], function(App){
	App.initialize();
});




