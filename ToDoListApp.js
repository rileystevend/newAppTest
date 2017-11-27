var toDo = {
  toDoList: [],
  displayToDoList: function () {
    if (this.toDoList.length === 0) {
      console.log('Your To-Do List is empty!');
    } else {
      console.log('My To-dos:');
    for (var i = 0; i <= this.toDoList.length-1; i++) {
      if (this.toDoList[i].completed === true) {
        console.log('(x)'this.toDoList[i].item);
      } else {
        console.log('( )'this.toDoList[i].item);
      }
    }
    }
  },
  addToDoList: function (itemName) {
    this.toDoList.push({
      item: itemName,
      completed: false
    })
  },
  changeToDoList: function (),
  deleteToDoList: function (index) {
    this.toDoList.splice(index, 1)
  },
  toggleCompleted: function(index){
    var todo = this.toDoList[index];
    toDoList.completed = !todo.completed;
    this.displayToDoList();
  },
  toggleAll: function() {
    var totalTodos = this.ToDoList.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.ToDoList[i].completed === true){
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.toDoList[i].completed = false;
      }
    }
  }
}
