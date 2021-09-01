// Il computer deve generare 16 numeri casuali tra 1 e 100.

// I numeri non possono essere duplicati. 
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
// sempre compreso tra 1 e 100.

// L’utente non può inserire più volte lo stesso numero. Se il numero è presente nella lista dei numeri generati
// , la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge 
// il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.

let numeriCasualiComputer = [];
let numeriUtenteInseriti = [];

for (let i = 0; numeriCasualiComputer.length < 16; i++) {
    let numeroCasuale = getRandomInt(100);

    if ( contains(numeriCasualiComputer, numeroCasuale) !== true ){

        numeriCasualiComputer.push(numeroCasuale);

    }
}

console.log(numeriCasualiComputer.sort());


let numeroUtenteInserito = prompt("Inserisci un altro numero");

if ( contains(numeriCasualiComputer, numeroUtenteInserito) == true ){

    console.log("Hai perso")

}









// Funzione che genera numero casuale 
function getRandomInt(numeroMassimo) {
    return Math.floor(Math.random() * numeroMassimo + 1);
  }

// Funzione che controlla se un elemento è contenuto all'interno di un array
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

// // Funzione che chiede il numero per TOT volte
// function richiestaNumero (number) {
//     for (let y = 0; y < number ; y++) {
//         let numeroUtente = prompt("Inserisci un altro numero") ; 
//     }
// }
