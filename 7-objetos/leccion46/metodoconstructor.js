/**
 * Aqui vermeos como podemos crear un metodo que construya objetos en JavaScript
 * 
 * Gracias a que en javascript podemos guardar funciones en variables podemos 
 * usuar eso para crear una funcion con la que podamos crear objetos ya que 
 * se guardaran como tipo de dato objeto.
 * 
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {string} email 
 */

function Personas(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}
/**
 * Se crean poniendo la palabra reservada "new" despues el nombre de la 
 * funcion con los parametros necesarios.
 */
let padre = new Personas("Manolo","Sanchez","ms1980@gmail.com");

console.log(padre);

let madre = new Personas("Alicia","Montes","montAli@gmail.com");

console.log(madre);
