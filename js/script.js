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

  // Add the h2 element before the book list
  const h2 = document.createElement('h2');
  h2.textContent = 'All Awesome Books';
  container.insertBefore(h2, bookList);

  bookCollection.books.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.innerHTML = `
    <p><span class="book-title">"${book.title}" </span> <span class="book-author"> 
    by ${book.author} </span><button class="remove-btn" 
    data-ref="${book.title}">Remove</button> </p>
    `;
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
      <br><br><br><br><br>
      <h2>Add A New Book</h2>
      <form id="add-new-book">
        <input type="text" id="title-input" placeholder="Title" />
        <input type="text" id="author-input" placeholder="Author" />
        <button type="button" id="add-button">Add</button>
      </form>
      <br><br><br>
      `;
  addNew.querySelector('button').addEventListener('click', addBook);
}

function displayContact() {
  const addNew = document.createElement('div');
  addNew.id = 'add-new-book';
  addNew.innerHTML = `<span class="divide-line"></span>
      <h2>Contact Information</h2><br><br>
      <p>Do have any questions or you just want to say "Hello"? <br>
      You can reach out to us!
      </p><br>
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

// select the element where the time will be displayed
const timeDisplay = document.getElementById('today-time');

// create a function to update the time every second
function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// call the function once to initialize the time
updateTime();

// update the time every second
setInterval(updateTime, 1000);

// Display books on page load
if (bookCollection.books.length > 0) displayBooks();
else displayAddNew();
