const elMayor = (a, b) => (a > b ) ? a : b;
const tieneMembrecia = ( miembro ) => miembro ? '2 dolares' : '10 dolares';

console.log( elMayor(10, 15) );
console.log( tieneMembrecia(true) );

const amigo = true;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')()
]

console.log(amigoArr);

const nota = 65;

const grado = ( nota >= 95 ) ? 'A+' :
              ( nota >= 90 ) ? 'A' :
              ( nota >= 85 ) ? 'B+' :
              ( nota >= 80 ) ? 'B' :
              ( nota >= 75 ) ? 'C+' :
              ( nota >= 70 ) ? 'C' : 'F'