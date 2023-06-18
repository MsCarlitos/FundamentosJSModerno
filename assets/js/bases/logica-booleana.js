
const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true 

console.log( !regresaTrue() ); // false
console.log( !regresaFalse() ); // true

console.warn('And'); // Si todos los valores son verdaderos

console.log( true && true ); // true
console.log( true && false ); // false

console.log('===========');
console.log( regresaFalse() && regresaTrue() ); // false
console.log( regresaTrue() && regresaFalse() ); // false

console.warn('Or'); // Si alguno de los valores es verdadero

console.log( true || false ); // true
console.log( false || false ); // false
console.log('===========');
console.log( regresaFalse() || regresaTrue() ); // true
console.log( regresaTrue() || regresaFalse() ); // true

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true ;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });

if( true || true || true || false ){
    console.log('Hacer algo')
} else {
    console.log('Hacer otra cosa');
}