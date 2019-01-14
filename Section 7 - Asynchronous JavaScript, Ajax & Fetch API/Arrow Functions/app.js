

// const sayHello = () => {
// 	console.log("hello");
// }

//one line function does not need braces
const sayHello = () => console.log("hello");

//return
const sayHello2 = () => 'Hello';

//need to wrap return obj in set of parens, otherwisw will be confused with func body instead of obj literal
const sayHello3 = () => ({msg: "Hello"});

//Single param does not need parenthesis
const sayHello4 = name => console.log(`Hello, ${name}`);

//Multiple params need parentheses
const sayHello5 = (firstName, lastName) => console.log(`Hello, ${firstName} ${lastName}`);


sayHello();
console.log(sayHello2())
console.log(sayHello3())

sayHello4('Brad');
sayHello5('Brad', 'Traversy');

//can use as callbacks
const users = ['Nathan', 'John', 'William'];
const nameLengths = users.map(user => user.length);
console.log(nameLengths);