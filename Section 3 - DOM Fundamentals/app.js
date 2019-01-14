//DOCUMENT OBJECT

// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.doctype;
// val = document.body;
// val = document.domain;
// val = document.url;
// val = document.characterSet;
// val = document.contentType;


// //Get elements without selectors - not recommended
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;

// val = document.scripts[2].getAttribute('src');


// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
// 	console.log(script.getAttribute('src'));
// })

// console.log(val);





 

// let listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// listItems = Array.from(listItems);
// listItems.reverse();
// console.log(listItems);


//document.getElementsByClassName() and documnent.getElementsByTagName() return
//HTMLCollection.
//document.querySelectorAll() returns a NodeList. It allows to do forEach
//without having to convert it to array




// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;


// // Get child nodes / returns NodeList
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;
// val = list.childNodes[1].nodeType;
// val = list.childNodes[3].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// //Get children element nodes / returns HTMLCOllection
// val = list.children;
// val = list.children[0];
// val = list.children[1].textContent = 'Hello';

// //Children of children
// val = list.children[3].children;
// val = list.children[3].children[0];

// //firstchild
// val = list.firstChild; // returns a Node
// val = list.firstElementChild;

// //Last child
// val = list.lastChild; // returns a Node
// val = list.lastElementChild;

// //Count
// val = list.childElementCount;




//parent 
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;


// //next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// //previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling; //will return null in this case, as we are dealing with the first li in the list, so there is no previous sibling


// console.log(val);






//REPLACE ELEMENT

// //Create an element
// const newHeding = document.createElement('h2')
// newHeding.textContent = 'I am the new Heading';
// newHeding.id = 'task-title';

// const oldHeading = document.getElementById('task-title');
// oldHeading.parentElement.replaceChild(newHeding, oldHeading);



// //REMOVE ELEMENT

// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// listItems[0].remove();

// list.removeChild(listItems[3]);


// //CLASSES & ATTR

// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;


// val = link.className;
// val = link.classList; //returns DOMTokenList;
// link.classList.add('test');
// val = link;
// link.classList.remove('test');
// val = link;



// val = link.getAttribute('href');
// val = link.setAttribute('href', 'https://google.com');
// val = link.hasAttribute('href');
// link.removeAttribute('href');

// val = link;

// console.log(val);







//EVENTS


// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {

// 	e.preventDefault();
// 	let val;

// 	val = e.type;
// 	val = e.target;
// 	val = e.target.classList;

// 	e.target.innerText = 'Hello';

// 	val = e.timeStamp;

// 	//Coords relative to the window
// 	val = e.clientX;
// 	val = e.clientY;

// 	//Coords relative to the element
// 	val = e.offsetX;
// 	val = e.offsetY;

// 	console.log(val);

// }



// document.querySelector('.card').addEventListener('mousemove', function(e){
// 	document.querySelector('body').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`; 
// })


// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// form.addEventListener('submit', runEvent);

// //Clear input
// taskInput.value = '';

// taskInput.addEventListener('keydown', runEvent);

// taskInput.addEventListener('keyup', runEvent);

// taskInput.addEventListener('keypress', runEvent);

// taskInput.addEventListener('focus', runEvent);

// taskInput.addEventListener('blur', runEvent);

// taskInput.addEventListener('cut', runEvent);

// taskInput.addEventListener('copy', runEvent);

// taskInput.addEventListener('paste', runEvent);



// // taskInput.addEventListener('input', runEvent); //anything we do with the input



// function runEvent(e) {
// 	// e.preventDefault();
// 	console.log(`EVENT TYPE: ${e.type}`);
// 	console.log(e.target.value);
// 	// heading.textContent = e.target.value;

// 	//Get input value
// 	// console.log(taskInput.value);
// }



//Bubbling

// document.querySelector('.card-title').addEventListener('click', function(){
// 	console.log('card title')
// });

// document.querySelector('.card-content').addEventListener('click', function(){
// 	console.log('card content')
// });

// document.querySelector('.card').addEventListener('click', function(){
// 	console.log('card')
// });


// document.querySelector('.col').addEventListener('click', function(){
// 	console.log('col')
// });



//Delegation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// function deleteItem(e) {
// 	e.preventDefault();

// 	if (e.target.parentElement.classList.contains('delete-item')) {
// 		e.target.parentElement.parentElement.remove();
// 	}
// }

// document.body.addEventListener('click', deleteItem)







//STORAGE

//set local storage item

// localStorage.setItem('name', 'Dimas');
// sessionStorage.setItem('name', 'James');

console.log('hi')