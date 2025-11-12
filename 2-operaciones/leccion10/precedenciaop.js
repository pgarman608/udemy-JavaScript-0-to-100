/**
 * Aqui veremos el orden en el que se hacen las operaciones JavaScript
 * 
 * Siempre es de izquierda a derecha y tienen un orden de ejecucion:
 * 
 * 1. Los parentesis
 * 2. Las multiplicaciones y divisiones
 * 3. Sumas y restas
 */

let operacion = 4 + ( 6 * 4 + ( 6 - 3 ) ) / 2 + 1;

// Paso 1: Se resuelve el paréntesis más interno (6 - 3)
// Resultado: (6 - 3) = 3
// Ahora la operación queda: 4 + (6 * 4 + 3) / 2 + 1

// Paso 2: Se realiza la multiplicación dentro del siguiente paréntesis
// (6 * 4) = 24
// Queda: 4 + (24 + 3) / 2 + 1

// Paso 3: Se suma dentro del paréntesis
// (24 + 3) = 27
// Queda: 4 + 27 / 2 + 1

// Paso 4: Se realiza la división
// 27 / 2 = 13.5
// Queda: 4 + 13.5 + 1

// Paso 5: Se resuelven las sumas de izquierda a derecha
// 4 + 13.5 = 17.5
// 17.5 + 1 = 18.5

console.log(operacion);
