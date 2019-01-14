const user = {email: 'jdoe@gmail.com'};

try {
	//ReferenceError
	// myFunction();

	//TypeError
	// null.myFunction();

	//Syntax Error
	// console.log(eval('Hello world'))

	//URIError
	// decodeURIComponent('%');

	if(!user.name) {
		//throw 'User has no name';
		throw new SyntaxError('User has no name');
	}

} catch(e) {
	console.log(e);
	// console.log('ITS NULL STUPID'); // don't have to use null, can format the error however I want
	// console.log(e.message);
	// console.log(e.name);
	// console.log(e instanceof ReferenceError);
	// console.log(e instanceof TypeError);
} finally {
	console.log('Finally runs regardgless of result.')
}

console.log('Program continues');