export default class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('bookCollection')) || [];
  }

  addBook(book) {
    if (this.books.some((item) => item.title === book.title)) return;

    this.books.push(book);
    this.#saveToLocalStorage();
  }

  removeBook(title) {
    this.books = this.books.filter((b) => b.title !== title);
    this.#saveToLocalStorage();
  }

  #saveToLocalStorage() {
    localStorage.setItem('bookCollection', JSON.stringify(this.books));
  }
}
