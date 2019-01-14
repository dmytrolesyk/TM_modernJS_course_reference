// Create a symbol

// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(typeof sym2);

//console.log(Symbol('123') === Symbol('123')); //returns false - there can never be two same symbols
//console.log(`Hello ${sym1}`); // Cannot convert a Symbol value to a string
//console.log(`Hello ${String(sym1)}`); // But we can do this
// console.log(`Hello ${sym1.toString()}`); // Or this


//Unique Object Keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';



// console.log(myObj);
// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);


//Symbols are not enumerable in for ...in iterations
for(let i in myObj) {
	console.log(`${i}: ${myObj[i]}`);
}

//Symbols are igonred by JSON.stringify();

console.log(JSON.stringify({key: 'Prop4'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'Prop4'}));