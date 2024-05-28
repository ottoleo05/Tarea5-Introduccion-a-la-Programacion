
let usuario0 = {
    nombre: 'Paola',
    apellido: 'Ortiz',
    email: 'paola@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    estado: true,
    dpi: '1234567890',
    recuperarClave: function() {
        console.log('Recuperar clave...');
    },
    cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
        this.direccion.municipio = nuevoMunicipio;
        this.direccion.calle = nuevaCalle;
        this.direccion.numero = nuevoNumero;
        console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${this.direccion.municipio}, ${this.direccion.calle}, ${this.direccion.numero}.`);
    }
};

let usuario1 = {
    nombre: 'Paolo',
    apellido: 'Ortega',
    email: 'paolo@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    estado: true,
    dpi: '0987654321',
    recuperarClave: function() {
        console.log('Recuperar clave...');
    },
    cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
        this.direccion.municipio = nuevoMunicipio;
        this.direccion.calle = nuevaCalle;
        this.direccion.numero = nuevoNumero;
        console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${this.direccion.municipio}, ${this.direccion.calle}, ${this.direccion.numero}.`);
    }
};

let usuario2 = {
    nombre: 'Pedro',
    apellido: 'Pérez',
    email: 'pedro@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    estado: true,
    dpi: '1122334455',
    recuperarClave: function() {
        console.log('Recuperar clave...');
    },
    cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
        this.direccion.municipio = nuevoMunicipio;
        this.direccion.calle = nuevaCalle;
        this.direccion.numero = nuevoNumero;
        console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${this.direccion.municipio}, ${this.direccion.calle}, ${this.direccion.numero}.`);
    }
};

let usuario3 = {
    nombre: 'Pablo',
    apellido: 'González',
    email: 'pablo@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    estado: true,
    dpi: '2233445566',
    recuperarClave: function() {
        console.log('Recuperar clave...');
    },
    cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
        this.direccion.municipio = nuevoMunicipio;
        this.direccion.calle = nuevaCalle;
        this.direccion.numero = nuevoNumero;
        console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${this.direccion.municipio}, ${this.direccion.calle}, ${this.direccion.numero}.`);
    }
};

let usuario4 = {
    nombre: 'Patricia',
    apellido: 'Martínez',
    email: 'patricia@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    estado: true,
    dpi: '3344556677',
    recuperarClave: function() {
        console.log('Recuperar clave...');
    },
    cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
        this.direccion.municipio = nuevoMunicipio;
        this.direccion.calle = nuevaCalle;
        this.direccion.numero = nuevoNumero;
        console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${this.direccion.municipio}, ${this.direccion.calle}, ${this.direccion.numero}.`);
    }
};

let usuario5 = {
    nombre: 'Pamela',
    apellido: 'López',
    email: 'pamela@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    estado: true,
    dpi: '4455667788',
    recuperarClave: function() {
        console.log('Recuperar clave...');
    },
    cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
        this.direccion.municipio = nuevoMunicipio;
        this.direccion.calle = nuevaCalle;
        this.direccion.numero = nuevoNumero;
        console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${this.direccion.municipio}, ${this.direccion.calle}, ${this.direccion.numero}.`);
    }
};


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
