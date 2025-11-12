//Aqui veremos mas tipos de datos que tenemos en JavaScript

//1. Tipo de dato: Boolean (verdadero o falso)

var blnSemaforo = true;

//2. Tipo de dato: funcion

function fnEmpty() {}

//3. Tipo de dato: clase (Se va a mostrar con el typeof como si fuese una funcion)

class clsPerson {

    constructor(nombre,apellido,telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}

//4. Tipo indefinido (No contiene ningun tipo de dato)

var xy;

//Mostraremos el tipo de las variables u otros objetos creados anteriormente

console.log(typeof(blnSemaforo));

console.log("------------");

console.log(typeof(fnEmpty))

console.log("------------");

console.log(typeof(clsPerson));

console.log("------------");

console.log(typeof(xy));
