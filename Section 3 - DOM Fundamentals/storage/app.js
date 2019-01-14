
//Set value
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// sessionStorage.setItem('name', 'Jake');

//Remove value
// localStorage.removeItem('name');

// get value
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// // // //clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
	e.preventDefault();
	const task = document.getElementById('task').value;

	let tasks;

	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));

	alert('Task saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
	console.log(task);
})