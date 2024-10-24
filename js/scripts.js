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
  if(textA.length){
    console.log(textA.charAt(randomText) )
  }else{
    console.log('error')
  }
  
}

wordText('xavier'); */

function wordText(textA) {
  const randomText = Math.floor(Math.random() * textA.length);

  console.log(textA.charAt(randomText));
}

wordText('ayuda');
/* 

*/

//3- Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga. Si ambas palabras tienen la misma longitud,

function twoText(first, second) {
  if (first.length > second.length) {
    return first;
  } else if (first.length < second.length) {
    return second;
  }
  return 'Si son iguales';
}

const resultTwoText = twoText('zapatos', 'pato');
console.log(resultTwoText);

//4- Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".

function generateWord(textOne, textTwo, textThree) {
  let newWord = '';
  newWord += textOne.charAt(Math.floor(Math.random() * textOne.length));
  newWord += textOne.charAt(Math.floor(Math.random() * textOne.length));

  newWord += textTwo.charAt(Math.floor(Math.random() * textTwo.length));
  newWord += textTwo.charAt(Math.floor(Math.random() * textTwo.length));

  newWord += textThree.charAt(Math.floor(Math.random() * textThree.length));
  newWord += textThree.charAt(Math.floor(Math.random() * textThree.length));

  return newWord;
}

const resultnewWord = generateWord('Hola', 'Adios', 'mano');
console.log(resultnewWord);

//5- Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".

function account(user) {
  const acc = user.indexOf('@');
  const nick = user.substring(0, acc); // (0, acc)
  const gmail = user.substring(acc + 1); // (acc + 1)

  return ' El usuario es ' + nick + ' El dominio es ' + gmail;
}

const newAcc = account('dorian@gmail.com');
console.log(newAcc);

//6- Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs

function fiveWords(word) {
  if(word.length !==5){
    return "La palabra deberia tener 5 letras"
  }
  return word.charAt(0).toLowerCase() + word.charAt(1).toUpperCase() + word.charAt(2).toLowerCase() + word.charAt(3).toUpperCase() + word.charAt(4).toLowerCase()


}

const resultFiveWords = fiveWords('perro');
console.log(resultFiveWords);

//7- Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".

function fullname(name, lastName) {
  let text1 = name.charAt(0).toUpperCase();
  let text2 = name.substring(0, text1);
  let last2 = lastName.charAt(0).toUpperCase();
  let final = lastName.substring(1, 5) + Math.round(Math.random() * 100);

  console.log(text1 + text2 + last2 + final);
}

fullname('xavier', 'perez');

//8- Crea una función que reciba 2 verbos en infinitivo. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

function verb(word1, word2){
  let verb1 = "";
  let verb2 = "";


  if(word1.endsWith("ar")){
    verb1 = `El verbo ${word1} es la primera conjugación`;
  }else if(word1.endsWith("er")){
    verb1 = `El verbo ${word1} es la primera conjugación`;
  }

  if(word2.endsWith("ar")){
    verb2 = `El verbo ${word2} es la segunda conjugación`;
  }else if(word2.endsWith("er")){
    verb2 = `El verbo ${word2} es la segunda conjugación`;
  }
  return `${verb1} y ${verb2}`
}

const resultVerb = verb("correr","caminar")
console.log(resultVerb)

//9- Crea una función que reciba una palabra de 4 letras y devuelva la palabra invertida. Por ejemplo, si recibe "casa", deberá devolver "asac".

function invertWord(word) {
  let reverseWord = '';

  reverseWord += word.charAt(3);
  reverseWord += word.charAt(2);
  reverseWord += word.charAt(1);
  reverseWord += word.charAt(0);

  return reverseWord;
}

const resultFourWords = invertWord('casa');
console.log(resultFourWords);


/* function invertWord(word) {
const reverseWord = word.charAt(3) + word.charAt(2) + word.charAt(1) + word.charAt(0);

return reverseWord;
}
const resultInvertedWord = invertWord('casa');
console.log(resultInvertedWord); */


//10- Crea una función que reciba 3 palabras y calcule cuántos caracteres tienen en total. Por ejemplo, si recibe "Hola", "Mundo" y "Javascript", deberá imprimir 19.

function average(word1, word2, word3) {
  let total = word1.length + word2.length + word3.length;

  console.log(total);
}
average('Hola', 'Mundo', 'Javascript');

//11- Crea una función que reciba una frase y devuelva la frase con el formato de título, es decir, que cada palabra comience con mayúscula. Por ejemplo, "hola mundo" se convertiría en "Hola Mundo".

 function letters(nickA) {
  const spaceLetters = nickA.indexOf(" ");
  const firstLetters = nickA.charAt(0).toUpperCase();
  const restLetters1 = nickA.substring(1,spaceLetters)
  const secondLetters = nickA.charAt(spaceLetters+1).toUpperCase();  
  const restLetters2 = nickA.substring(spaceLetters+2)
  
  return firstLetters + restLetters1 + " " + secondLetters + restLetters2
  
}

resultNickA = letters('hola mundo');
console.log(resultNickA); 

//12- Crea una función que reciba un nombre y un apellido y devuelva las iniciales en mayúsculas. Por ejemplo, si recibe "Carlos Pérez", deberá devolver "C.P.".

function complete(name, lastName) {
  let analysis = name.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase() + '.';
  return analysis;
}

analysis = complete('carlos', 'pérez');
console.log(analysis);

//13- Crea una función que reciba 3 palabras y calcule el promedio de la longitud de esas palabras. Por ejemplo, si recibe "hola", "adiós" y "mundo", el promedio sería 4.67.

function names(word1, word2, word3) {
  let all = word1.length + word2.length + word3.length;
  result = all / 3;

  return result;
}

const what = names('hola', 'adiós', 'mundo');
console.log(what);

//14- Crea una función que reciba un número de teléfono de 10 dígitos (como "1234567890") y lo formatee de la siguiente manera: "(123) 456-7890".

function numberS(numberA) {
  let allNumber = '';

  allNumber +=
    '(' +
    numberA.charAt(0) +
    numberA.charAt(1) +
    numberA.charAt(2) +
    ')' +
    numberA.charAt(3) +
    numberA.charAt(4) +
    numberA.charAt(5) +
    '-' +
    numberA.charAt(6) +
    numberA.charAt(7) +
    numberA.charAt(8) +
    numberA.charAt(9);

  return allNumber;
}

const resultNumber = numberS('1234567890');
console.log(resultNumber);

//15- Crea una función que reciba una palabra de 4 letras y la devuelva en orden inverso, duplicando cada letra. Por ejemplo, si recibe "hola", devolvería "aalloohh".

function average4(word) {
  let allAverage = '';

  allAverage += word.charAt(3);
  allAverage += word.charAt(3);
  allAverage += word.charAt(2);
  allAverage += word.charAt(2);
  allAverage += word.charAt(1);
  allAverage += word.charAt(1);
  allAverage += word.charAt(0);
  allAverage += word.charAt(0);

  return allAverage;
}

let al = average4('hola');
console.log(al);

//16- Crea una función que reciba un número de dos dígitos y devuelva true si ambos dígitos son pares. Por ejemplo, si recibe 24, devolvería true, pero si recibe 23, devolvería false.

/*
function numberTrueFalse(number){
  const num1 = Math.floor(number/10);
  const num2 = number % 10;

  if(num1 % 2 === 0 && num2 % 2 === 0){
    return true;
  }
    return false
}
const resulTrue = numberTrueFalse(22);
console.log(resulTrue);
 */

function numberTrueFalse(number) {
  const allTrue = String(number).charAt(0);
  const allTrue2 = String(number).charAt(1);

  if (allTrue % 2 === 0 && allTrue2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const resulTrue = numberTrueFalse(22);
console.log(resulTrue);




//17- Crea una función que reciba dos palabras de 4 letras y verifique si contienen las mismas letras en diferente orden, por ejemplo "amor" y "mora"

function content(wordOne, wordTwo){
  const firstWord = wordTwo.includes(wordOne.charAt(0))
  const secondWord = wordTwo.includes(wordOne.charAt(1))
  const thirdWord = wordTwo.includes(wordOne.charAt(2))
  const fourWord = wordTwo.includes(wordOne.charAt(3))

    return firstWord && secondWord && thirdWord && fourWord
  
  
}

const resultContent = content("amor","mora")
console.log(resultContent);




//18- Crea una función que reciba un string y un número n, y devuelva los primeros n caracteres del string (puedes usar el método slice).

function table(word,number) {
 
  return word.substring(0, number)
  
}
const resultWord = table("Hola mundo",4)
console.log(resultWord);

//19- Crea una función que reciba una frase y una palabra, y te diga si la palabra está o no en la frase

/* const word = "xavier";

console.log(word.includes("p"));

 */

function statement(word1, word2) {
  if (word1.includes(word2))  {
    return "La palabra está en la frase";
  }
  return "La palabra no está en la frase"
  
}
themeA = statement('El sol brilla tras las nubes',"nubes");
console.log(themeA);


//



/* function statement(name) {
  if (name.includes('nubes')) {
    return 'nubes esta en la frase';
  }
  return 'nubes no esta en la frase';
}
themeA = statement('El sol brilla tras las nubes.');
console.log(themeA); */




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

const word = 'Hola';

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
