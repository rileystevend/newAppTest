var toDo = {
  toDoList: [],
  displayToDoList: function () {
    if (this.toDoList.length === 0) {
      console.log('Your To-Do List is empty!');
    } else {
      console.log('My To-do\'s:');
    for (var i = 0; i <= this.toDoList.length-1; i++) {
      if (this.toDoList[i].completed === true) {
        console.log('(x)' + this.toDoList[i].item);
      } else {
        console.log('( )' + this.toDoList[i].item);
      }
    }
    }
  },
  addToDoList: function (itemName) {
    this.toDoList.push({
      item: itemName,
      completed: false
    });
    this.displayToDoList();
  },
  changeToDoList: function (position, newTodoText){
    this.toDoList[position].item = newTodoText;
    this.displayToDoList();
  },
  deleteToDoList: function (index) {
    this.toDoList.splice(index, 1);
    this.displayToDoList();
  },
  toggleCompleted: function(index){
    var todo = this.toDoList[index];
    toDoList.completed = !todo.completed;
    this.displayToDoList();
  },
  toggleAll: function() {
    var totalTodos = this.toDoList.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.toDoList[i].completed === true){
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.toDoList[i].completed = false;
      } else {
        for (var i = 0; i < totalTodos; i++) {
          this.toDoList[i].completed = true;
        }
      } this.displayToDoList();
    }
  }
};

var displayTodosButton = document.getElementById('displayTodosButton');

displayTodosButton.addEventListener('click', function() {
  toDo.displayToDoList();
});

var toggleTodosButton = document.getElementById('toggleAllButton');

toggleAllButton.addEventListener('click', function() {
  toDo.toggleAll();
})
