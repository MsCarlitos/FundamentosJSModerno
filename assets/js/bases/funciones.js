function saludar( name ) {
    console.log( arguments );
    console.log('Hola ', name);
    return 10;
    // Esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function( name ){
    console.log('Hola ', name);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola', nombre);
}

saludar('Carlos');
saludar2('Carlos');
saludarFlecha('Carlos');
saludarFlecha2('Carlos');

function sumar(a, b) {
    return a+b;
}

const sumar2 = (a, b) => {
    return a+b;
}

const sumar3 = (a, b) => a + b;

console.log(sumar(1,2) )
console.log(sumar2(1,2) )
console.log(sumar3(1,2) )

function getAleatorio() {
    return Math.random();
}

console.log( getAleatorio )

getAleatorio2 = () => Math.random();

console.log( getAleatorio2 )