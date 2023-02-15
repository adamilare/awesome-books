import Book from './Book.js';
import BookCollection from './BookCollection.js';

const bookCollection = new BookCollection();

const container = document.getElementById('contents');

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
function displayBooks() {
  const div = document.createElement('div');
  div.id = 'book-list';
  container.innerHTML = div.outerHTML;
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  bookCollection.books.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.innerHTML = `<p><span class="book-title">"${book.title}" </span> <span class="book-author"> by ${book.author} </span><button data-ref="${book.title}">Remove</button> </p>`;
    const remBtn = bookElement.querySelector('button');
    remBtn.onclick = () => {
      removeBook(book.title);
    };
    bookList.appendChild(bookElement);
  });

  // container.innerHTML = bookList.outerHTML;
}

function displayAddNew() {
  const div = document.createElement('div');
  div.id = 'add-new-book';
  container.innerHTML = div.outerHTML;
  const addNew = document.getElementById('add-new-book');
  addNew.innerHTML = `<span class="divide-line"></span>
      <h2>Add A New Book</h2>
      <form id="add-new-book">
        <input type="text" id="title-input" placeholder="Title" />
        <input type="text" id="author-input" placeholder="Author" />
        <button type="button" id="add-button">Add</button>
      </form>`;
  addNew.querySelector('button').addEventListener('click', addBook);
}

function displayContact() {
  const addNew = document.createElement('div');
  addNew.id = 'add-new-book';
  addNew.innerHTML = `<span class="divide-line"></span>
      <h2>Contact information</h2>
      <p>Do have any questions or you just want to say "Hello"? <br>
      You can reach out to us!
      </p>
      <ul>
        <li>Our e-mail: mail@mail.com</li>
        <li>Our phone number: 123-456-789</li>
        <li>Our address: 123 Street, City, Country</li>
      </ul>`;
  container.innerHTML = addNew.outerHTML;
}

// const bookList =
document.getElementById('books-list').onclick = displayBooks;
// const addNew =
document.getElementById('book-add').onclick = displayAddNew;
// const contact =
document.getElementById('contact').onclick = displayContact;

document.getElementById('today-date').textContent = new Date().toDateString();

// Display books on page load
if (bookCollection.books.length > 0) displayBooks();
else displayAddNew();
