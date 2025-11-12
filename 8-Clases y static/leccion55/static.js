//Aqui veremos como funciona la sobreescritura de metodos de clases en JavaScript
class Persona {

    #nombre;
    #apellidos;

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
     * Los metodos estaticos son aquellos que se pueden realizar sin 
     * instanciar un objeto de una clase para poder usarlo.
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

console.log(Persona.saludos(ingJefe));
