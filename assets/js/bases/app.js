// console.log('Hola Mundo');

let a1 = 10;
var b1 = 20;
const c1 = 30;

// c = 20; // no se puede hacer
a1 = 20;
b1 = 30;

// Manera de declarar multiple variable
let a = 10,
    b = 20,
    c = 'hola ',
    d = 'Spiderman',
    x = a + b;

console.log(x)

console.log(a);
console.warn(b);
console.error(c);

console.log('a', a);
console.log('b', b);
console.log('c', c);

console.log({ a });
console.log({ b });
console.log({ c });

console.log('%c Mis variables', 'color: blue; font-weight: bold');

console.table({ a, b, c, d, x })

const saludo = c + d;

console.log(saludo);

alert('Hola desde app.js');

console.log(miNombre)

var miNombre = 'Carlos Mendoza'