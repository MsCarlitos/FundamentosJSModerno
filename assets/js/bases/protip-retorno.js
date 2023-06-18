function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

let crearPersona2 = (nombre, apellido) => ({ nombre, apellido })


const persona = crearPersona('Carlos', 'Mendoza');
const persona2 = crearPersona2('Carlos', 'Mendoza');

console.log(persona);
console.log(persona2);

function imprimeArgumentos() {
    console.log(arguments); 
}

let imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({edad, args}); 
    return args;
}

imprimeArgumentos( 10, true, false, 'Carlos','Hola');

let [ casado, vivo, nombre, saludo ] = imprimeArgumentos2( 10, true, false, 'Carlos','Hola');

console.log({ argumentos });
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Carlos', 'Mendoza');

console.log({ nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}

const imprimePropiedades = ( personaje ) => {
    console.log( 'nombre', personaje.nombre);
    console.log( 'codeName', personaje.codeName);
    console.log( 'vivo', personaje.vivo);
    console.log( 'edad', personaje.edad);
    console.log( 'trajes', personaje.trajes);
}

imprimePropiedades( tony );

const imprimePropiedades2 = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades2( tony );