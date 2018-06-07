function addTask(){
	var todo = document.getElementById("todoText").value;
	if (todo != "") {
		var taskJSON = {
			taskName: todo,
			isCompleted: false
		};
		var taskModel = new TodoModel(taskJSON);
		var taskView = new TodoView({model: taskModel});
		document.getElementById("todoList").appendChild(taskView.el);
		document.getElementById("todoText").value = "";
	} else {
		alert("Please enter the task");
	}
}