let a = 10;

if( a >=  10){
    console.log('a es mayor o igual a 10');
} else {
    console.log('a es menor a 10');
}

console.log('Fin del programa.');

const hoy = new Date();
const dia = hoy.getDate();
console.log({dia});

if( dia === 0 ){
    console.log('Domingo');
} else if( dia === 1 ) {
        console.log('Es lunes');
    // if( dia === 1 ){
    //     console.log('Es lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if( dia === 2 ) {
    console.log('Martes')
} else {
    console.log('no es lunes, ni martes o domingo...');
}

dia = 3;

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

const diasLetras2 = [ 'domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado' ];

console.log(diasLetras[dia] || 'Dia no definido');
console.log(diasLetras2[dia] || 'Dia no definido');