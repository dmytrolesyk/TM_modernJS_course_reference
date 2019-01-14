//Book Constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

//UI Constructor
function UI() {}


//Add Book to LIst
UI.prototype.addBookToList = function(book) {

	const list = document.getElementById('book-list');

	//Create tr element
	const row = document.createElement('tr');

	//Insert cols
	row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">X</a></td>
	`;

	list.appendChild(row);
}

//Delete Book
UI.prototype.deleteBook = function(target) {
	if(target.classList.contains('delete')) {
		target.parentElement.parentElement.remove();
	}
}


//Show Alert
UI.prototype.showAlert = function(msg, className) {

	//Create alert element
	const div = document.createElement('div');
	div.className = `alert ${className}`;
	div.textContent = msg;

	//Insert the alert
	const container = document.querySelector('.container');
	const form = document.getElementById('book-form');
	container.insertBefore(div, form);

	//Timeout after 3s
	setTimeout(function(){
		document.querySelector('.alert').remove();
	}, 3000)
}

UI.prototype.clearFields = function() {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
}

//Instantiate UI object
const ui = new UI();

//Event listeners for Add Book
document.getElementById('book-form').addEventListener('submit', function(e){

	e.preventDefault();

	//Get form values
	const title = document.getElementById('title').value,
		  author = document.getElementById('author').value,
		  isbn = document.getElementById('isbn').value;


	//Instantiate book object
	const book = new Book(title, author, isbn);

	//Validate
	if(!title || !author || !isbn) {
		//Error alert
		ui.showAlert('Please fill in all fields', 'error')
	} else {
		// Add book to list
		ui.addBookToList(book);

		//Show success alert
		ui.showAlert('Book Added', 'success');

		//Clear fields
		ui.clearFields();

	}

});


//Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e){
		e.preventDefault();
		ui.deleteBook(e.target);

		ui.showAlert('Book Removed', 'success')
	}
);



