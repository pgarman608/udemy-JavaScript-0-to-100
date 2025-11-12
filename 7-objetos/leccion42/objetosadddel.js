//Aqui veremos como podemos añadir y eliminar tanto metodos como atributos de los objetos en JavaScript

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
 * Para añadir caracteristicas deberemos hacer como en la leccion 40 cuando creamos 
 * el objeto y despues añadimos las caracteristicas.
 */

persona.telefono = 123123123;
persona.altura = 1.90;

/**
 * Para eliminar caracteristicas pondremos la palabra reservada "delete" y 
 * despues el objeto con la caracteristica a eliminar.
 */

delete persona.altura;
delete persona.nuevoMetodo;

//Podemos ver los cambios que hemos creado dentro del objeto creado

console.log(persona);
