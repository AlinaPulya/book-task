function bookSearch(){
  let search = document.getElementById('search').value;
  let results = document.getElementById('resultsSearch');
  console.log(search);

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",
    success: function (data) {
      for(let i = 0; i < data.items.length; i++){
        createBook(data.items[i]);
      }

      document.getElementById('appearBook').addEventListener("click", event => {
        const id = event.target.getAttribute('data-id');
        const book = data.items.find(item => item.id === id);
        showModal(book);
        });

      console.log(data);
    },
    type: "GET"
  })
}

function createBook (elem) {
    const parentElem = document.getElementById('appearBook');
    let elementBook = document.createElement('div');
    let coverBook = elem.volumeInfo.imageLinks.thumbnail;
    let nameBook = elem.volumeInfo.title;
    let publisher = elem.volumeInfo.publisher;
    let dataBookId = elem.id;
    let imgClassBootstrap = 'img-rounded';

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
  modalTitle.innerHTML = elem.volumeInfo.title;
  let modalContent = document.querySelector('div.modal-body');
  modalContent.innerHTML = elem.volumeInfo.description;
    $('#modal').modal('show');
}

function ready() {
  document.getElementById('buttonSearch').addEventListener('click', bookSearch, false);
}

document.addEventListener('DOMContentLoaded', ready);
