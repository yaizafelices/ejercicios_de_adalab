# EJERCICIOS MÓDULO 1.5 DISEÑO RESPONSIVE

## EJERCICIOS 1.5.4 MOBILE FIRST

1.  Dados los siguientes diseños, maquetar la web aplicando las mediaqueries necesarias.

- Aspecto de la web en una pantalla de 480px
- Aspecto de la web en una pantalla entre 480px y 1000px
- Aspecto de la web a pantalla completa (por encima de 1000px)

2. Implementa una columna central
   Vamos a hacer algo más "real" y probamos a implementar esta "columna central". En un HTML tendremos un contenedor con:
   - Un título
   - Uno o dos párrafos de texto
     Y vamos a plantear 3 escenarios (de pequeño a grande) según esta guía:
     Vamos a empezar con el CSS de móvil e iremos ajustando los estilos según dispongamos de mayores tamaños de pantalla:

- Por defecto:
  1. Nuestro contenedor tendrá 20px de margen a cada lado
  2. El título estará en negrita y a 32px
  3. El texto de los párrafos estará a 18px con un interlineado de 24px
- De 768px en adelante: 1. Nuestro contenedor tendrá 30px de margen superior y 40px de margen a cada lado 2. El título estará en negrita y a 28px 3. El texto de los párrafos estará a 16px con un interlineado de 20px
  De 1140px en adelante:
  Nuestro contenedor tendrá 190px de margen superior y margen automático a cada lado, con un ancho máximo de 750px
  El título estará en negrita y a 42px
  El texto de los párrafos estará a 24px con un interlineado de 32px
