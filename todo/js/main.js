
//Model
var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem({
	description: 'Pick up milk',
	status: 'incomplete',
	id: 1
});


//View
var TodoView = Backbone.View.extend({
	render: function(){
		var html = '<h3>' + this.model.get('description') + '</h3>' + '<h3>' + this.model.get('status') + '</h3>';
		$(this.el).html(html);
	}
});

var todoView = new TodoView({
	model: todoItem
});

todoView.render();
console.log(todoView.el);