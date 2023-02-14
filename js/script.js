import Book from './Book.js';
import BookCollection from './BookCollection.js';

const bookCollection = new BookCollection();

// Add book to collection
const addBook = () => {
  const title = document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;

  bookCollection.addBook(new Book(title, author));

  displayBooks(); // eslint-disable-line
};

// Remove book from collection // Remove duplicates

const removeBook = (title) => {
  bookCollection.removeBook(title);
  displayBooks(); //eslint-disable-line
};

// Display all books in the collection
const displayBooks = () => {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  bookCollection.books.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.innerHTML = `<p><span class="book-title">"${book.title}" </span> <span class="book-author"> by ${book.author} </span><button data-ref="${book.title}">Remove</button> </p>`;
    bookElement.querySelector('button').addEventListener('click', () => {
      removeBook(book.title);
    });
    bookList.appendChild(bookElement);
  });
};

// Add event listeners to buttons
document.getElementById('add-button').addEventListener('click', addBook);

// Display books on page load
displayBooks();
