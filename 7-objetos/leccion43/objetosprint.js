//Aqui veremos como podemos imprimir por pantalla las caracteristicas del objeto en cuestion en JavaScript.

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
 * 1. Manualmente 1 a 1.
 * Lo tendremos que poner a mano cada caracteristica cada vez que 
 * queramos mostrarlo.
 */

console.log("Manualmente 1 a 1");
console.log(persona.nombre + " " + persona.apellido);
console.log("--------------------");

/**
 * 2. Manualmente for in.
 * Siempre que queramos mostrar los datos tendremos que hacer un forin 
 * sobre todas las caracteristicas.
 */
console.log("Manualmente for in");
for (propiedad in persona) {

    console.log(persona[propiedad]);
    
}
console.log("--------------------");

/**
 * 3. Con la clase de Object.
 * Tendremos que llamar a la clase Object y con su metodo llamado "values" que 
 * nos da un array con todas las caracteristicas del objeto.
 */

let personaArray = Object.values(persona);

console.log("Con la clase de Object");
console.log(personaArray);
console.log("--------------------");

/**
 * 4. Con la clase de JSON.
 * Tendremos que llamar a la clase JSON y con su metodo llamado "stringify" que 
 * nos da un String con todas las caracteristicas del objeto.
 */

let personaString = JSON.stringify(persona);

console.log("Con la clase de JSON");
console.log(personaString);
console.log("--------------------");