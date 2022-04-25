export default class Library {
  constructor() {
    this.library = JSON.parse(localStorage.getItem('book-collection')) || [];
  }

  addBook(bookTitle, bookAuthor) {
    const selectedBook = { title: bookTitle.value, author: bookAuthor.value };
    this.library.push(selectedBook);
    this.createBook();
  }

  createBook() {
    bookSection.innerHTML = '';
    for (let i = 0; i < this.library.length; i += 1) {
      const bookContainer = document.createElement('div');
      bookContainer.setAttribute('class', 'container');
      const bookDescription = document.createElement('h2');
      bookDescription.setAttribute('class', 'width');
      const deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'deletebtn');
      deleteBtn.setAttribute('data', i);

      bookDescription.textContent = `${this.library[i].title} by ${this.library[i].author}`;
      deleteBtn.textContent = 'Delete';

      bookContainer.appendChild(bookDescription);
      bookContainer.appendChild(deleteBtn);
      bookSection.appendChild(bookContainer);
    }
    this.deleteBook();
  }

  deleteBook() {
    [...document.querySelectorAll('.deletebtn')].forEach((element) => {
      const elementIndex = parseInt(element.getAttribute('data'), 10);
      element.addEventListener('click', () => {
        this.library.splice(elementIndex, 1);
        localStorage.setItem('book-collection', JSON.stringify(this.library));
        this.createBook();
      });
    });
  }
}
