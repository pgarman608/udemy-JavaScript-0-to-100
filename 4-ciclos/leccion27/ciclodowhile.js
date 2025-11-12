/**
 * Aqui veremos que es y como funciona los ciclos do-while en JavaScript
 * (Este codigo es sacado de la pagina web de w4schools.com)
 */
let texto = "";

let index = 0;

/**
 * Basicamente los ciclos do-while ejecutan un codigo repetidamente siempre 
 * que cuando terminen de ejecutar ese codigo la condicion se cumpla.
 * 1. Se realiza el codigo dentro del bucle.
 * 2. Se comprueba que la condicion es correcta.
 * 3. Repite 1 y 2.
 * 
 * PD: Seria mejor utilizar un for en este caso ya que hace los mismo en menos espacio.
 */
do {
  texto += "El numero es " + index + "<br>";
  index++;
}while (index < 10)

document.getElementById("prueba").innerHTML = texto;