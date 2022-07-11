//ESTO ES PARA QUE NOS SALGA UN ICONO DE PIEDRA PAPEL O TIJERA SPOCK O LAGARTO


fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then((response) => response.json())
  .then((data) => (document.body.innerHTML = data.result));


//ESTO ES PARA QUE NOS SALGA UN NÚMERO ALEATROIO ENTRE 0-10000

// fetch('https://api.rand.fun/number/integer?min=0&max=10000')
//   .then((response) => response.json())
//   .then((data) => (document.body.innerHTML = data.result));