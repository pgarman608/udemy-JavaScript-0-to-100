/**
 * Aqui veremos que es y como funciona los ciclos while en JavaScript
 * (Este codigo es sacado de la pagina web de w4schools.com)
 */
let texto = "";

let index = 0;

/**
 * Basicamente los ciclos while ejecutan un codigo repetidamente siempre 
 * que la condicion se cumpla.
 * 1. Se comprueba que la condicion es correcta.
 * 2. Se realiza el codigo dentro del bucle.
 * 3. Repite 1 y 2.
 * 
 * PD: Seria mejor utilizar un for en este caso ya que hace los mismo en menos espacio.
 */
while (index < 10) {
  texto += "El numero es " + index + "<br>";
  index++;
}

document.getElementById("prueba").innerHTML = texto;