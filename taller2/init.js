"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var salu = "Holaa";
/*
●
●
●
●
●
● Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima
el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice
la variable módulo que contendrá el módulo de los dos números y la otra donde se retorne la variable
módulo. Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones.
Investigue: Desestructuración de objetos y arreglos. Implemente 3 ejemplos prácticos diferentes a los
planteados en la guía de Typescript.
 */
//  Cree una función con un paraḿetro opcional tipo boolean, uno por defecto tipo string, y uno obligatorio de tipo number. Haga el llamado a la función.
function registrarUsuario(id, nombre, esActivo) {
    if (nombre === void 0) { nombre = "anonimo"; }
    var estado = esActivo ? "activo" : "inactivo";
    return "Usuario ID: ".concat(id, ", Nombre: ").concat(nombre, ", Estado: ").concat(estado);
}
// Invocacion de la función
console.log(registrarUsuario(103, "María", true));
//Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el llamado a la función.
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 3));
// funcion flecha
var suma = function (a, b) {
    return a + b;
};
console.log(suma(19, 1));
//Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el mensaje “HOLA ADSI”
setTimeout(function () {
    console.log("HOLA ADSI");
}, 5000);
// Cree una función flecha sin argumentos que imprima “Hola ADSI”
var saludar = function () {
    return "HOLA ADSI";
};
// Llamado a la función
console.log(saludar());
/* Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál
fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el
parámetro y omita la palabra reservada return. */
var mostrarEdad = function (edad) { return "la edad pasada como argumento es ".concat(edad); };
/* Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,
imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra
reservada return. */
var producto = function (a, b) { return a * b; };
console.log(producto(4, 5));
/* Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima
el valor devuelto por la función.
La función debe tener dos instrucciones, una donde se declare e inicialice la variable módulo que contendrá el módulo de los dos números
y la otra donde se retorne la variable módulo.
 Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones. */
var modulo = function (x, y) {
    var resultadomodulo = x % y;
    return resultadomodulo;
};
console.log(modulo(100, 8));
// Desestructuración de Objetos
var usuario = {
    id: 1,
    nombre: 'Fabián',
    edad: 25,
    ciudad: 'Bogotá'
};
// Desestructuración del objeto
var nombre = usuario.nombre, edad = usuario.edad;
// Uso de las variables desestructuradas
console.log("Nombre: ".concat(nombre, ", Edad: ").concat(edad)); // Salida: Nombre: Fabián, Edad: 25
// Desestructuración de Arreglos
// Definición de un arreglo de números
var numeros = [10, 20, 30, 40, 50];
// Desestructuración del arreglo
var primero = numeros[0], segundo = numeros[1];
// Uso de las variables desestructuradas
console.log("Primer n\u00FAmero: ".concat(primero, ", Segundo n\u00FAmero: ").concat(segundo)); // Salida: Primer número: 10, Segundo número: 20
// Desestructuración Anidada de Objetos
// Definición de un objeto producto
// Definición del objeto carro
var carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2021,
    especificaciones: {
        color: 'Rojo',
        tipo: 'Sedán',
        motor: {
            tipo: 'Gasolina',
            potencia: 130
        }
    }
};
// Desestructuración anidada del objeto carro
var marca = carro.marca, modelo = carro.modelo, _a = carro.especificaciones, color = _a.color, tipo = _a.tipo, potencia = _a.motor.potencia;
// Uso de las variables desestructuradas
console.log("Marca: ".concat(marca)); // Salida: Marca: Toyota
console.log("Modelo: ".concat(modelo)); // Salida: Modelo: Corolla
console.log("Color: ".concat(color)); // Salida: Color: Rojo
console.log("Tipo: ".concat(tipo)); // Salida: Tipo: Sedán
console.log("Potencia del motor: ".concat(potencia, " hp")); // Salida: Potencia del motor: 130 hp
