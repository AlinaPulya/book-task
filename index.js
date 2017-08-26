let books = [];
let start = 0;
let step = 12;

class Book{
  constructor (thumbnail, title, publisher, id, description) {
    this.coverBook = thumbnail;
    this.titleBook = title;
    this.publisherBook = publisher;
    this.dataBookId = id;
    this.descriptionBook = description;
  }
  getBlock(){
    return `<img class="img-rounded" src=${this.coverBook} alt="${this.titleBook}">` +
    `<h3>${this.titleBook}</h3>` +
    `<p align="justify">${this.publisherBook}</p>` +
    `<button type="button" class="btn btn-primary"` +
    ` data-toggle="modal" data-id="${this.dataBookId}">Show more</button>`;
  }
}

function fetchBooks() {
  const search = document.getElementById('search').value;
  const request = new XMLHttpRequest();
  const mainURL = 'https://www.googleapis.com/books/v1/volumes?q=';

  let params = `${encodeURIComponent(search)}&startIndex=${encodeURIComponent(start)}&maxResults=${encodeURIComponent(step)}`;

  request.open('GET', `${mainURL}${params}`, true);

  request.onreadystatechange = () => {
    let data = JSON.parse(request.responseText);
    for (let i = 0; i < data.items.length; i++) {
      let bookElement = new Book(data.items[i].volumeInfo.imageLinks.thumbnail, data.items[i].volumeInfo.title,
      data.items[i].volumeInfo.publisher, data.items[i].id, data.items[i].volumeInfo.description);
      createBook(bookElement);

      books.push(bookElement);
    }
  }
  request.send();
}


function bookSearch () {
  start = 0;
  const parentElem = document.getElementById('appearBook');
  parentElem.innerHTML = '';

  fetchBooks();
}

function bookMore () {
  start += step;
  fetchBooks();
}

function createBook (elem) {
    const parentElem = document.getElementById('appearBook');
    let elementBook = document.createElement('div');

    elementBook.className = 'col-md-4';
    elementBook.innerHTML = elem.getBlock();
    parentElem.appendChild(elementBook);
}

function showModal (elem) {
  let modalTitle = document.querySelector('h5.modal-title');
  let modalContent = document.querySelector('div.modal-body');

  modalTitle.innerHTML = elem.titleBook;
  modalContent.innerHTML = elem.descriptionBook;
  $('#modal').modal('show');
}

function ready() {

  document.getElementById('buttonSearch').addEventListener('click', bookSearch, false);
  document.getElementById('loadMore').addEventListener('click', bookMore, false);

  document.getElementById('appearBook').addEventListener('click', event => {
    const id = event.target.getAttribute('data-id');
    const book = books.find(item => item.dataBookId === id);
    showModal(book);
    });

    console.log(books);
}

document.addEventListener('DOMContentLoaded', ready);
