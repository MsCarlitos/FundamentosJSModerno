const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip:'1080, 90265',
        ubicacion:'Malibu, California',
    },
    "ultima-pelicula": 'Infinity War'
}

console.log( personaje );
console.log( 'Nombre:', personaje.nombre );
console.log( 'Nombre:', personaje['nombre'] );
console.log( 'Edad:', personaje.edad );
console.log( 'Coords:', personaje.coords );
console.log( 'Lat:', personaje.coords.lat );

console.log('No. de trajes:', personaje.trajes.length)
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length-1])

let x = 'vivo';
console.log( 'Vivo:', personaje[x] );

console.log('Ultima Pelicula:',personaje['ultima-pelicula'])

// Más detalles

delete personaje.edad;
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// personaje = true;
console.log( personaje );

Object.freeze( personaje );
personaje.dinero = 10000000000;
personaje.casado = false;

personaje.direccion.ubicacion = 'Hermosillo Sonora';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
console.log( propiedades );

const valores = Object.values( personaje );
console.log( valores );
