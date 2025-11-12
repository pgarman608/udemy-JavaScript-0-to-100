/**
 * Aqui vermeos como podemos añadir atributos de objeto a nuestros objetos
 * 
 * JavaScript nos permite fuera de nuestro constructor y nuestros metodos 
 * del objeto añadir atributos de objeto gracias a prototype.
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {string} email 
 */

function Personas(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {

        return this.nombre + " " + this.apellido;
    
    }
}

//Aqui podemos ver un ejemplo de prototype.

Personas.prototype.telefono = 676321234;

let padre = new Personas("Manolo","Sanchez","ms1980@gmail.com");

console.log(padre.telefono);

padre.telefono = 633987643;

console.log(padre.telefono);