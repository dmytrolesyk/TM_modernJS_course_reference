//map is an object that holds key:value pairs, and any value whether it's n obj
//or primitive can be used as both key and value

const map1 = new Map();

//Set keys
const key1 = 'some string';
const key2 = {};
const key3 = function() {};

//Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// //Get values by keys
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// //Count values 
// console.log(map1.size);

//ITERATING MAPS

// //Loop using for...of to get keys and values
// for(let [key, value] of map1) {
// 	console.log(`${key}: ${value}`);
// }


// //Iterate keys only
// for(let key of map1.keys()) {
// 	console.log(key);
// }

// //Iterate values only
// for(let value of map1.values()) {
// 	console.log(value);
// }


// //Loop with forEach
// map1.forEach(function(value, key){
// 	console.log(`${key}: ${value}`);
// })



//CONVERT TO ARRAY

//Create an array the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

//Create an array of values only
const valArr = Array.from(map1.values());
console.log(valArr);

//Create an array of keys only
const keysArr = Array.from(map1.keys());
console.log(keysArr);


