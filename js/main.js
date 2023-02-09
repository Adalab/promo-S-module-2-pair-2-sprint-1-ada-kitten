// Formulario 

// 'use strict';
// const form= document.querySelector('.js-new-form');
// form.classList.remove("collapsed");

const catList = document.querySelector(".js-list");

const kittenImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenName = 'Anastacio';
const kittenDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace = 'Siamés';

const kittenOne = `<li class="card">
<img 
  class="card_img" 
  src="${kittenImage}" 
  alt="siames-cat"
/>
<h3 class="card_title"> ${kittenName}</h3>
<h4 class="card_race"> ${kittenRace}</h4>
<p class="card_description"> ${kittenDesc}</p>
</li>`;


const kittenTwoImage = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño...hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo';
const kittenTwoRace = 'Sphynx';

const kittenTwo = `<li class="card">
<img 
  class="card_img" 
  src="${kittenTwoImage}" 
  alt="siames-cat"
/>
<h3 class="card_title"> ${kittenTwoName}</h3>
<h4 class="card_race"> ${kittenTwoRace}</h4>
<p class="card_description"> ${kittenTwoDesc}</p>
</li>`;



const kittenThreeImage = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coo';

const kittenThree = `<li class="card">
<img 
  class="card_img" 
  src="${kittenThreeImage}" 
  alt="siames-cat"
/>
<h3 class="card_title"> ${kittenThreeName}</h3>
<h4 class="card_race"> ${kittenRace}</h4>
<p class="card_description"> ${kittenThreeDesc}</p>
</li>`;



// Fitro de búsqueda de la descripción

const input_search_desc = document.querySelector('.js_in_search_desc');

const descrSearchText = input_search_desc.value;

if( kittenDesc.includes(descrSearchText) ) {
  catList.innerHTML += kittenOne;
}

if( kittenTwoDesc.includes(descrSearchText) ) {
 catList.innerHTML += kittenTwo;
}

if( kittenThreeDesc.includes(descrSearchText) ) {
 catList.innerHTML += kittenThree;
}

// Validar la información de la raza

// const razaSearchText = js_in_search_raza.value;

// Mostrar/ocultar el formulario

const newForm = document.querySelector ('.js-new-form'); //formulario

const  buttonPlus = document.querySelector(".js-plus"); //botón

buttonPlus.addEventListener('click', (event) => {
if (newForm.classList.contains('collapsed')) {
  showNewCatForm();
  
} else {
  hideNewCatForm();
}

})

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}


// Adicionar nuevo gatito

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');
const btnAdd = document.querySelector ('.js-btn-add');


function renderKitten(url, desc, name, race) {
 url = inputPhoto.value;
 desc = inputDesc.value;
 name = inputName.value;
 race = inputRace.value;

return catList.innerHTML +=  `<li class="card">
<img 
  class="card_img" 
  src="${url}" 
  alt="siames-cat"
/>
<h3 class="card_title"> ${name}</h3>
<h4 class="card_race"> ${race}</h4>
<p class="card_description"> ${desc}</p>
</li>`;
}


btnAdd.addEventListener('click', addNewKitten);

function addNewKitten(event) {
    event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo.';
  } 
  
  else {
    labelMessageError.innerHTML = `Todo correcto`;
    renderKitten();
  }

}





/* Cancelar formulario */

const buttonCancel = document.querySelector ('.js-button-cancel');

buttonCancel.addEventListener ('click', (event) => {
    hideNewCatForm()
    inputName.value = '';
    inputDesc.value = '';
    inputPhoto.value = '';
    inputRace.value = '';
})

//Añadir nuevo gatito desde botón Añaddir


