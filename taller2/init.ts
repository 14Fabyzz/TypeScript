
//  Cree una función con un paraḿetro opcional tipo boolean, uno por defecto tipo string, y uno obligatorio de tipo number. Haga el llamado a la función.

function registrarUsuario (
    id:number,
    nombre: string = "anonimo",
    esActivo?: boolean
): string { // string: Indica el tipo de dato que la función va a devolver (en este caso, un string).
    const estado = esActivo? "activo" : "inactivo";
    return `Usuario ID: ${id}, Nombre: ${nombre}, Estado: ${estado}`
}

// Invocacion de la función
console.log(registrarUsuario(103, "María", true));

//Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el llamado a la función.

function sumar(a:number,b:number): number  {
    return a + b;
}

console.log(sumar(2,3));

// funcion flecha

const suma = (a:number,b:number): number => {
    return a + b;
}

console.log(suma(19,1));


//Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el mensaje “HOLA ADSI”

setTimeout(() => {
    console.log("HOLA ADSI");
    
}, 5000);


// Cree una función flecha sin argumentos que imprima “Hola ADSI”

const saludar: () => string = () => {
    return `HOLA ADSI`;
}

// Llamado a la función
console.log(saludar());


/* Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál
fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el
parámetro y omita la palabra reservada return. */

const mostrarEdad = (edad: number) => `la edad pasada como argumento es ${edad}`;

/* Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,
imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra
reservada return. */

const producto = (a: number, b: number): number => a * b;

console.log(producto(4,5));

/* Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima
el valor devuelto por la función. 
La función debe tener dos instrucciones, una donde se declare e inicialice la variable módulo que contendrá el módulo de los dos números 
y la otra donde se retorne la variable módulo.
 Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones. */

 const modulo = (x:number, y:number): number => {
    const resultadomodulo = x % y;
    return resultadomodulo;

 };

 console.log(modulo(100,8));
 
 // Desestructuración de Objetos
// Definición de la interfaz para el usuario
interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    ciudad: string;
}

// Creación del objeto usuario
const usuario: Usuario = {
    id: 1,
    nombre: 'Fabián',
    edad: 25,
    ciudad: 'Bogotá'
};

// Desestructuración del objeto
const { nombre, edad } = usuario;

// Uso de las variables desestructuradas
console.log(`Nombre: ${nombre}, Edad: ${edad}`); // Salida: Nombre: Fabián, Edad: 25


// Desestructuración de Arreglos
// Definición de un arreglo de números
const numeros: number[] = [10, 20, 30, 40, 50];

// Desestructuración del arreglo
const [primero, segundo] = numeros;

// Uso de las variables desestructuradas
console.log(`Primer número: ${primero}, Segundo número: ${segundo}`); // Salida: Primer número: 10, Segundo número: 20


// Desestructuración Anidada de Objetos

// Definición de un objeto producto
// Definición de tipos para las especificaciones del motor y carro
interface Motor {
    tipo: string;
    potencia: number;
}

interface Especificaciones {
    color: string;
    tipo: string;
    motor: Motor;
}

interface Carro {
    marca: string;
    modelo: string;
    anio: number;
    especificaciones: Especificaciones;
}

// Creación del objeto carro
const carro: Carro = {
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
const { 
    marca, 
    modelo, 
    especificaciones: { 
        color, 
        tipo, 
        motor: { potencia } 
    } 
} = carro;

// Uso de las variables desestructuradas
console.log(`Marca: ${marca}`); // Salida: Marca: Toyota
console.log(`Modelo: ${modelo}`); // Salida: Modelo: Corolla
console.log(`Color: ${color}`); // Salida: Color: Rojo
console.log(`Tipo: ${tipo}`); // Salida: Tipo: Sedán
console.log(`Potencia del motor: ${potencia} hp`); // Salida: Potencia del motor: 130 hp
