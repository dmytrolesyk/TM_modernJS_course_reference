document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);


function loadCustomer(e) {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'customer.json', true);

	xhr.onload = function() {
		if(this.status === 200) {
			const customer = JSON.parse(this.responseText);
			const customerDiv = document.querySelector('.customer');
			// const customerUl = document.createElement('ul');
			// customerDiv.appendChild(customerUl);
			// for (key in customer) {
			// 	let li = document.createElement('li');
			// 	li.textContent = `${key}: ${customer[key]}`;
			// 	customerUl.appendChild(li);
			// }

			const output = `
				<ul>
					<li>ID: ${customer.id}</li>
					<li>Name: ${customer.name}</li>
					<li>Company: ${customer.company}</li>
					<li>Phone: ${customer.phone}</li>
				</ul>
			`;

			customerDiv.innerHTML = output;
		}
	}

	xhr.send();
}


function loadCustomers(e) {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'customers.json', true);

	xhr.onload = function() {
		if(this.status === 200) {
			const customers = JSON.parse(this.responseText);

			let output = '';

			customers.forEach(function(customer){
				output += `
					<ul>
						<li>ID: ${customer.id}</li>
						<li>Name: ${customer.name}</li>
						<li>Company: ${customer.company}</li>
						<li>Phone: ${customer.phone}</li>
					</ul>
				`;
				document.querySelector('.customers').innerHTML = output;
			});
		}
	}

	xhr.send();
}