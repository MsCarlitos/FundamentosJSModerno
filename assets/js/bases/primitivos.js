// STRINGS O CADENA DE CARACTERES
// comilla sencilla
let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker';
console.log( nombre );
// comilla doble
nombre = "Tia May";
console.log( nombre );

// backticks
nombre = `Mary Jane`;
console.log( nombre );

// Para saber el tipo de variable
console.log(typeof nombre);

// BOOLEANS O BOOLEANOS

let isMarvel = false;
console.log( typeof isMarvel );

// NUMBERS O NUMEROS
let edad = 28;
console.log( typeof edad );

edad = 28.5;
console.log( typeof edad );

// UNDERFINED O INDEFINIDO
let superPoder;
console.log( typeof superPoder );

// NULL O NULLOS
let soyNull = null;
console.log( typeof soyNull );


// SYMBOL O SYMBOLOS
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
let symbol3 = Symbol();

console.log( typeof symbol1 )
console.log( symbol1 === symbol2 );
console.log( symbol3 )

