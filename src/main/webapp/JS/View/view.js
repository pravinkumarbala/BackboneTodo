var TodoView = Backbone.View.extend({
	tagName: 'li',
	className: 'todos',
	events: {
		"click .todoTaskCompleted": "todoTaskEvent",
		"click .todoDelete": "deleteTaskEvent"
	},
	template: _.template($(taskTemplate).html()),
	initialize: function(){
		//this.listenTo(this.model, 'change', this.render);
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	todoTaskEvent: function(){
		if (this.model.get("isCompleted")) {
			this.$el.removeClass("taskCompleted");
			this.model.set({isCompleted: false});
		} else {
			this.$el.addClass("taskCompleted");
			this.model.set({isCompleted: true});
		}
	},
	deleteTaskEvent: function(){
		this.$el.remove();
	}
});