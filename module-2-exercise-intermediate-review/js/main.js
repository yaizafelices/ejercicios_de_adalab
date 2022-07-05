'use strict';

const btnUpdate = document.querySelector('.js_btn');
const face = document.querySelector('.js_face');
const select = document.querySelector('.js_select');
const main = document.querySelector('.js_main');


//Generará un número aleatorio de 100 como máximo y si es un número par colocará el color de fondo del amarillo correcto (#ffcc00) y si es impar, usaremos el naranja fuego chileno (#ff9900).

const getRandom = (max) => {
    return parseInt(Math.random() * max);  
};

// console.log(getRandom(100)); Esto para probar que funciona

const changeBackground = () => {
    const randomNumber = getRandom(100);
     console.log(randomNumber);
    if (randomNumber %2 === 0){
        // console.log("es par");
        main.classList.add('yellow');
        main.classList.remove('orange');
    }
    else {
        // console.log("es impar");
        main.classList.add('orange');
        main.classList.remove('yellow');
    }
}


//Esto es lo del principio para que te cambie la cara cuando seleccionas lo que sea.


function updateMain(){
    const selectValue = select.value;
    face.innerHTML = selectValue;
};


function handleClick(ev) {
    ev.preventDefault();
    updateMain();
    changeBackground();
};

btnUpdate.addEventListener("click", handleClick);




