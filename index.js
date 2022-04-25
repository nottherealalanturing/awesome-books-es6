import Library from './modules/Library';
import navigate from './modules/SPA-navigation';
import time from './modules/Time';

window.addEventListener('DOMContentLoaded', () => {
  const bookSection = document.querySelector('.book-list');
  const bookTitle = document.querySelector('#title');
  const bookAuthor = document.querySelector('#author');
  const addBtn = document.querySelector('#submit');
  const navItems = Array.from(document.querySelectorAll('.links')[0].children);
  const bookList = document.querySelector('.book-list');
  const header = document.querySelector('.header');
  const newBook = document.querySelector('.add-new');
  const contact = document.querySelector('.contact-section');
  const siteDate = document.querySelector('#time');

  const myLibrary = new Library();

  myLibrary.createBook();

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (bookTitle.value === '' || bookAuthor.value === '') {
      return;
    }
    myLibrary.addBook(bookTitle, bookAuthor);
    localStorage.setItem('book-collection', JSON.stringify(myLibrary.library));
    bookTitle.value = '';
    bookAuthor.value = '';
  });

  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      navigate(e.target.parentElement.id);
    });
  });

  setInterval(time, 1000);
});
