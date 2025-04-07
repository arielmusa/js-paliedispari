/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/**
 * inserisci min e max per generare un numero random, max non è incluso
 * @param {integer} min
 * @param {integer} max
 * @returns numero random
 */
function generateNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

/**
 * scopri se un numero è pari o dispari
 * @param {integer} number
 * @returns true se è pari, false se è dispari
 */
function isEven(number) {
  if (number % 2 === 0) return true;
  else return false;
}

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
const userPrediction = prompt(
  "La somma del tuo numero con quello del computer sarà pari o dispari?"
);
const cpuNumber = generateNumber(1, 6);

const sumNumbers = userNumber + cpuNumber;

console.log("userNumber ", userNumber);
console.log("cpuNumber ", cpuNumber);
console.log("sumNumbers ", sumNumbers);

console.log(isEven(sumNumbers));

const userPredictionBool =
  userPrediction.toLowerCase() === "pari" ? true : false;

if (userPredictionBool === isEven(sumNumbers)) {
  alert(`
        The user won!!
        user input: ${userNumber}
        cpu input: ${cpuNumber}
        sum of inputs: ${sumNumbers}
        user prediction: ${userPrediction}
        `);
} else {
  alert(`
        The user lost :(
        user input: ${userNumber}
        cpu input: ${cpuNumber}
        sum of inputs: ${sumNumbers}
        user prediction: ${userPrediction}
        `);
}
