App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about');
	this.resource('posts', function(){
		this.resource('post', { path: ':post_id'});
	});
	
});


App.PostsRoute = Ember.Route.extend({
	model: function(){
		//return posts;
		return $.getJSON('http://tomdale.net/api/get_recent_posts/?callback=?').then(function(data){
			return data.posts.map(function(post){
				post.body = post.content;
				return post;
			});
		});
	}	
});

App.PostRoute = Ember.Route.extend({
	model: function(params){
		//return posts.findBy('id', params.post_id);
		return $.getJSON('http://tomdale.net/api/get_post/?id='+params.post_id+'&callback=?').then(function(data){
				data.post.body = data.post.content;
					return data.post;
		});
	}	
});

App.PostController = Ember.ObjectController.extend({
	
	isEditing: false,

	actions:{
		edit: function(){
			this.set('isEditing', true);
		},

		doneEditing: function(){
			this.set('isEditing', false);
		}
	}

});

// var posts = [{
// 	id: '1',
// 	title: 'Rails',
// 	author: {name: 'd2h'},
// 	excerpt: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
// 	body: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
// },{
// 	id: '2',
// 	title: 'Rails Again',
// 	author: {name: 'd2h'},
// 	excerpt: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
// 	body: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'	
// }];











