"use strict";
let activo = true;
let tieneAcceso = false;
let mil = 1000;
const valorTarifa = 10090;
let años = 57;
let saludar = "hello";
const modeloCarro = 1999;
let anioConfiguracion = true;
let nombre = "fabian";
let apellidos = "Escobar Gabiaria";
let mensajelook = `Bienvenida ${nombre} ${apellidos} a nuestro sitio web, gracias por registrarte.`;
console.log(mensajelook);
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
let animales = ["leon", "perro", "loro", "lobo", "shark"];
console.log(animales);
animales.forEach((animal) => {
    console.log(animal);
});
numeros.forEach((numero) => {
    console.log(numero);
});
animales.push("Condor");
animales.push("Snake", "Ant");
console.log(animales);
animales.unshift("bear", "Octopus", "Dolphin");
console.log(animales);
const landAnimals = ["Fox", "Elephant", "Tiger"];
let newAnimalsArray = [...animales, ...landAnimals];
console.log(newAnimalsArray);
let day = ["Monday", "tuesday", "wednesday", "thursday", "Friday"];
let lastDay = day.pop();
console.log(lastDay);
console.log(day);
let elimidados = day.slice(1, 3);
console.log(elimidados);
day.splice(2, 0, "c", "d");
console.log(day);
let edades = [18, 22, 16, 30, 15, 25];
let mayoresDeEdad = edades.filter((edad) => edad >= 18);
console.log(mayoresDeEdad);
let posicion = [1, 2, 3, 4, 5, 6, 7];
console.log(posicion[1]);
console.log(posicion[0]);
console.log(posicion[6]);
console.log(posicion[4]);
for (const element of posicion) {
    console.log(element);
}
let precios = [100, 200, 300, 400];
let precioDescuento = precios.map((precio) => precio * 0.9);
console.log(precioDescuento);
const diaSemana = {
    lunes: "Lunes",
    martes: "Martes",
    miercoles: "Miercoles",
    jueves: "Jueves",
    viernes: "Viernes",
    sabado: "Sábado",
    domingo: "Domingo"
};
console.log(diaSemana);
const unoAlNueve = {
    cero: 0,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9
};
console.log(unoAlNueve);
for (const numero in unoAlNueve) {
    console.log(unoAlNueve[numero]);
}
;
delete unoAlNueve.dos;
console.log(unoAlNueve);
console.log(unoAlNueve.uno);
console.log(unoAlNueve[2]);
unoAlNueve.uno = 11;
unoAlNueve.diez = 10;
const persona = {
    nombre: "Carlos",
    edad: 30,
};
console.log(persona);
persona.ciudad = "Bogotá";
console.log(persona);
console.log(`Nombre: ${persona.nombre}`);
persona.edad = 31;
console.log(`Edad actualizada: ${persona.edad}`);
const cantidad = 10;
for (let i = 1; i <= cantidad; i++) {
    console.log(`numero: ${i}`);
}
const altura = 5;
for (let i = 1; i <= altura; i++) {
    const espacios = ' '.repeat(altura - i);
    const asteriscos = '*'.repeat(2 * i - 1);
    console.log(espacios + asteriscos);
}
//# sourceMappingURL=index.js.map