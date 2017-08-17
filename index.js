var library = [{
    name: 'The Piper',
    cover: 'img/book_1.bmp',
    description: {
      short: `In this bone-chilling tale of terror from Shamus
      Award-winning thriller writer Lynn Hightower, a devoted mother
      must confront the paranormal forces that have cursed her family...`,
      full: `In this bone-chilling tale of terror from Shamus Award-winning
      thriller writer Lynn Hightower, a devoted mother must confront the
      paranormal forces that have cursed her family...When Olivia James
      receives a phone call just after midnight, she recognizes her
      brother’s voice. But there’s a problem: her brother has been dead 
      for the past nine weeks. Moving back to her old childhood home in
      Tennessee - the place where her brother has just died - her young
      daughter Teddy seems troubled, telling her mother that she’s being
      visited by a menacing ghost. When another tragic death occurs and
      her daughter disappears, Olivia must confront the demonic force that
      has cursed her family.`
   },
    dataTarget: 'firstModal',
    id: 'firstModalLabel'
}, {
    name: 'Even in Darkness',
    cover: 'img/book_2.bmp',
    description: {
      short: `Joy Miller, once a famed TV evangelist, retired years,
        before when two tragedies struck her family: the first leading her
        husband to suicide the second leaving her son dead and his wife and
        daughter estranged from her...`,
      full: `Joy Miller, once a famed TV evangelist, retired years
        before when two tragedies struck her family: the first leading her
        husband to suicide the second leaving her son dead and his wife and
        daughter estranged from her...She now lives a lonely, reclusive
        life, until a package arrives in the mail containing graphic
        photographs of three people she knew long ago - all brutally
        murdered. When Joy reads the note in the package, she knows
        immediately who it's from: a ghost from her past, a dangerous
        individual who knows far too much about the skeletons in Joy's
        closet. Then people start disappearing ...`
    },
    dataTarget: 'secondModal',
    id: 'secondModalLabel'
}, {
    name: 'Flashpoint',
    cover: 'img/book_3.bmp',
    description: {
      short: `A New York Times Notable Book: Cincinnati homicide
        detective Sonora Blair hunts a serial killer who's playing with
        fire in Shamus Award—winning author Lynn Hightower's chilling thriller.`,
      full: `A New York Times Notable Book: Cincinnati homicide
        detective Sonora Blair hunts a serial killer who's playing with
        fire in Shamus Award—winning author Lynn Hightower's chilling
        thriller. A single mother of two children and a police specialist
        with the Cincinnati Homicide Division, Sonora Blair is still awake
        in the middle of the night when the call comes in. Mark Daniels has
        been found in Mount Airy Forest handcuffed to the steering wheel of
        his car, doused with accelerant, and set on fire. As the hideously
        burned college student lies dying in the ER, he describes his
        killer: blond, female, and a total stranger. But Mark may not have
        been the intended victim. Evidence points to a sexual fixation on
        his older brother, Keaton, a teacher currently separated from his
        wife. Then the murderer — who has been dubbed 'Flash' by the
        media—calls Sonora one night, taunting and mocking her. As the
        investigation heats up, the harassment continues. The female
        psychopath knows intimate details about Sonora's family and her
        past. As the criminal's monstrous plan becomes chillingly apparent,
        Sonora must risk everything to corner a cunning killer.`
      },
    dataTarget: 'thirdModal',
    id: 'thirdModalLabel'
}];

function createBook (library) {
  library.forEach(function (elem) {

        const parentElem = document.getElementById('appearBook');
        var elementBook = document.createElement('div');
        var coverBook = elem.cover;
        var nameBook = elem.name;
        var descriptionShort = elem.description.short;
        var dataTargetBook = elem.dataTarget;
        var imgClassBootstrap = 'img-rounded';

        elementBook.className = 'col-md-4';
        elementBook.innerHTML = `<img  class="${imgClassBootstrap}" src=${coverBook}
        alt="${nameBook}"><h3>${nameBook}</h3><p align="justify">
        ${descriptionShort}</p><button type="button" class="btn btn-primary"
        data-toggle="modal" data-target="#${dataTargetBook}" id="showMore"
        >Show more</button>`;


        parentElem.appendChild(elementBook);
    });
}

function createModal (library) {

  library.forEach(function (elem){
    const parentElem  = document.getElementById('modalWrapper');
    var elementModal = document.createElement('div');

    var modalId = elem.id;
    var modalDataTarget = elem.dataTarget;
    var descriptionFull = elem.description.full;
    var nameBook = elem.name;

    elementModal.innerHTML = `<div class="modal fade" id="${modalDataTarget}"
    tabindex="-1" role="dialog" aria-labelledby="${modalId}" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="${modalId}">${nameBook}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">${descriptionFull}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`
    parentElem.appendChild(elementModal);
  });
}


function ready () {
  createBook(library);
  createModal(library);

      /*
    for(var i=0; i < 3; i++)
    {
      createModal(library[i]);
    }*/
}

document.addEventListener('DOMContentLoaded', ready);
