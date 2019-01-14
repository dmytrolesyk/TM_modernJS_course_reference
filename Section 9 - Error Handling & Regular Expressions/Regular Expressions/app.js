//Regular expression is used to describe a pattern of characters - used for pattern matching
//and pattern searching, as well as validation, pulling things out of the body of text

// let re;

// re = /hello/
// re = /hello/i; // i - case insensitive
// re = /hello/g; // Global search - gonna search for all instances, not just the first it finds


// console.log(re);
// console.log(re.source);





// //exec() - Return result in an array if there is a match or will return null if no match

// const result1 = re.exec('brad hello world');
// console.log(result1); // will return array with results

// const result2 = re.exec('brad hi world');
// console.log(result2); // will return null

// console.log(result1[0]); // gives us the match re - 'hello'
// console.log(result1.index); // gives us the index at which match is located
// console.log(result1.input); // gives us the string - 'brad hello world'





// //test() - Returns true or false
// const result3 = re.test('Hello');
// console.log(result3);




// //match() - Returns result array or null
// const str = 'Hello There';
// const result4 = str.match(re);
// console.log(result4);




// //search() - Returns the index of the first match, if not found - return -1
// const str = 'Brad, Hello there';
// const result5 = str.search(re);
// console.log(result5);


// //replace() - Returns new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'hi');
// console.log(newStr);










//	METACHARACTER SYMBOLS

let re;

//Literal characters
re = /hello/;
re = /hello/i;



//Metacharacter Symbols
re = /^h/i; //Must start with
re = /d$/i; //Must end with
re = /World$/i; //Must end with
re = /^hello$/; // Must start and end with
re = /^hello world$/i; // Must start and end with
re = /^h.llo/i; //Matches any ONE character
re = /h*llo/i; //Matches any character 0 or more times - 'Hllo world' or Heeeelo world will match
re = /gre?a?y/i; //Optional character might be written with 'e' or 'a' // 'grey', 'gray' and 'gry' will match
re = /gre?a?y\?/i; // Escape characters // if I want to have a question mark at the end
//but I don't want it to be a metacharacter of an optional char, but an actual question mark





//Brackets [] - Character Sets
re = /gr[ae]y/i; // whatever the character it is, it has to be one of those in brackets
//better solution than /gre?a?y/i, as it's not allowing to match 'gry'
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/; // Will match anything except G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter of any case
re = /[0-9]ray/; //Match any digit - will match '9ray mouse', for example
//but if we put '10ray mouse' as a string, it wil, match "0ray", if we want exactly "10ray"
//to match, we need to do /[0-9][0-9]ray/;




//Braces {} - Quantifiers
re = /Hel{2}o/i; //has to be exactly two l-s // must occur exactly {number} or times
re = /Hel{2,4}o/i; //can have 2 to 4 l-s
re = /Hel{2,}o/i;  // must occur AT LEAST {number} times


//Parentheses () - Grouping
re = /[0-9]x{3}/; // if we leave it as it is, this {3} quantifier will only look at 'x',
//but if we want to have 'numberx' be three times, we need to do grouping
re = /([0-9]x){3}/; //'3x3x3x' will match, '3x3x3x3x' will also match, because it's looking
//at the first three
re = /^([0-9]x){3}$/; //now it has to be exactly '3x3x3x'



//Shorthand Character Classes
re = /\w/; // Word Character - alphanumeric char - any letter or any number or _
//so if we put '3x3x3x3x' as a string, it will match, because it'll look at the first
//character, which is '3' in this case and will return a match
re = /\w+/; //looks at ALL of the word characters, so if we put '3x3x3x3x' as a string, 
//it will match, because all the chars in the string are alphunumeric
re = /\W/; // Non-Word characters - anything BUT a letter, a number or _
re = /\d/; //Match any digit
re = /\d+/; //Match all digits
re = /\D/; // Non-Digit characters
re = /\s/; //Match whitespace chars - space or tab
re = /\S/; // Non-Whitespace
re = /Hell\b/i; // Word boundary // if we have 'Hello, welcome to Hell' as a string and we'd like to
//find exactly 'Hell', not hell in 'Hello'





//Assertions 
re = /x(?=y)/; // Match x only if it's followed by y

re = /x(?!y)/; // Match x only if it's NOT followed by y


//Str to match
const str = 'xd';


//Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
	if(re.test(str)) {
		console.log(`${str} matches the ${re.source}`);
	} else {
		console.log(`"${str}" does NOT match "${re.source}"`);
	}
}

reTest(re, str);