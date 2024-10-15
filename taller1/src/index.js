//Dos variables lógicas
var activo = true;
var tieneAcceso = false;
//Dos variables numéricas
var mil = 1000;
var valorTarifa = 10090;
var años = 57;
//Dos variables any
var saludar = "hello";
var modeloCarro = 1999;
var anioConfiguracion = true;
//Dos variables string
var nombre = "fabian";
var apellidos = "Escobar Gabiaria";
/* Cree una plantilla de strings para mostrar un mensaje de bienvenida al usuario luego de
registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por
registrarte”. Este template debe usar dos variables, nombres y apellidos */
var mensajelook = "Bienvenida ".concat(nombre, " ").concat(apellidos, " a nuestro sitio web, gracias por registrarte.");
console.log(mensajelook);
