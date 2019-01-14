class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	addBookToList(book) {

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

	showAlert(msg, className) {

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

	deleteBook(target) {
		if(target.classList.contains('delete')) {
			target.parentElement.parentElement.remove();
		}
	}

	clearFields() {
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
}

class Store {

	static getBooks() {
		let books;
		if(!localStorage.getItem('books')) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;

	}

	static displayBooks() {
		const books = Store.getBooks();
		books.forEach(function(book){
			ui.addBookToList(book);
		});
	}

	static addBook(book) {
		const books = Store.getBooks();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(isbn) {
		const books = Store.getBooks();
		let index;
		for (let i = 0; i < books.length; i++) {
			if (books[i].isbn === isbn) {
				index = i;
				break;
			}
			
		}
		books.splice(index, 1);
		localStorage.setItem('books', JSON.stringify(books));

	}
}

//Instantiate UI object
const ui = new UI();

//Event listener for dom loaded

document.addEventListener('DOMContentLoaded', function(){
	Store.displayBooks();
});

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

		//Add book to local storage
		Store.addBook(book);

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
		Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
		ui.showAlert('Book Removed', 'success')
	}
);
