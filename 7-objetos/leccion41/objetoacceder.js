// Aqui veremos qcomo podemos acceder a todas las caracteristicas en JavaScript

let persona = {

    nombre: "Pablo",
    apellido: "Garcia",
    ciudad: "Granada",
    edad: 22,

    nuevoMetodo: function (){

        return this.nombre + " " + this.apellido;

    }
}

/**
 * Ademas de poder acceder a las propiedades con un . y poniendo 
 * el nombre de la propiedad lo haremos con claves.
 */

console.log(persona.nombre);
console.log(persona["apellido"]);
console.log("-------------------");

/**
 * Podemos movernos entre las porpiedades con un bucle for in como 
 * en el de ejemplo. 
 */
for (propiedad in persona) {
    
    console.log("Nombre: " + propiedad + ", info: " + persona[propiedad]);
    
}