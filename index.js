var library = [{
  name: "The Paper",
  cover: "img/book_1.bmp",
  description: "In this bone-chilling tale of terror from Shamus"
  +"Award-winning thriller writer Lynn Hightower, a devoted mother"
  +"must confront the paranormal forces that have cursed her family...",
  data_target: "#FirstModal"
  }, {
  name: "Even in Darkness",
  cover: "img/book_2.bmp",
  description: "Joy Miller, once a famed TV evangelist, retired years"
  +"before when two tragedies struck her family: the first leading her"
  +"husband to suicide the second leaving her son dead and his wife and"
  +"daughter estranged from her...",
  data_target: "#SecondModal"
  }, {
  name: "Flashpoint",
  cover: "img/book_3.bmp",
  description: "A New York Times Notable Book: Cincinnati homicide"
  +"detective Sonora Blair hunts a serial killer who's playing with"
  +"fire in Shamus Award—winning author Lynn Hightower's chilling thriller.",
  data_target: "#ThirdModal"
  }];

function createbook(library){
  library.forEach(function(elem){
    var parentElem = document.getElementById('appear_book');
    var elementbook = document.createElement('div');
    elementbook.className = "col-md-4";
    elementbook.innerHTML = '<img  class="img-rounded" src='+elem.cover+' alt="The Paper Book"><h3>'+elem.name+'</h3><p align="justify">'
  +elem.description+'</p> <!-- Button trigger modal -->'
  +'<button type="button" class="btn btn-primary" data-toggle="modal"'
  +'data-target="'+elem.data_target+'">View more </button>';
  parentElem.appendChild(elementbook);
});
}

function ready(){
  createbook(library);
}

document.addEventListener("DOMContentLoaded", ready);


$('#FirstModal').modal('show');
$('#SecondModal').modal('show');
$('#ThirddModal').modal('show');
