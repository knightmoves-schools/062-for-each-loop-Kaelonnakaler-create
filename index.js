function markAsDone(todos){
 let newTodos = [];

  todos.forEach(function(todo) {
  newTodos.push("done - " + todo);
  });

  return newTodos;
}
  
  








