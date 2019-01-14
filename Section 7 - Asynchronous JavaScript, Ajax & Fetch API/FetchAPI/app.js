document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
	fetch('data.txt')
	.then(res => res.text())
	.then(data => document.getElementById('output').innerHTML = data)
	.catch(err => console.log(err));
}

function getJSON() {
	fetch('posts.json')
	.then(res => res.json())
	.then(data => {
		data.forEach(function(post){
			document.getElementById('output').innerHTML += `
				<ul>
					<li>${post.title}</li>
					<li>${post.body}</li>
				</ul>
			`; 
		});
	})
	.catch(err => console.log(err));
}

function getExternal() {
	fetch('https://api.github.com/users')
	.then(res => res.json())
	.then(data => {
		let output = '';
		data.forEach(function(post){
			output += `<li>${post.login}</li>`
		})

		document.getElementById('output').innerHTML = output;
	})	
	.catch(err => console.log(err));
}	