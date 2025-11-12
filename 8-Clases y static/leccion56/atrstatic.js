//Aqui veremos como funciona los atributos estaticos de clases en JavaScript
class Persona {

    #nombre;
    #apellidos;

    //Los atributos staticos nos permiten tener variables que se 
    //puedan acceder desde la clase en vez del objeto.
    
    static contadorPersonas = 0;

    /**
     * @param {string} nombre 
     * @param {string} apellidos 
     */
    constructor(nombre, apellidos) {

        this.#nombre = nombre;
        this.#apellidos = apellidos;

    }
    get nombre(){

        return this.#nombre;

    }
    set nombre(nombre){

        this.#nombre = nombre;
    
    }
    get apellidos(){

        return this.#apellidos;
    
    }
    set apellidos(apellidos){

        this.#apellidos = apellidos;
    
    }
    /**
     * @returns {string}
     */
    nombrecompleto(){

        return this.#nombre + " " + this.#apellidos;

    }
    /**
     * @param {Persona} persona 
     */
    static saludos(persona){

        console.log("Buenos dias, " + persona.nombre + "!!");
    
    }
}
class empleado extends Persona{
    
    #departamento;
    /**
     * @param {string} nombre 
     * @param {string} apellidos 
     * @param {string} departamento 
     */
    constructor(nombre, apellidos, departamento){

        super(nombre,apellidos);
        this.#departamento = departamento;

    }
    get departamento(){

        return this.#departamento;
    
    }
    set departamento(departamento){

        this.#departamento = departamento;
    
    }
    /**
     * @returns {string}
     */
    nombrecompleto(){

        return this.#departamento +  ": " + super.nombrecompleto();

    }
}

//Aquí un breve ejemplo.

let ingJefe = new empleado("Andres", "Perez","Ingieneria");
let cliente = new Persona("Pablo", "Martinez");

console.log(Persona.contadorPersonas);
