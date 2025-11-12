// Aqui veremos que son los objetos y algunas de sus caracteristas en JavaScript

/**
 * Ahora podremos ver que en los objetos tambien podemos poner 
 * funciones tambien llamados metodos.
 */
let persona = {

    nombre: "Pablo",
    apellido: "Garcia",
    ciudad: "Granada",
    edad: 22,

    nuevoMetodo: function (){

        return this.nombre + " " + this.apellido;

    }
}

// Podremos mostraremos algunos de los atributos del objeto.

console.log(persona.nombre);
console.log(persona.apellido);

// Ahora tambien podremos acceder al metodo del objeto creado anteriormente.

console.log(persona.nuevoMetodo());
