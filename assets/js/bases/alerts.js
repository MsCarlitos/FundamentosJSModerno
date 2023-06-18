
// Solo en lugares donde exista pa propiedad window ej. navegador
// no funciona en node
alert('Hola mundo');

let nombre = prompt('¿Cual es tu nombre?', 'Sin nombre');

console.log( nombre );
console.log( '****' + nombre + '****' );

let seleccion = confirm('¿Estas Seguro de borrar esto?');

console.log( seleccion );

// no funciona en navegador
console.log( global ); // Solo en node con consola