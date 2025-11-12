/**
 * Vamos a ver las diferencias entre la creacion de variables de var,
 * let y cons.
 * 
 * Si se prueba es recomendable probarlo de 1 a 1 por los errores que puedan aparecer.
 * 
 * Todas las formas de crear variables se pueden crear varias en la misma linea
 */

var ejex = 1, ejey = 2, ejez = 10;

/**
 * 1. var
 * Estas variables tienen un alcance global o de funcion.
 * Es decir, nos permite acceder a esta variable desde cualquier parte de una funcion
 * o global si se ha declarado afuera de una funcion.
 */

function fnVar() {
    if(true){
        var suma = (10+2);
    }
    //Nos deja devolver la suma que se encuentra dentro del if
    return suma;
}

console.log(fnVar());

/**
 * 2. let
 * A diferencia de var estas variables solo son visibles en el bloque en el que se crearon.
 * Actualmente son muy usadas.
 */

function fnLet() {
    if (true) {
        let suma = (10+2);
    }
    //No nos deja devolver la suma que se encuentra dentro del if
    return suma;
}

console.log(fnLet());
/**
 * 3. const
 * Estas variables seran constantes y no se puede modificar despues de su asignacion.
 */

const PI = 3.1415;

console.log(PI);

//No nos deja modificar la constante PI
PI = 4;

console.log(PI);
