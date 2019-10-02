// EJERCICIOS 1
// alert("Bienvenido al mundo de Javascript");

//EJERCICIO 2
//document.write("Hola mundo");

//EJERCICIO 3

/* var numero1 = 25;
var numero2 = 13;
var resultado = numero2 + numero1;
document.write("La suma de 25 + 13 es: ", resultado);
 */

//EJERCICIO 4

/*  var nombre = prompt("¿Cual es su nombre?");
 document.write ("Hola amigo ", nombre); */

// EJERCICIO 5
/* 
var numero1 = prompt("Ingrese el primer número");
var numero2 = prompt("Ingrese el segundo número");

if (numero1 > numero2) {
    document.write("El numero: ", numero1, " es el mayor");
} else if (numero1 < numero2) {
    document.write("El numero: ", numero2, " es el mayor");
} else if (numero1 == numero2) {
    document.write("Los numeros ingresados son Iguales");
} */

// EJERCICIO 6

var numero1 = prompt("Ingrese el primer número");
var numero2 = prompt("Ingrese el segundo número");
var numero3 = prompt("Ingrese el tercer número");

if (numero1 > numero2) {
    if (numero1 > numero3) {
        document.write("El numero ", numero1, " es el mayo");
    } else {
        document.write("El numero ", numero3, " es el mayo");
    }
} else if (numero2 > numero3) {
    document.write("El numero ", numero2, " es el mayo");
} else{
    document.write("El numero ", numero3 , " es el mayo");
}