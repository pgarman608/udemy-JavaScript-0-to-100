/**
 * Aqui veremos como podemos crear una clase en Java script
 * 
 * Deberemos poner la palabra reservada "class" y despues el nombre 
 * que queramos.
 * 
 * Las clases nos permite determinar como va a funcionar un objeto 
 * en nuestro codigo.
 */

class Persona {
    /**
     * Para crear un constructor de clase deberemos poner la palabra reservada 
     * "constructor" con los parametros que queramos
     * 
     * @param {string} nombre 
     * @param {string} apellido 
     */
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Mostraremos algunos objetos creados con la clase anteriormente creada.

let mama = new Persona("Ana","Gomez");
console.log(mama);

let papa = new Persona("Andres","Rodrigez");
console.log(papa);
