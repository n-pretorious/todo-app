const express = require('express');
const path = require('path');
const routes = require('./routes/index');


const app = express();
const PORT = 3000;

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//check .routes/index.js to get a list of all routes
app.use('/', routes);  

// let todoList = {
// 	todos: [],
// 	// add a todo property
// 	addTodo: function (todoText) {
// 		this.todos.push({
// 		todoText: todoText,
// 		completed: false
// 		});
// 	},
// 	// change an existing todo property
// 	changeTodo: function (position, todoText) {
// 		this.todos[position].todoText = todoText;
// 	},
// 	// delete a todo property
// 	deleteTodo: function (position) {
// 		this.todos.splice(position, 1);
// 	},
// 	// "!" current boolean property
// 	toggleCompleted: function (position) {
// 		let todo = this.todos[position];
// 		todo.completed = !todo.completed;
// 	},
// 	// make every todo either true or false
// 	toggleAll: function (  ) {
// 		let totalTodos = this.todos.length;
// 		let completedTodos = 0;

// 		for (let i = 0; i < totalTodos; i++) {
// 			if (this.todos[i].completed === true) {
// 			completedTodos++;
// 			}                  
// 		}  
// 		// case 1: if everything is true, make everything false
// 		if (completedTodos === totalTodos){
// 			for (let i = 0; i < totalTodos; i++) {
// 				this.todos[i].completed = false;
// 			}
// 		// case 2: otherwise, make everything true
// 		}else{
// 			for (let i = 0; i < totalTodos; i++) {
// 				this.todos[i].completed = true;
// 			}
// 		}
// 	}
// };

// let handlers = {
// 	displayTodos: function () {
// 		todoList.displayTodos();
// 	},
// 	addTodo: function () {
// 		let addTodoTextInput = document.getElementById('addTodoTextInput')
// 		todoList.addTodo(addTodoTextInput.value);
// 		addTodoTextInput.value = '';
// 		view.displayTodos();
// 	},
// 	changeTodo: function (){
// 		let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
// 		let changeTodoTextInput = document.getElementById('changeTodoTextInput');
// 		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
// 		changeTodoPositionInput.value = '';
// 		changeTodoTextInput.value = '';
// 		view.displayTodos();
// 	},
// 	deleteTodo: function () {
// 		let deleteTodoPositionInput = document.getElementById('deleteTodoPosition');
// 		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
// 		deleteTodoPositionInput = '';
// 		view.displayTodos();
// 	},
// 	toggleCompleted: function () {
// 		let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
// 		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
// 		toggleCompletedPositionInput.value = '';
// 		view.displayTodos();
// 	},
// 	toggleAll: function () {
// 		todoList.toggleAll();
// 		view.displayTodos();
// 	}
// };

// let view = {
// 	displayTodos: function () {
// 		todoList.todos.forEach(todo => {
// 			let todoTextWithCompletion = '';

// 			if (todo.completed === true) {
// 				todoTextWithCompletion = '(x) ' + todo.todoText;
// 				console.log(todoTextWithCompletion);
				
// 			} else {
// 				todoTextWithCompletion = '( ) ' + todo.todoText
// 				console.log(todoTextWithCompletion);
				
// 			}
			
// 		});
// 	}
// };

// todoList.addTodo('first');
// view.displayTodos();

// // // todoList.displayTodos();
// // view.addTodo('third');
// // todoList.toggleCompleted(0);
// // todoList.toggleCompleted(1);
// // todoList.toggleAll();


app.listen(PORT, function () {
	console.log('listening to port: ', PORT);
});