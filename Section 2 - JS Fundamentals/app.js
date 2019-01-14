// console.table({a: 1, b: 2});
// console.error("This is some error");
// console.clear();
// console.warn("This is a warning");

// console.time("Hello");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.timeEnd("Hello");

//var, let, const
//letters, numvers, _, $
//Cannot start with number

//Have to assin value to const, cannot do const name;









//PRIMITIVES

// const name = "John Doe";
// console.log(typeof name);

// const age = 45;
// console.log(typeof age);

// const hasKids = true;
// console.log(typeof hasKids);

// //Bug
// const car = null;
// console.log(typeof car);

// let test = undefined;
// console.log(typeof test);

// const sym = Symbol();
// console.log(typeof sym);









//REFERENCE TYPES - Objects

// const hobbies = ["movies", "music"];
// console.log(typeof hobbies);

// const address = {
// 	city: "Boston",
// 	state: "MA"
// }
// console.log(typeof address);

// const today = new Date();
// console.log(today);
// console.log(typeof today);










// TYPE CONVERSION

// let val;

// Number to String;

// val = 5;
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = String(5);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = String(4 + 4);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

//Boolean to strin
// val = String(true);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

//Date to str
// val = String(new Date());
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

//Array to str
// val = String([1, 2, 3]);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

//toString();

// val = (5).toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = (true).toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// Strings to Numbers

// val = '5';
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = Number('5');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// val = Number(true);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// val = Number(false);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// val = Number(null);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// val = Number("hello");
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// val = Number([1, 2, 3]);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));


// val = Number(undefined);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));


//parseInt()

// val = parseInt("100.30");
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// val = parseFloat("100.30");
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));










// TYPE COERCION

// let val1 = 5;
// let val2 = 6;

// let sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);

// val1 = "5";
// val2 = 6;

// sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;











// MATH OBJECT

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.round(2.7);
// val = Math.ceil(2.3);
// val = Math.floor(2.9);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 3);
// val = Math.min(2, 33, 5, 1, 55, -3);
// val = Math.max(2, 33, 5, 1, 55, -3);
// val = Math.random();
// val = Math.random() * 20; //Won't be more than 10 [between 0 and 19]
// val = Math.floor(Math.random() * 20 + 1); //Between 0 and 20, without decimals

// console.log(val);











//STRINGS

// const firstName = 'Williams';
// const lastName = 'Johnson';
// const age = 36;
// const str = "Hello there my name is Dmytro";
// const tags = 'web design, web development, programming'

// let val;

// // Concat
// val = firstName + lastName;
// val = firstName + ' ' + lastName;

// //Append
// val = 'Brad ';
// val = val+'Traversy'; // val+='Traversy'

// val = "Hello, my name is " + firstName + " and I am " + age;

// //Escaping
// val = "That's awesome I can't wait";
// val = 'That\'s awesome I can\'t wait';

// //length
// val = firstName.length;

// //concat()
// val = firstName.concat(' ', lastName);

// //change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// //indexOf(); returns -1 if the inserted characted is not present in the string

// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt();
// val = firstName.charAt(0);

// //Get last character
// val = firstName.charAt(firstName.length - 1);

// //substring();
// val = firstName.substring(0, 4);

// //slice();
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// //split() - split a string into an array based on a separator
// val = str.split(' ');
// val = tags.split(',');

// //replace()
// val = str.replace('Dmytro', 'Jack');

// //includes()
// val = str.includes('Hello');

// console.log(val);










//TEMPLATE LITERALS

// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// Without template strings (es5)

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
// document.querySelector('body').innerHTML = html;


//with template strings

// function hello(){
// 	return "hello"
// }

// html = `
// 	<ul>
// 		<li>Name: ${name}</li>
// 		<li>Age: ${age}</li>
// 		<li>Job: ${job}</li>
// 		<li>City: ${city}</li>
// 		<li>${2+2}</li>
// 		<li>${hello()}</li>
// 		<li>${ age > 30 ? 'Over 30' : 'Under 30' }</li>
// 	</ul>
// `;

// document.querySelector('body').innerHTML = html;











//ARRAYS

//Create some arrays

// const numbers = [1, 4, 56, 12, 67, 5, 123];
// const numbers2 = new Array(22, 5, 56, 1, 9);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [23, 'Hello', true, undefined, null, {a: 1, b:1}, new Date(), [1,2]];
// // console.log(mixed);

// let val;

// //Get length
// val = numbers.length;

// //Check if is array
// val = Array.isArray(numbers);

// //Get single value
// val = numbers[3];

// //Find idex of value
// val = numbers.indexOf(67);

// //Add on to end
// numbers.push(5700);

// //Add on to front
// numbers.unshift(899);

// //Take from the back
// numbers.pop();

// //Take off from the front
// numbers.shift();

// // Splice values;
// numbers.splice(2, 1);
// numbers.splice(2, 0, 5, 4, 1);

// //Reverse array
// numbers.reverse();

// //Concat arrays
// val = numbers.concat(numbers2);

// //Sort arrays
// val = fruit.sort();
// val = numbers.sort();

// //Use the compare func
// val = numbers.sort(function(x, y){
// 	return x - y;
// })

// //Reverse sort
// val = numbers.sort(function(x, y){
// 	return y - x;
// })

// //Find
// function under50(num) {
// 	return num < 50;
// }

// val = numbers.find(under50); //returns only first number under 50

// console.log(numbers);
// console.log(val);









//Object literals

// const person = {
// 	firstName: 'Steve',
// 	lastName: 'Smith',
// 	age: 30,
// 	email: 'steve@aol.com',
// 	hobbies: ['music', 'sports'],
// 	address: {
// 		city: 'Miami',
// 		state: 'Florida'
// 	},
// 	getBirthYear: function(){
// 		return 2017 - this.age;
// 	}
// }

// let val;

// val = person.getBirthYear()
// console.log(val);

// const people = [
// 	{name: 'John', age: 30},
// 	{name: 'Mike', age: 23}
// ]










//DATE AND TIME
// let val;

// const today = new Date();
// let birthDay = new Date('9-10-1981 11:12:01');
// birthDay = new Date('September 10 1981 11:12:01');
// birthDay = new Date('9/10/1981');


// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthDay.setMonth(1);
// birthDay.setDate(28);
// birthDay.setFullYear(1995);
// birthDay.setHours(3);
// birthDay.setMinutes(30);
// birthDay.setSeconds(23);

// console.log(birthDay);










//CONDITIONALS
// const id = 100;

//how to correctly check if the variable is defined or not

// if (typeof id !== 'undefined') {
// 	console.log(`The ID is ${id}`);
// } else {
// 	console.log('NO ID');
// }

// console.log(id === 100 ? 'Correct' : 'Incorrect');











//SWITCH
// const color = 'blue';

// switch (color) {
// 	case 'red':
// 		console.log('Color is red');
// 		break;
// 	case 'blue': 
// 		console.log('Color is blue');
// 		break;
// 	default: 
// 		console.log('Color is not red or blue');
// 		break;		
// }

// let day;

// switch(new Date().getDay()) {
// 	case 0:
// 		day = 'Sunday';
// 		break;
// 	case 1:
// 		day = 'Monday';
// 		break;	
// 	case 2:
// 		day = 'Tuesday';
// 		break;	
// 	case 3:
// 		day = 'Wednesday';
// 		break;	
// 	case 4:
// 		day = 'Thursday';
// 		break;	
// 	case 5:
// 		day = 'Friday';
// 		break;	
// 	case 6:
// 		day = 'Saturday';
// 		break;								
// }

// console.log(day);








//FUNCTIONS

//Default parameters ES5 way
// function greet(firstName, lastName) {
// 	if (typeof firstName === 'undefined') {firstName = 'John'}
// 	if (typeof lastName === 'undefined') {lastName = 'Doe'}	
// 		return 'Hello ' + firstName + ' ' + lastName; 
// }

// console.log(greet());

// //Default parameters ES6 way

// function greet2(firstName = 'John', lastName = 'Doe') {
// 		return 'Hello ' + firstName + ' ' + lastName; 
// }

// console.log(greet2('Di', 'Ma'));









//WINDOW OBJECT


// window.alert('Hello');

// const input = prompt('Your name: ');
// alert(input);

// if(confirm('Are yo sure')) {
// 	console.log('Yes')
// } else {
// 	console.log('No');

// }


// let val;

// // Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;


// // Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;


// //Scroll points
// val = window.scrollY;
// val = window.scrollX;


//Location Object

// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;


//Redirect
// window.location.href = 'http://google.com';


//Reload
// window.location.reload();


// History Object
// window.history.go(-2);
// val = window.history.length;


//Navigator object
// val = window.navigator;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;


// console.log(val);
