const navigateSPA = (key) => {
  switch (key) {
    case 'list':
      bookList.classList.remove('hide');
      header.classList.remove('hide');
      newBook.classList.add('hide');
      contact.classList.add('hide');
      break;
    case 'add-new':
      bookList.classList.add('hide');
      header.classList.add('hide');
      newBook.classList.remove('hide');
      contact.classList.add('hide');
      break;
    case 'contact-section':
      bookList.classList.add('hide');
      header.classList.add('hide');
      newBook.classList.add('hide');
      contact.classList.remove('hide');
      break;
    default:
      break;
  }
};

export default navigateSPA;
