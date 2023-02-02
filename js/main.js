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
<h3 class="card_title> ${kittenName}</h3>
<h4 class="card_race"> ${kittenRace}</h4>
<p class="card_description"> ${kittenDesc}</p>
</li>`;


catList.innerHTML = kittenOne;
console.log (catList);

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`;

catList.innerHTML += kittenTwo;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;

catList.innerHTML += kittenThree;