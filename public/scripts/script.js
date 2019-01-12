let todoList = {
	todos: [],
	// add a todo property
	addTodo: function (todoText) {
		this.todos.push({
		todoText: todoText,
		completed: false
		});
	},
	// change an existing todo property
	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
	},
	// delete a todo property
	deleteTodo: function (position) {
		this.todos.splice(position, 1);
	},
	// "!" current boolean property
	toggleCompleted: function (position) {
		let todo = this.todos[position];
		todo.completed = !todo.completed;
	},
	// make every todo either true or false
	toggleAll: function (  ) {
		let totalTodos = this.todos.length;
		let completedTodos = 0;

		this.todos.forEach(todo => {
		if (todo.completed === true) {
			completedTodos++;
			} 			
		});
		 
		this.todos.forEach(todo => {
			// case 1: if everything is true, make everything false
			if (completedTodos === totalTodos){
				todo.completed = false;
			// case 2: otherwise, make everything true
			}else{
				todo.completed = true;
			}			
		});
	}
};

let handlers = {
	displayTodos: function () {
		todoList.displayTodos();
	},
	addTodo: function () {
		let addTodoTextInput = document.getElementById('addTodoTextInput')
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function (){
		let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		let changeTodoTextPosition = document.getElementById('changeTodoTextPosition');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextPosition.value);
		changeTodoPositionInput.value = '';
		changeTodoTextPosition.value = '';
		view.displayTodos();
	},
	deleteTodo: function (position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleCompleted: function () {
		let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	toggleAll: function () {
		todoList.toggleAll();
		view.displayTodos();
	}
};

let view = {
	displayTodos: function () {
		let todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';

		todoList.todos.forEach((todo, position) => {
			let todoLi = document.createElement('li');
			let todoTextWithCompletion = '';
			
			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
				console.log(todoTextWithCompletion);
				
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText
				console.log(todoTextWithCompletion);				
			}
			todoLi.id = position;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteBtn());
			todosUl.appendChild(todoLi);			
		}, this	);			

		

		
	},
	createDeleteBtn: function name(params) {
		let deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'Delete';
		deleteBtn.className = 'deleteBtn';
		return deleteBtn;
	},
	setUpEventListeners: function () {
		let todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function (event){
			// Get the element that was clicked on
			let elementClicked = event.target;

			// check if element clicked is a button
			if (elementClicked.className === 'deleteBtn') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();
