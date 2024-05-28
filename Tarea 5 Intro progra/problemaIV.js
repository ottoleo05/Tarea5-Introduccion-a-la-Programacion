function createUser(nombre, apellido, email, municipio, calle, numero, dpi) {
    return {
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: {
            municipio: municipio,
            calle: calle,
            numero: numero,
        },
        estado: true,
        dpi: dpi,
        recuperarClave: function() {
            console.log(`Recuperar clave de ${this.nombre} ${this.apellido}...`);
        },
        cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
            this.direccion.municipio = nuevoMunicipio;
            this.direccion.calle = nuevaCalle;
            this.direccion.numero = nuevoNumero;
            console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${this.direccion.municipio}, ${this.direccion.calle}, ${this.direccion.numero}.`);
        }
    };
}

let usuario0 = createUser("Paola", "Ortiz", "paola@company.ru", "Jocotenango", "Calle ancha", 25, "1234567890");
let usuario1 = createUser("Paolo", "Ortega", "paolo@company.ru", "Jocotenango", "Calle ancha", 25, "0987654321");
let usuario2 = createUser("Pedro", "Pérez", "pedro@company.ru", "Jocotenango", "Calle ancha", 25, "1122334455");
let usuario3 = createUser("Pablo", "González", "pablo@company.ru", "Jocotenango", "Calle ancha", 25, "2233445566");
let usuario4 = createUser("Patricia", "Martínez", "patricia@company.ru", "Jocotenango", "Calle ancha", 25, "3344556677");
let usuario5 = createUser("Pamela", "López", "pamela@company.ru", "Jocotenango", "Calle ancha", 25, "4455667788");


console.log(usuario0);
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);
console.log(usuario5);


usuario0.recuperarClave();
usuario1.cambiarDireccion("Antigua Guatemala", "Calle Real", 123);
usuario2.cambiarDireccion("Ciudad Vieja", "Avenida Central", 456);
usuario3.cambiarDireccion("San Felipe", "Boulevard Principal", 789);
usuario4.cambiarDireccion("Sumpango", "Callejón de Flores", 101);
usuario5.cambiarDireccion("San Lucas", "Carretera a El Salvador", 202);
