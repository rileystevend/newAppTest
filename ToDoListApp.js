var toDo = {
  toDoList: [],
  displayToDoList: function () {
    console.log('My To-dos', this.toDoList);
  },
  addToDoList: function (itemName) {
    this.toDoList.push({
      item: itemName,
      completed: false
    }),
  }
  changeToDoList: function (),
  deleteToDoList: function (index) {
    this.toDoList.splice(index, 1)
  },
  toggleCompleted: function(index){
    var todo = this.toDoList[index];
    toDoList.completed = !todo.completed;
    this.displayToDoList();
    }
}
