//Aqui veremos como podemos usar los getters de los objetos en JavaScript.

let persona = {

    nombre: "Pablo",
    apellido: "Garcia",
    ciudad: "Granada",
    edad: 22,
    
    /**
     * Los getters nos permite recoger los atributos del objeto como queramos 
     * sin la necesidad de acceder directamente a estos atributos.
     */

    get nombreCompleto(){

        return this.nombre + " " + this.apellido;

    }
}

console.log(persona.nombreCompleto);
