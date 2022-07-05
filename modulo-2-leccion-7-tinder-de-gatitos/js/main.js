'use strict';

const nameInput = document.querySelector('.js_input_name');
const buttonSave = document.querySelector('.js_save_button');

function handleClickSave (event) {
    event.preventDefault();
    //Tomar los valores de los inputs

    const petData = {
        name : nameInput.value,
    }

    const html = `
    <li>
    <article class="card">
      <h2 class="card__title">${petData.name}</h2>
      <img src="http://placekitten.com/200/300" alt="Foto de Misifú" class="card__img" />
      <p class="card__description">
        Muy amable
      </p>
      <p class="card__description">
      <dl class="features">
        <dt class="features__concept">Pelo</dt>
        <dd class="features__value">Negro. Pelo corto y suave</dd>
        <dt class="features__concept">Comida favorita</dt>
        <dd class="features__value">Albóndigas</dd>
        <dt class="features__concept">Carácter</dt>
        <dd class="features__value">Muy afable</dd>
      </dl>
      </p>
    </article>
  </li>`;
/*tengo que crear listElement como constante*/
  listElement.innerHTML += html;
}

buttonSave.addEventListener ('click', handleClickSave);

/*
const cat ={
name: 'Misifu',
age: 19,
image: 'https://placekitten.com/200/300',
speak: function () {
    console.dir(this);
    console.log (`Holaaa, soy ${this.name}¿Qué tal estas?`);
},
render: function () {
    const html = `<p>name: ${this.name}, age:${this.age}</p>`
}
};

cat.age = 15;

cat.hairColor = "Negro"

const nameElement = document.querySelector('.js_name');
nameElement.innerHTML = `${cat.name} (Edad: ${cat.age}años)`;

const dog = {};
dog.name = 'Akanne';
dog.age = 9;
dog.image = '';


dog['hairColor'] = 'rubio'; 

const namePropierty = 'hairColor';
const valuePropierty = 'rubio';

dog[namePropierty] = valuePropierty;


dog.speak = () => {
    console.log('Holis');
}

dog.speak(); */


