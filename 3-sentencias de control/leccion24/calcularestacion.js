//Aqui haremos un ejercicio para saber que estacion del año estamos segun el mes del año con las sentencia if else

//1. Primero crearemos la variables tanto del mes como de la estacion

let mes = 2;

let estacion;
/**
 * 2. Comprobamos la variable de mes y guardamos la estacion
 * Si el mes es 1, 2 , 12 es invierno
 * Si es mes es 3, 4, 5 es Primavera
 * Si el mes es 9, 10, 11 es Otoño
 * Si el mes es 6, 7, 8 es Verano
 * Si no es ninguno de esos numeros el valor es incorrecto
 */
if (mes == 1 || mes == 2 || mes == 12) {
    
    estacion = "Invierno";

} else if (mes == 3 || mes == 4 || mes == 5) {
    
    estacion = "Primavera";

} else if (mes == 9 || mes == 10 || mes == 11) {
    
    estacion = "Otoño";

}else if (mes == 6 || mes == 7 || mes == 8) {

    estacion = "Verano";

} else {

    estacion = "Valor incorrecto";

}

//3. Mostraremos la estacion en la consola

console.log(estacion);
