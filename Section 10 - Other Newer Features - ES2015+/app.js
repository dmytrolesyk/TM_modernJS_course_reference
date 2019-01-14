// //Iterator Example
// function nameIterator(names) {
// 	let nextIndex = 0;

// 	return {
// 		next: function() {
// 			return nextIndex < names.length ? 
// 			{ value: names[nextIndex++], done: false } :
// 			{ done: true }
// 		}
// 	}
// }

// //Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];

// //Init iterator and pass in the names arr
// const names = nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());






//Generators - functions that can return multiple values - yield values

// //Generator example

// function* sayNames() {
// 	yield 'Jack';
// 	yield 'Jill';
// 	yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

//ID creator

// function* createIds() {
// 	let index = 0;

// 	while(true) {
// 		yield index++;
// 	}
// }

// const get = createIds();

// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);
// console.log(get.next().value);