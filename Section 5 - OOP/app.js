//ObJECT LITERAL
// const brad = {
// 	name: 'Brad',
// 	age: 30
// }

// console.log(brad);











//CONSTRUCTOR FUNCTIONS

// function Person() {
// 	this.name = 'Brad';
// }

// const person = new Person();
// console.log(person);

// function Person(name, dob) {
// 	this.name = name;
// 	// this.age = age;
// 	this.birthday = new Date(dob);
// 	this.calculateAge = function(){
// 		const diff = Date.now() - this.birthday.getTime();
// 		const ageDate = new Date(diff);
// 		return Math.abs(ageDate.getUTCFullYear() - 1970);
// 	}
// }

// const john = new Person('John', 30);

// console.log(john);

// const brad = new Person('Brad', '9-10-1981');
// console.log(brad.calculateAge( ));









//BUILT-IN CONSTRUCTORS // NOT ADVISABLE - slows down execution, more code,
//confusing, issues with === operator


//Strings

// const name1 = 'Jeff';
// const name2 = new String('Jeff');
// name2.foo = 'bar';

// console.log(name1);
// console.log(name2);


//We have issues with === comparison operator, as name2 is an object
// console.log(typeof name1);
// console.log(typeof name2);

// if(name1 === 'Jeff'){
// 	console.log('Yes')
// } else {
// 	console.log('No');
// }



// if(name2 === 'Jeff'){
// 	console.log('Yes')
// } else {
// 	console.log('No'); // will console.log No, because type is not string
// }




// //Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2);
// console.log(typeof num2);


// //Boolean
// const boo1 = true;
// const boo2 = new Boolean(true);

// console.log(boo2);
// console.log(typeof boo2);


// //Functions
// const getSum1 = function(a, b) {
// 	return a + b;
// }
// console.log(getSum1(1, 2));

// const getSum2 = new Function('a, b', 'return a + b');
// console.log(getSum2(2, 2));


// //Objects
// const john1 = {
// 	name: 'John'
// };
// console.log(john1);

// const john2 = new Object({name: "John"})
// console.log(john2);


// //Array
// const arr1 = [1, 2, 3, 4];
// console.log(arr1);
// console.log(typeof arr1);

// const arr2 = new Array(1, 2, 3, 4);
// console.log(arr2);
// console.log(typeof arr2);



// //Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re1);
// console.log(re2);








//PROTOTYPES
//Object literals inherit from Object.prototype;
// Object that were created thourgh constructor, like Person()
//inherit from Person.prototype



// function Person(firstName, lastName, dob) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.birthday = new Date(dob);
// }

// //Calculate age
// Person.prototype.calculateAge = function(){

// 	const diff = Date.now() - this.birthday.getTime();
// 	const ageDate = new Date(diff);
// 	return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// //Get full name
// Person.prototype.getFullName = function(){
// 	return `${this.firstName} ${this.lastName}`;
// }

// //Get Married
// Person.prototype.getsMarried = function(newLastName){
// 	this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);

// console.log(mary.getFullName());
// console.log(mary.getsMarried('Doe'));
// console.log(mary.getFullName());







//PROTOTYPAL INHERITANCE

//Person constructor

// function Person(firstName, lastName){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// //Greeting
// Person.prototype.greeting = function() {
// 	return `Hello there,  ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');
// console.log(person1.greeting())



// //Customer constructor
// function Customer(firstName, lastName, phone, membership) {
// 	Person.call(this, firstName, lastName);
// 	this.phone = phone;
// 	this.membership;
// }

// //Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// //Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'standard');
// console.log(customer1);

// console.log(customer1.greeting());










//OBJECT.CREATE();

// const personPrototypes = {
// 	greeting: function() {
// 		return `Hello there ${this.firstName} ${this.lastName}`;
// 	},
// 	getsMarries: function(newLastName) {
// 		this.lastName = newLastName;
// 	}
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarries('Thomson');
// console.log(mary.greeting());


// const brad = Object.create(personPrototypes, {
// 	firstName: {value: 'Brad'},
// 	lastName: {value: 'Traversy'},
// 	age: {value: 36}
// });


// console.log(brad.greeting())







//ES6 OOP

// class Person {
// 	constructor(firstName, lastName, dob) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.birthday = new Date(dob);
// 	}

// 	greeting() {
// 		return `Hello there, ${this.firstName} ${this.lastName}`
// 	}

// 	calculateAge() {
// 		const diff = Date.now() - this.birthday.getTime();
// 		const ageDate = new Date(diff);
// 		return Math.abs(ageDate.getUTCFullYear() - 1970);
// 	}

// 	getsMarried(newLastName) {
// 		this.lastName = newLastName;
// 	}

// 	static addNumbers(x, y) {
// 		return x + y;
// 	}
// }

// console.log(Person.addNumbers(1, 2));

// const mary = new Person('Mary', 'Williams', '11-13-1980');



// mary.getsMarried('Johnson');
// console.log(mary);


//Inheritence in ES6 Classes

// class Person {
// 	constructor(firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	greeting() {
// 		return `Hello there, ${this.firstName} ${this.lastName}`;
// 	}
// }

// class Customer extends Person {
// 	constructor(firstName, lastName, phone, membership) {
// 		super(firstName, lastName);

// 		this.phone = phone;
// 		this.membership = membership;
// 	}

// 	static getMembershipCost() {
// 		return 500;
// 	}
// }

// const john = new Customer('John', 'Doe', '555-555-5555', 'standard');

// console.log(john.greeting());
// console.log(Customer.getMembershipCost());