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
     * Aqui voy a hacer ejemplo de un metodo de la clase padre 
     * y despues sobreescribirla en la clase hija.
     * 
     * @returns {string}
     */
    nombrecompleto(){

        return this.#nombre + " " + this.#apellidos;

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
     * Con poner el nombre del mismo metodo de la clase padre y los mismos 
     * parametros ya estariamos sobreescribiendo el metodo.
     * 
     * Gracias a super tambien podemos acceder a los metodos de la clase padre.
     * 
     * @returns {string}
     */
    nombrecompleto(){

        return this.#departamento +  ": " + super.nombrecompleto();

    }
}

//Aquí un breve ejemplo.

let ingJefe = new empleado("Andres", "Perez","Ingieneria");

console.log(ingJefe.nombrecompleto());