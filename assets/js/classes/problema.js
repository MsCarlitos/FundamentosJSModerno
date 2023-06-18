const carlos = {
    nombre: 'Carlos',
    edad: 27,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`)
    }
}
const fher = {
    nombre: 'Fernanado',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`)
    }
}

// carlos.imprimir()

function Persona( nombre, edad = 10 ) {
    console.log('Se ejecuto esta linea...');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`)
    }
}
const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 37);
console.log(maria)
melissa.imprimir()