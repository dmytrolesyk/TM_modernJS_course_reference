document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
	e.preventDefault();
	
	const number = document.querySelector('#number').value;

	const xhr = new XMLHttpRequest();

	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

	xhr.onload = function() {
		if(this.status === 200) {
			const response = JSON.parse(this.responseText);
			
			let output = document.querySelector('.jokes');
			output.innerHTML = '';
			response.value.forEach(function(jokeObj){
				output.innerHTML += `
					<li>${jokeObj.joke}</li>
				`;
			});
		}
	}

	xhr.send();
}