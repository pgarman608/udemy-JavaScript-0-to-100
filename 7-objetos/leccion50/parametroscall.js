/**
 * Aqui vermeos como podemos ejecutar metodos de un objeto con 
 * otros datos diferentes como de otro objeto en JavaScript.
 * 
 * Tambien podemos ver los parametros que podemos pasar por un 
 * metodo para añadir informacion. Esto nos da una flexibilidad 
 * y reutilibilidad mayor capaz de realizar diferentes acciones 
 * según los valores que recibe.
 * 
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {string} email 
 */
function Personas(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (profesion,telefono) {

        return this.nombre + " " + this.apellido + ", " + profesion + ", "  + telefono;
    
    }
}

let madre = {
    nombre: "Ana",
    apellido: "Montes"
}

let padre = new Personas("Manolo","Sanchez","ms1980@gmail.com");

console.log(padre.nombreCompleto("programador",676543212));

console.log(padre.nombreCompleto.call(madre,"programadora",655987775));