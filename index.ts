//Dos variables lógicas
let activo: boolean = true;
let tieneAcceso: boolean = false;

//Dos variables numéricas
let mil:number = 1000;
const valorTarifa: number = 10090
let años:number = 57
//Dos variables any
let saludar: any = "hello";
const modeloCarro: any = 1999;
let anioConfiguracion: any =true;



//Dos variables string
let nombre: string= "fabian";
let apellidos: string = "Escobar Gabiaria";


/* Cree una plantilla de strings para mostrar un mensaje de bienvenida al usuario luego de
registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por
registrarte”. Este template debe usar dos variables, nombres y apellidos */

let mensajelook: string = `Bienvenida ${nombre} ${apellidos} a nuestro sitio web, gracias por registrarte.`;

console.log(mensajelook);

// Una variable array de números que contenga cinco elementos e imprima cada uno de sus elementos.
const numeros: number[] = [1,2,3,4,5];
console.log(numeros);

//Una variable array de strings que contenga cinco elementos e imprima cada uno de sus elementos.
let animales: string[]  = ["leon","perro","loro","lobo","shark"]
console.log(animales);

// Recorra cada array creado usando for-each e imprimiendo cada uno de sus elementos
animales.forEach((animal) => {
    console.log(animal); 
});

numeros.forEach((numero) =>{
console.log(numero);

})

//cómo eliminar elementos de un array, agregar elementos, leer y actualizar elementos.Implemente ejemplos prácticos

//agregar un elemento a un array

animales.push("Condor");
animales.push("Snake", "Ant");
console.log(animales);

// unshift añade uno o varios elementos al INICIO DE UN ARRAY Y devuelve la nueva longitud del array

animales.unshift("bear", "Octopus", "Dolphin");
console.log(animales);

const landAnimals: string[] = ["Fox", "Elephant", "Tiger"]

// concate arrays
let newAnimalsArray: string[] = [...animales,...landAnimals];
console.log(newAnimalsArray);
 

// removes elements from arrays, eliminar elemntos de un array
//pop  elimina el último elemento de un array, pop removes the last element from the array

let day: string[] = ["Monday","tuesday","wednesday","thursday","Friday"];
let lastDay = day.pop();

console.log(lastDay);
console.log(day);

let elimidados = day.slice(1,3)
console.log(elimidados);

day.splice(2, 0, "c", "d");

console.log(day);

// El método filter() crea un nuevo array con todos los elementos que pasan una prueba definida por una función
let edades: number[] = [18, 22, 16, 30, 15, 25];

// Filtrar edades mayores o iguales a 18
let mayoresDeEdad = edades.filter((edad) => edad >= 18);

console.log(mayoresDeEdad); // Output: [18, 22, 30, 25]

// Leer elementos de un array, read elements

let posicion: number[]= [1,2,3,4,5,6,7];
console.log(posicion[1]);
console.log(posicion[0]);
console.log(posicion[6]);
console.log(posicion[4]);

for (const element of posicion) {
    console.log(element);
    
}


// ACTUALIZAR CON MAP

let precios: number[] = [100, 200, 300, 400];
// Aplicar un descuento del 10% a cada precio

let precioDescuento = precios.map((precio)=> precio * 0.9);

console.log(precioDescuento);


// Declare e inicialice:
// Una variable tipo objeto cuyos valores sean los días de la semana
const diaSemana: {[key: string]: string} = {
    lunes: "Lunes",
    martes:"Martes",
    miercoles:"Miercoles",
    jueves:"Jueves",
    viernes: "Viernes",
    sabado: "Sábado",
    domingo: "Domingo"
    
}
console.log(diaSemana);


// Una variable tipo objeto cuyos valores sean los números del 0 al 9

const unoAlNueve: { [key: string]: number } = {
    cero: 0,
    uno: 1,
    dos:2,
    tres: 3,
    cuatro:4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9
}

console.log(unoAlNueve);

// Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores

for (const numero in unoAlNueve){
    console.log(unoAlNueve[numero]);
    
};


// cómo eliminar elementos clave-valor de un objeto
delete  unoAlNueve.dos;
console.log(unoAlNueve);

// cómo leer 
console.log(unoAlNueve.uno);
console.log(unoAlNueve[2]);

// actualizar valores

unoAlNueve.uno = 11;
unoAlNueve.diez = 10;

//ejemplo practico
const persona: { nombre: string; edad: number; ciudad?: string } = {
    nombre: "Carlos",
    edad: 30,
  };
  
  console.log(persona); // { nombre: 'Carlos', edad: 30 }
  
  // Agregar una propiedad opcional
  persona.ciudad = "Bogotá";
  
  console.log(persona); // { nombre: 'Carlos', edad: 30, ciudad: 'Bogotá' }
  
  // Leer propiedades
  console.log(`Nombre: ${persona.nombre}`); // Nombre: Carlos
  
  // Actualizar una propiedad
  persona.edad = 31;
  console.log(`Edad actualizada: ${persona.edad}`); // Edad actualizada: 31
  
  // Ciclos for y while en TypeScript. Implemente ejemplos prácticos}

  // Definir cantidad de iteraciones
  // ciclo for para iterar del 1 al 1o
  const cantidad: number = 10;

  for (let i: number = 1; i <= cantidad; i++) {
    console.log(`numero: ${i}`);
    
  }

  // piramide usando for

  const altura: number = 5; //altura de la piramide
  for (let i: number = 1; i <= altura; i++) {
    //imprimir espacios
    const espacios: string = ' '.repeat(altura-i);
    //impirmir asteriscos
    const asteriscos: string ='*'.repeat(2*i-1) 

    console.log(espacios + asteriscos);
  }


  // ejemplo con while
  console.log("Usando ciclo while:");
let j = 1;
while (j <= 10) {
  console.log(`Número: ${j}`);
  j++;
}
  