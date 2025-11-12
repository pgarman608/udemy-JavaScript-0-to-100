//Aqui veremos las diferencias entre los atributos estaticos y los no estaticos en JavaScript
class Persona {

    #nombre;
    #apellidos;

    static contadorPersonas = 0;
    email = "Este es mi email";

    /**
     * @param {string} nombre 
     * @param {string} apellidos 
     */
    constructor(nombre, apellidos) {

        this.contadorPersonas++;
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
/**
 * Los atributos estáticos pertenecen a la clase y se comparten entre todas las instancias.
 * Los no estáticos pertenecen a cada objeto y su valor es independiente.E
 */
console.log(Persona.contadorPersonas);
// Error: console.log(Persona.email);
console.log(cliente.email);
