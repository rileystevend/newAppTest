var toDo = {
  toDoList: [],
  /*displayToDoList: function () {
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
  },*/
  addToDoList: function (itemName) {
    this.toDoList.push({
      item: itemName,
      completed: false
    });
  },
  changeToDoList: function (position, newTodoText){
    this.toDoList[position].item = newTodoText;
  },
  deleteToDoList: function (index) {
    this.toDoList.splice(index, 1);
  },
  toggleCompleted: function(index){
    var todo = this.toDoList[index];
    toDoList.completed = !todo.completed;
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
      for (var k = 0; k < totalTodos; k++) {
        this.toDoList[k].completed = false;
      }
      } else {
        for (var j = 0; j < totalTodos; j++) {
          this.toDoList[j].completed = true;
        }
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

var handlers = {
/*delete the "Display Todos"button too:
  displayTodos: function() {
    toDo.displayToDoList()
  },*/
  toggleAll: function() {
    toDo.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    toDo.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    toDo.changeTodo(changeTodoPositionInput.vauleAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    toDo.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    toDo.toggleCompleted(toggleCompletedPositionInput.vauleAsNumber);
    toggleCompletedPositionInput.vaule = '';
    view.displayTodos();
  }
};

var view ={
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todo.toDoList.length; i++) {
    var todoLi = document.createElement('li');
    var todo = todoList.todos[i];
    var todoTextWithCompletion = '';

    if (toDoList.completed === true) {
      todoTextWithCompletion = '(x) ' + toDoList.item;
    } else {
      todoTextWithCompletion = '( ) ' + toDoList.item;
    }

    todoLi.id = i;
    todoLi.textContent = todo.toDoList.length[i].item;
    todoLi.appendChild(this.createDeleteButton())
    todosUl.appendChild(todoLi);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
  }
  setUpEventListeners: function (){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function (event) {

    //get the element that was clicked on
      var elementClicked = event.target
    //check if elementClicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
    }
  }
});
}
view.setUpEventListeners();
