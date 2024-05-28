class Usuario {
    constructor(nombre, apellido, email, municipio, calle, numero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = {
            municipio: municipio,
            calle: calle,
            numero: numero
        };
    }

    recuperarClave() {
        console.log(`La clave de ${this.nombre} ${this.apellido} ha sido recuperada.`);
    }

    cambiarDireccion(nuevoMunicipio, nuevaCalle, nuevoNumero) {
        this.direccion.municipio = nuevoMunicipio;
        this.direccion.calle = nuevaCalle;
        this.direccion.numero = nuevoNumero;
        console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${this.direccion.municipio}, ${this.direccion.calle}, ${this.direccion.numero}.`);
    }
}

let usuario0 = new Usuario("Paola", "Ortiz", "paola@company.ru", "Jocotenango", "Calle ancha", 25);
let usuario1 = new Usuario("Paolo", "Ortega", "paolo@company.ru", "Jocotenango", "Calle ancha", 25);
let usuario2 = new Usuario("Pedro", "Pérez", "pedro@company.ru", "Jocotenango", "Calle ancha", 26);
let usuario3 = new Usuario("Pablo", "González", "pablo@company.ru", "Jocotenango", "Calle ancha", 27);
let usuario4 = new Usuario("Patricia", "Martínez", "patricia@company.ru", "Jocotenango", "Calle ancha", 28);
let usuario5 = new Usuario("Pamela", "López", "pamela@company.ru", "Jocotenango", "Calle ancha", 29);

console.log(usuario0);
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);
console.log(usuario5);

usuario0.recuperarClave();
usuario1.recuperarClave();
usuario2.recuperarClave();
usuario3.recuperarClave();
usuario4.recuperarClave();
usuario5.recuperarClave();

/**Problema I:

Los usuarios fueron creados con variables separadas para cada propiedad.
No se incluyó funcionalidad (métodos) en los usuarios.
La estructura de los datos es desordenada y difícil de manejar a medida que se añaden más usuarios.

Problema II:

Los usuarios se definen como objetos con propiedades agrupadas.
Se incluyó un método (recuperarClave) dentro de cada objeto usuario.
La estructura es más coherente y ordenada, facilitando la lectura y el mantenimiento del código.
Es más fácil añadir o modificar propiedades y métodos en un objeto. */

/** Para los usuarios y cualquier desarrollador es mucho mas facil y coherente como se crean los usuarios en el problema II */