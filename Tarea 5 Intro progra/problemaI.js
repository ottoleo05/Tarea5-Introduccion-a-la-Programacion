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
