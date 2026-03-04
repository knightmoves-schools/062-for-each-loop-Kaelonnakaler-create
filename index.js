function markAsDone(todos){
 let newTodos = [];

  todos.ForEach(function(todo) {
  newTodos.push("done -" + todo);
]);

  return newTodos;
}
  
  






