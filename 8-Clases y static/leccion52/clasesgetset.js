// Aqui vamos a ver como crear getters y setters en clases en JavaScript
class Persona {
    //Para hacer una variable que sea privada deberemos poner 
    //una almohadilla y su nombre en la variable.
    #nombre;
    #apellido;
    constructor(nombre, apellidos) {
        
        this.nombre = nombre;
        this.apellidos = apellidos;

    }
    /**
     * Para hacer los setters y los getters deveremos 
     * poner get o set y despues el nombre de la variable 
     * como si fuese un metodo.
     */
    get nombre(){

        return this.#nombre;

    }
    set nombre(nombre){

        this.#nombre = nombre;

    }
}

let amigo = new Persona("francisco","Gimenez");
//Para usar un setter se puede hacer como si fuese una variable abierta de la clase.
amigo.nombre = "Manuel";
//Para usar un getter es practicamente igual que un setter.
console.log(amigo.nombre);
