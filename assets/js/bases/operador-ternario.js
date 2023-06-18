/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */
// Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, Hoy abrimos a las XX

// if( dia === 0 || dia === 6 ) {
// if( [0,6].includes(dia) ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

// if( horaActual >= horaApertura ) {
//     mensaje = 'Esta Abierto';
// } else {
//     mensaje = `Esta cerrado, Hoy abrimos a las ${horaApertura}`;
// }


horaApertura = ([0,6].includes(dia)) ? 9 : 11
mensaje = ( horaActual >= horaApertura ) ? 'Esta Abierto': `Esta cerrado, Hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje })
