// //1. Chihuahas, chihuahas por todas partes
// Sigamos trabajando con el API que muestra una imagen aleatoria de un perrito Dog API para crear una página que muestre fotos sólo de perros de la raza chihuahua
// Consulta la documentación de esta API específicamente puedes hacer la petición a la siguiente url: https://dog.ceo/api/breed/chihuahua/images/random. Primero verifica en tu navegador que devuelve esta petición.
// Añade un botón a la página con el título 'Enséñame un Chihuahua' que al pulsarlo se haga una petición al servidor de una imagen aleatoria y aparezca una imagen de un Chihuahua. Añade una nueva función getChihuahua() que incluya esta petición(puedes basarte en el ejemplo de la clase).



function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        const imgDog = document.querySelector('.js-image-dog');
        imgDog.src = data.message;
        imgDog.alt = 'Un perro';
      });
  }
  const btnDog = document.querySelector('.js-btn-dog');
  btnDog.addEventListener('click', getDogImage);

  function getChiguaguaImage() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
      .then((response) => response.json())
      .then((data) => {
        const imgChig = document.querySelector('.js-image-chiguagua');
        imgChig.src = data.message;
        imgChig.alt = 'Un chiguagua';
      });
  }
  const btnChiguagua = document.querySelector('.js-btn-chiguagua');
  btnChiguagua.addEventListener('click', getChiguaguaImage);