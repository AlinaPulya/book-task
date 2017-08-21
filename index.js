let books = [];

function bookSearch () {
  const search = document.getElementById('search').value;

  $.ajax({
    url: `https://www.googleapis.com/books/v1/volumes?q=${search}`,
    dataType: 'json',
    success: function (data) {

      const parentElem = document.getElementById('appearBook');
      parentElem.innerHTML = '';

      for(let i = 0; i < data.items.length; i++){
        createBook(data.items[i]);
      }

      books = JSON.parse(JSON.stringify(data.items));

      console.log(data);
    },
    type: 'GET'
  })
}

function createBook (elem) {
    const parentElem = document.getElementById('appearBook');
    let elementBook = document.createElement('div');
    const coverBook = elem.volumeInfo.imageLinks.thumbnail;
    const nameBook = elem.volumeInfo.title;
    const publisher = elem.volumeInfo.publisher;
    const dataBookId = elem.id;
    const imgClassBootstrap = 'img-rounded';

    elementBook.className = 'col-md-4';
    elementBook.innerHTML = `<img class="${imgClassBootstrap}" src=${coverBook} alt="${nameBook}">` +
    `<h3>${nameBook}</h3>` +
    `<p align="justify">${publisher}</p>` +
    `<button type="button" class="btn btn-primary"` +
    ` data-toggle="modal" data-id="${dataBookId}">Show more</button>`;
    parentElem.appendChild(elementBook);
}

function showModal (elem) {
  let modalTitle = document.querySelector('h5.modal-title');
  let modalContent = document.querySelector('div.modal-body');

  modalTitle.innerHTML = elem.volumeInfo.title;
  modalContent.innerHTML = elem.volumeInfo.description;
  $('#modal').modal('show');
}

function ready() {

  document.getElementById('buttonSearch').addEventListener('click', bookSearch, false);

  document.getElementById('appearBook').addEventListener('click', event => {
    const id = event.target.getAttribute('data-id');
    const book = books.find(item => item.id === id);
    showModal(book);
    });
}

document.addEventListener('DOMContentLoaded', ready);
