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


catList.innerHTML = kittenOne;


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

catList.innerHTML += kittenTwo;

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

catList.innerHTML += kittenThree;

// Fitro de búsqueda de la descripción

const input_search_desc = document.querySelector('.js_in_search_desc');

const descrSearchText = input_search_desc.value;

if( kittenDesc.includes(descrSearchText) ) {
  catList.innerHTML = kittenOne;
}

if( kittenTwoDesc.includes(descrSearchText) ) {
 catList.innerHTML = kittenTwo;
}

if( kittenThreeDesc.includes(descrSearchText) ) {
 catList.innerHTML = kittenThree;
}

// Validar la información de la raza

const razaSearchText = js_in_search_raza.value;

