//Aqui veremos como funciona la herencia en JavaScript.
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
}
/**
 * La herencia nos facilita la reutilización de código, mejora la organización 
 * y permite crear jerarquías lógicas entre objetos. 
 */
class empleado extends Persona{
    
    #departamento;
    /**
     * La funcion super nos permite llamar a un constructor de la clase 
     * hija para inicializar los atributos de dicha clase.
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
}

//Aquí un breve ejemplo.

let ingJefe = new empleado("Andres", "Perez","Ingieneria");

console.log(ingJefe.nombre);
console.log(ingJefe.apellidos);
console.log(ingJefe.departamento);