
//1- Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. */
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

//2- Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.

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


//3- Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga. Si ambas palabras tienen la misma longitud, 


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


//4- Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".


function generateWord(textOne, textTwo, textThree){
  let newWord = '';
  newWord += textOne.charAt(Math.floor(Math.random() * textOne.length));
  newWord += textOne.charAt(Math.floor(Math.random() * textOne.length));

  newWord += textTwo.charAt(Math.floor(Math.random() * textTwo.length));
  newWord += textTwo.charAt(Math.floor(Math.random() * textTwo.length));

  newWord += textThree.charAt(Math.floor(Math.random() * textThree.length));
  newWord += textThree.charAt(Math.floor(Math.random() * textThree.length));
  
  return newWord;

}

const resultnewWord = generateWord('Hola','Adios','mano');
console.log(resultnewWord);

//5- Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".



function email(gmail){
  const correo = gmail.indexOf("@");

  return gmail.indexOf("");

}
const resultEmail = email("doran@gmail.com");
console.log(resultEmail); 


//6- Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs


function fiveWords(word) {
  let fiveText = "";

  fiveText += word.charAt(0).toUpperCase();
  fiveText += word.charAt(1).toLowerCase();
  fiveText += word.charAt(2).toUpperCase();
  fiveText += word.charAt(3).toLowerCase();
  fiveText += word.charAt(4).toUpperCase();

  return fiveText;
}
  

const resultFiveWords = fiveWords("perro")
console.log(resultFiveWords);



//7- Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".





//8- Crea una función que reciba 2 verbos en infinitivo. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".





//9- Crea una función que reciba una palabra de 4 letras y devuelva la palabra invertida. Por ejemplo, si recibe "casa", deberá devolver "asac".







//10- Crea una función que reciba 3 palabras y calcule cuántos caracteres tienen en total. Por ejemplo, si recibe "Hola", "Mundo" y "Javascript", deberá imprimir 17.






//11- Crea una función que reciba una frase y devuelva la frase con el formato de título, es decir, que cada palabra comience con mayúscula. Por ejemplo, "hola mundo" se convertiría en "Hola Mundo".




//12- Crea una función que reciba un nombre y un apellido y devuelva las iniciales en mayúsculas. Por ejemplo, si recibe "Carlos Pérez", deberá devolver "C.P.".







//13- Crea una función que reciba 3 palabras y calcule el promedio de la longitud de esas palabras. Por ejemplo, si recibe "hola", "adiós" y "mundo", el promedio sería 4.67.






//14- Crea una función que reciba un número de teléfono de 10 dígitos (como "1234567890") y lo formatee de la siguiente manera: "(123) 456-7890".




//15- Crea una función que reciba una palabra de 4 letras y la devuelva en orden inverso, duplicando cada letra. Por ejemplo, si recibe "hola", devolvería "aalloohh".




//16- Crea una función que reciba un número de dos dígitos y devuelva true si ambos dígitos son pares. Por ejemplo, si recibe 24, devolvería true, pero si recibe 23, devolvería false.




//17- Crea una función que reciba dos palabras de 4 letras y verifique si contienen las mismas letras en diferente orden, por ejemplo "amor" y "mora"




//18- Crea una función que reciba un string y un número n, y devuelva los primeros n caracteres del string (puedes usar el método slice).




//19- Crea una función que reciba una frase y una palabra, y te diga si la palabra está o no en la frase












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
console.log(word.startsWith('Ho'))          // cuando inicia la palabra dara true
 
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
