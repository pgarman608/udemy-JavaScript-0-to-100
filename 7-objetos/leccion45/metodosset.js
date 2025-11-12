//Aqui veremos como podemos usar los setters de los objetos en JavaScript.

let persona = {

    nombre: "Pablo",
    apellido: "Garcia",
    ciudad: "Granada",
    idioma: "ES",
    edad: 22,

    get nombreCompleto(){

        return this.nombre + " " + this.apellido;

    },

    get lang(){

        return this.lang;

    },

    /**
     * Los getters nos permite modificar los atributos del objeto como queramos 
     * sin la necesidad de acceder directamente a estos atributos.
     */

    set lang(lang){

        this.idioma = lang.toUpperCase();

    }
}

console.log(persona.lang);
console.log("----------");

persona.lang = "en";

console.log(persona.lang);
