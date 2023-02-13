// Check if book collection is already stored in local storage
let bookCollection = JSON.parse(localStorage.getItem("bookCollection")) || [];

// Add book to collection
const addBook = () => {
  const title = document.getElementById("title-input").value;
  const author = document.getElementById("author-input").value;
  // if book already exists in collection, don't add it again
  if (bookCollection.some((book) => book.title === title)) return;

  bookCollection.push({ title, author });
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
  displayBooks();
};

// Remove book from collection
const removeBook = (title) => {
  bookCollection = bookCollection.filter((book) => book.title !== title);
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
  displayBooks();
};

// Display all books in the collection
const displayBooks = () => {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  bookCollection.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `<p>Title: ${book.title}</p><p>Author: ${book.author}</p><button onclick="removeBook('${book.title}')">Remove</button><hr>`;
    bookList.appendChild(bookElement);
  });
};

// Add event listeners to buttons
document.getElementById("add-button").addEventListener("click", addBook);

// Display books on page load
displayBooks();
