document.getElementById('button').addEventListener('click', loadData);

function loadData(){
	//Create XHR Object
	const xhr = new XMLHttpRequest();

	//OPEN - specify the type of request and the URL
	xhr.open('GET', 'data.txt', true);

	//Optional - Used for spinners/loaders
	xhr.onprogress = function() {
		console.log('READYSTATE:', xhr.readyState) // will show readystate 3, which is processing request
	}


	xhr.onload = function(){
		console.log('READYSTATE:', xhr.readyState);
		if(this.status === 200) {
			document.querySelector('.output').textContent = this.responseText;
		}
	}

	// xhr.onreadystatechange = function() {
	// 	console.log('READYSTATE:', xhr.readyState)
	// 	if(this.status === 200 && this.readyState === 4) {
	// 		document.querySelector('.output').textContent = this.responseText;
	// 	}
	// }

	xhr.onerror = function() {
		console.log('Request error');
	}

	xhr.send();

}

//readyState Values
	// 0: request not initialized
	// 1: server connection established
	// 2: request received
	// 3: processing request
	// 4: requests is finished and response is ready