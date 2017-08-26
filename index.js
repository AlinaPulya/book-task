let books = [];
let start = 0;
let step = 12;

class Book{
  constructor(coverBook, nameBook, publisher, dataBookId, description){
    this._coverBook = coverBook;
    this._nameBook = nameBook;
    this._publisher = publisher;
    this._dataBookId = dataBookId;
    this._title = nameBook;
    this._description = description;
  }
  getBlock(){
    const parentElem = document.getElementById('appearBook');
    let elementBook = document.createElement('div');
    const imgClassBootstrap = 'img-rounded';

    elementBook.className = 'col-md-4';
    elementBook.innerHTML = `<img class="${imgClassBootstrap}" src=${this._coverBook} alt="${this._nameBook}">` +
    `<h3>${this._nameBook}</h3>` +
    `<p align="justify">${this._publisher}</p>` +
    `<button type="button" class="btn btn-primary"` +
    ` data-toggle="modal" data-id="${this._dataBookId}">Show more</button>`;
    parentElem.appendChild(elementBook);
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
      createBook(data.items[i]);
    }
    books = [...data.items];
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

function createBook(elem){

  const book = new Book(elem.volumeInfo.imageLinks.thumbnail, elem.volumeInfo.title,
    elem.volumeInfo.publisher, elem.id, elem.volumeInfo.description);
    book.getBlock();

}


// function createBook (elem) {
//     const parentElem = document.getElementById('appearBook');
//     let elementBook = document.createElement('div');
//     const coverBook = elem.volumeInfo.imageLinks.thumbnail;
//     const nameBook = elem.volumeInfo.title;
//     const publisher = elem.volumeInfo.publisher;
//     const dataBookId = elem.id;
//     const imgClassBootstrap = 'img-rounded';
//
//     elementBook.className = 'col-md-4';
//     elementBook.innerHTML = `<img class="${imgClassBootstrap}" src=${coverBook} alt="${nameBook}">` +
//     `<h3>${nameBook}</h3>` +
//     `<p align="justify">${publisher}</p>` +
//     `<button type="button" class="btn btn-primary"` +
//     ` data-toggle="modal" data-id="${dataBookId}">Show more</button>`;
//     parentElem.appendChild(elementBook);
// }

function showModal (elem) {
  let modalTitle = document.querySelector('h5.modal-title');
  let modalContent = document.querySelector('div.modal-body');

  modalTitle.innerHTML = elem.volumeInfo.title;
  modalContent.innerHTML = elem.volumeInfo.description;
  $('#modal').modal('show');
}

function ready() {

  document.getElementById('buttonSearch').addEventListener('click', bookSearch, false);
  document.getElementById('loadMore').addEventListener('click', bookMore, false);

  document.getElementById('appearBook').addEventListener('click', event => {
    const id = event.target.getAttribute('data-id');
    const book = books.find(item => item.id === id);
    showModal(book);
    });
}

document.addEventListener('DOMContentLoaded', ready);
