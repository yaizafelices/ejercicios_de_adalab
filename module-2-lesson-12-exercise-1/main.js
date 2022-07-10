// 2.12.1
// 1. Inflar las notas
// ¡Ya tenemos las notas del examen! Los profes, como somos así, las hemos metido en un array: const marks = [5, 4, 6, 7, 9];. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa de la buena :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo map para crear un nuevo array inflatedMarks con las notas modificadas. Finalmente, mostraremos en la consola las notas modificadas para ver que funciona correctamente. ¡Al lío!

const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);

// 2. Saludar es de buena educación
// Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const hello = (name) => "Bienvenida Yolanda" ;
 const sayHello = names.map(hello);

 console.log(sayHello);

// 3. Gracias por confiar en nosotros
// Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
// Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
// Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map?

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
  ];

const welcome = (users) => {
    if(users.isPremium === true){"Bienvenida" +  users.name}
    else{"Bienvenida Yolanda"}}

const sayWelcome = users.map(welcome);

console.log(sayWelcome);


// 2.12.3
// 1. Encuentra el usuario
// a) En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo.

const users3 = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
  ];

  const index = users3.find((pins) => users3.pin === 5232);

  console.log(index);


// b) Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array de usuarios? Usa el método findIndex para encontrar su posición y bórralo usando splice.