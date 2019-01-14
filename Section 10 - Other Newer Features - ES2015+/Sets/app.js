// SETS - lists of unique values of any type, whether it's primitive or reference values

const set1 = new Set();

//Add values to set

set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); //won't add 100 again

// const set2 = new Set([1, true, 'a string', {name: 'Jill'}]);

// console.log(set1);

// //Get count
// console.log(set1.size);

// //Check for values
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name: 'John'})); //will be false because reference value


// //Delete from set
// set1.delete(100);

// console.log(set1);






//ITERATE

// //for ...of 
// for(let item of set1) {
// 	console.log(item);
// }

// //forEach
// set1.forEach((value)=> {
// 	console.log(value);
// })





//CONVERT TO ARRAYS

const setArr = Array.from(set1);
console.log(setArr);