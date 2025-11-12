/**
 * Aqui vermeos como podemos ejecutar metodos de un objeto con 
 * otros datos diferentes como de otro objeto en JavaScript.
 * 
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

let madre = {
    nombre: "Ana",
    apellido: "Montes"
}

let padre = new Personas("Manolo","Sanchez","ms1980@gmail.com");

console.log(padre.nombreCompleto.call(madre));
