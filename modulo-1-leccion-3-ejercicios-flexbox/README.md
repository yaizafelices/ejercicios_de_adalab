# EJERCICIOS 1.3 FLEXBOX

1. Flex y flex direction
   -Crear un contenedor flex de 500px por 500px y con 6 o más elementos.
   -Hacer que se distribuyan en horizontal o vertical
   -Indicar cuál es el eje principal

2. FLEX WRAP
   Teniendo una lista de 10 a 15 imágenes de 200x100 px, hacer un bloque flexbox donde las imágenes se distribuyan por el eje horizontal y se vayan apilando uno detrás de otro.

3. Justify content y align items
   Hacer un menú horizontal con un contenedor flex de 100px de alto
   Las opciones de menú serán:
   -Home
   -Proyectos
   -Equipo
   -Blog
   -Contacto
   Hacer que se distribuyan horizontalmente ocupando todo el espacio disponible, que la primera opción esté a 20px del borde izquierdo, y la última esté a 20px del borde derecho
   Todos los textos deben aparecer centrados verticalmente en el contenedor de 100px
   El espacio restante debe usarse para separar las opciones de menú, unas de otras

4. Order
   Hacer un listado de noticias con imagen, título y párrafo de contenido
   Meterlas en un contenedor flex y hacer que se distribuyan en dos columnas
   Elegir una noticia, por ejemplo, la última, y ponerla como destacada, en primer lugar y ocupando las dos columnas

5. Flex, grow, shrink y basis
   Hacer una página con <header>, <main> y <footer> y hacer que aunque haya poco contenido el footer siempre está abajo de la página y el main ocupe todo el espacio disponible. Si hubiese mucho contenido el footer debe colocarse tras el main, de forma natural.
   Pista: Tendremos que apoyarnos en min-height y vh para realizar este ejercicio.

6. Crear página con FlexBox
   Convertir la imagen anterior a código usando HTML y CSS y lo que habéis aprendido hoy de Flexbox. Los requisitos son los siguientes:
   Las medidas tienen que ser relativas, es decir, los elementos de la página deben adaptarse al ancho de la ventana del navegador web. Si el tamaño de la ventana aumenta, el tamaño de los elementos debe aumentar.
   El ancho del conjunto entero debe ser del 100% con un ancho máximo de 960px
   Cada bloque debe de crearse con una etiqueta HTML5 (header, footer, aside...) y debe tener un título que esté centrado (como aparece en la imágen). El bloque central (que sería un article), en vez de tener un título, tendrá un párrafo con un texto aleatorio, podéis escribir dentro de él lo que queráis.

7. Otra página con Flexbox
   Convertir la imagen anterior a código usando HTML y CSS y lo que habéis aprendido hoy de Flexbox. Los requisitos son los siguientes:
   En este caso si el tamaño de la ventana aumenta solo aumentará el tamaño del bloque central, el bloque gris de la izquierda y el grupo que compone la puntuación, texto y estrella de la derecha siempre tendrán el mismo tamaño (ejemplo abajo)
   El ancho del conjunto entero debe ser del 100% con un ancho máximo de 840px. Para el bloque gris de la izquierda debéis buscar una imagen cuadrada y colocarla ahí
   No os preocupeis por el tamaño de cada elemento, lo importante es que el resultado tenga una composición similar
   Para redondear los bordes debéis usar border-radius con unidades en píxel (por ejemplo, border-radius: 5px)
   Si tenéis cualquier duda, preguntad.

8. Página completa
   Crear una página con un texto simple centrado que ocupe el 100% de la pantalla hasta un máximo de 600 píxeles. Este texto deberá tener un título, un autor y una fecha de creación organizado de la siguiente forma.
   Además deberá tener una cabecera con un fondo que ocupe toda la pantalla y un contenido que ocupe el mismo ancho que el texto. A su vez, tendrá que tener también un footer que se quede pegado en la parte inferior de la página. Cuando haya poco texto se mantendrá ahí y cuando aparezca mucho más texto se irá hacia abajo, siempre al final de la página.
   Ejemplo de la página cuando el texto es largo
   Ejemplo de la página cuando el texto es corto
   Es importante utilizar flexbox para los elementos del header de la página y el footer. Si tenéis cualquier duda, preguntad.
