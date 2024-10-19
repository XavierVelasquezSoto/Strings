
/* - Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en  */
/* 
function upper(textA) {
  if (textA.length > 5) {
    console.log(textA.toUpperCase());
  } else {
    console.log(textA.toLowerCase());
  }
}

upper('bienvenido');
upper('hello');
 */
function upper(textA) {
  if (textA.length > 5) {
    return textA.toUpperCase();
  } else {
    return textA.toLowerCase();
  }
}

const resultUpper1 = upper('hola');
console.log(resultUpper1);
const resultUpper2 = upper('bievenido');
console.log(resultUpper2);

//- Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.

/* function wordText(textA) {
  const randomText = (Math.floor(Math.random() * textA.length))
  if(textA && textA.length){
    console.log(textA.charAt(randomText) )
  }else{
    console.log('error')
  }
  
}

wordText('xavier'); */

function wordText(textA){
  const randomText = (Math.floor(Math.random() * textA.length))
    if(textA.length){
      return textA.charAt(randomText);
    }
    return 'error';
  
}

const resultWordText1 = wordText('xavier');
console.log(resultWordText1);


// - Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga. Si ambas palabras tienen la misma longitud, 


function twoText(first, second){
  if(first.length > second.length){
    return first;
  }else if ( first.length < second.length){
    return second;
  }
    return 'Si son iguales'
}


const resultTwoText = twoText('zapatos', 'pato')
console.log(resultTwoText);


//- Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".


function generateWord(first,second,three){
  const name = (first+second+three)
  if(){
    return Math.floor(Math.random(4)) * name.length
  }
}

const resultGenerateWord = generateWord('la','ios','no');
console.log(resultGenerateWord);






/*  
const word2 = 'palabra';

console.log(word.charAt(word.length - 1));
*/


/* 

const sayHello = (name,age) =>{
  console.log('Hola ' + name + '. Tienes ' + age + ' y el año que viene tendrás' + (Number(age) + 1) + ' años.');
}

sayHello('Dorian', 36);

const sayHello2 = (name,age) =>{
  console.log (`Hola ${name}. Tienes ${age} y el año que viene tendrás ${age + 1} años.`);
}

sayHello2('Dorian', 36);


 */














/* 
const number = 'hola';

const wordUpper = word.toUpperCase();

console.log(word);
console.log(wordUpper);

*/

/*
console.log(5 + '5');

console.log(true + '5');

console.log(5 + 'h'); // Nan(not a number)

console.log(5 + '5');

console.log(5 * true);          // true(tiene un valor de 1)

console.log(5 * false);         // false(tiene un valor de 0)

console.log(5 / false);
  */

/* 
String
Number
Boolean 
*/

/* 

const word = 'hola';
const value = 7;

console.log(value);
console.log(string(value) + 1);


const word = 'hola';
const value = 7;

console.log(Number(true));


const word = 'hola';
const value = 0;            //todo los números dan true, pero el 0 da false

console.log(Boolean(value));

 */

/*  
const value = 7;

    if(value === 7) {
    console.log('OK');
    }else{
    console.log('not ok');
}
*/

/*  
const value = 7;

    if(value % 2 === 0){
    console.log('ES PAR');
    }else{
    console.log('NO ES PAR');
}

// condiciion ? true : false

value % 2 === ? console.log('ES PAR') : console.log('NO ES PAR')


const value = 7;

return value % 2 === 0 ? 'ES PAR' : 'NO ES PAR'

*/

/*

Math.ceil(); // azul es una propiedad y moradas son metodos deben llevar parentesis ()

console.log(Math.floor(4.4));

console.log(Math.PI); // PI es el valor númerico

console.log(Math.random() * 11);

console.log(Math.floor(Math.random() * 11));

console.log(Math.floor(Math.random() * Math.PI));

const worde = 'Hola';

console.log(word.length);
  */
// charAt -> characterArt
/*  
const text = 'Hola';

console.log(world.charAt(3));
*/
//

/*  
const word2 = 'palabra';

console.log(word.charAt(word.length - 1));
*/

//
/* 
const word = xavier;

console.log(word.includes('p'));

const word3 = 'hola y adios';

console.log(word.indexOf('adios'));
 */
/* 
 const word = 'Hola y Adios';
 console.log(word.toUpperCase());

 const word = 'Hola y Adios';
 console.log(word.toLowerCase());

const word = 'Hola y Adios';
console.log(word.startsWith('Ho'))          // cuando inicia la palbra dara true
 
const word = 'Hola y Adios';
console.log(word.endsWith('adios'))    // cuando termina el texto dara false
 
const word = 'Hola y Adios';
console.log(word.endsWith('adios'))

const word = 'Hola y Adios';
console.log(word.substring(0,4))   //el segundo (4) siempre llega a uno menos por eso dice "Hola". si no pones el segundo valor empezara del número hasta el final//



const word = 'Hola y Adios';
console.log(word.endsWith('adios'))
*/

//  console.log(`${name} ha pedido una cada de ${material} de tamaño ${size}. ${note}`);

// Los strings son datos inmutables

/*  
const word = 'hola'; // lo que esta guardado en word(seria un string) no puede cambiar, por eso no es mayuscula

word.toUpperCase();

console.log(word);

//

const number = 'hola';

const wordUpper = word.toUpperCase();

console.log(word);
console.log(wordUpper);

*/
