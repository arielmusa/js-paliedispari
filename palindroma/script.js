/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const userWord = prompt("Inserisci una parola");

// utilizzo il ciclo for per prendere una lettera alla volta e le aggiungo a una nuova variabile
// dopo verifico se la nuova variabile equivale alla variabile iniziale

/**
 * scopri se una parola è palindroma
 * @param {string} word
 * @returns true se è palindroma, false se non lo è
 */
function isPalindroma(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    currentLetter = word[i];
    reverseWord += currentLetter;
    console.log(reverseWord);
  }
  if (reverseWord === userWord) return true;
  else return false;
}

console.log(isPalindroma(userWord));
