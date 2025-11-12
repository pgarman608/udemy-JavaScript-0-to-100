/**
 * Aqui vermeos como podemos crear un metodos dentro del constructor de objetos en JavaScript
 * 
 * Es parecido a crear un atributo del objeto pero debemos de 
 * guardar una funcion parecido a lo que seria la leccion 39.
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

let padre = new Personas("Manolo","Sanchez","ms1980@gmail.com");

console.log(padre.nombreCompleto());