//Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners

loadEventListeners();

function loadEventListeners() {

	//DOM Load Event
	document.addEventListener('DOMContentLoaded', getTasks);

	//Add task event
	form.addEventListener('submit', addTask);

	//Remove task event
	taskList.addEventListener('click', removeTask);

	//Clear task event
	clearBtn.addEventListener('click', clearTasks);

	//Filter tasks event
	filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS

function getTasks() {
	let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function(task){
		//Create li element
		const li = document.createElement('li');
		//Add class
		li.classList.add('collection-item');

		//Create textNode and append to the li
		li.appendChild(document.createTextNode(task));

		//Create new link element
		const link = document.createElement('a');

		//Add the classes
		link.classList.add('delete-item');
		link.classList.add('secondary-content');

		//Add icon
		link.innerHTML = '<i class="fa fa-remove"></i>';

		//Append the link to the li
		li.appendChild(link);

		//Append the li to the ul
		taskList.appendChild(li);
	});
}

//Add task
function addTask(e) {
	e.preventDefault();

	if(taskInput.value === '') {
		alert('Add a task');
	}

	//Create li element
	const li = document.createElement('li');
	//Add class
	li.classList.add('collection-item');

	//Create textNode and append to the li
	li.appendChild(document.createTextNode(taskInput.value));

	//Create new link element
	const link = document.createElement('a');

	//Add the classes
	link.classList.add('delete-item');
	link.classList.add('secondary-content');

	//Add icon
	link.innerHTML = '<i class="fa fa-remove"></i>';

	//Append the link to the li
	li.appendChild(link);

	//Append the li to the ul
	taskList.appendChild(li);

	//Store in local storage
	storeTaskInLocalStorage(taskInput.value);

	//Clear value;
	taskInput.value='';
}

function storeTaskInLocalStorage(task) {
	let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}


//Remove Task
function removeTask(e) {
	if(e.target.parentElement.classList.contains('delete-item')) {
		if(confirm('Are You Sure?')) {
			//Remove from the DOM
			e.target.parentElement.parentElement.remove();

			//Remove from the LS
			removeTaskFromLocalStorage(e.target.parentElement.parentElement);
		}
	}
}

function removeTaskFromLocalStorage(taskItem) {
	let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function(task, index){
		if(taskItem.textContent === task) {
			tasks.splice(index, 1);
		}
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks

function clearTasks(e) {
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}

	//clear from LS
	localStorage.clear();
}

//Filter Tasks

function filterTasks(e) {
	const text = e.target.value.toLowerCase();

	document.querySelectorAll('.collection-item').forEach(function(task){
		const item = task.textContent;

		if(item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}
