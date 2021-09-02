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



let numeroMassimo;
let bombe;



const difficoltà = ["facile", "medio", "difficile"];

let difficoltàScelta = prompt("Inserisci livello difficoltà tra: facile, medio, difficile").trim().toLowerCase();

console.log(difficoltàScelta.trim().toLowerCase())
while (difficoltàScelta.length == 0 || !difficoltà.includes(difficoltàScelta) ) {

    let difficoltàScelta = prompt("Hai inserito un livello di difficoltà inesistente, inserisci un livello difficoltà tra: facile, medio, difficile")

}

switch (difficoltàScelta) {

    case "facile":
        bombe = 2;
        numeroMassimo = 10;
        break;
    
    case "medio":
        bombe = 3;
        numeroMassimo = 10;
        break;

    case "difficile":
        bombe = 4;
        numeroMassimo = 10;
        break;
    
    default:
        bombe = 2;
        numeroMassimo = 10;
        break;

}
let livello = numeroMassimo - bombe ;

console.log(bombe)
console.log(numeroMassimo)
console.log(livello)

// while (numeriCasualiComputer.length < bombe) {
//     let numeroCasuale = getRandomInt(numeroMassimo);

//     if ( contains(numeriCasualiComputer, numeroCasuale) !== true ){

//         numeriCasualiComputer.push(numeroCasuale);

//     }
// }

// console.log(numeriCasualiComputer.sort());

// while ( numeriUtenteInseriti.length < livello ) {
//     let numeroUtente = parseInt(prompt("Inserisci un numero"));

//     while (numeroUtente < 1 || numeroUtente > numeroMassimo || isNaN(numeroUtente) 
//         || ( numeriUtenteInseriti.includes(numeroUtente) == true)) {

//             if ( ( numeriUtenteInseriti.includes(numeroUtente) == true) ) {
//                 numeroUtente = parseInt(prompt( numeroUtente + "è gia stato inserito! Inserisci nuovamente un numero"));

//             } else if ( isNaN(numeroUtente) ) {

//                 numeroUtente = parseInt(prompt("Hai inserito un valore non numerico ! Inserisci nuovamente un numero"));

//             } else if ( numeroUtente < 1 || numeroUtente > numeroMassimo ) {

//                 numeroUtente = parseInt(prompt("Perfavore inserisci un numero compreso tra 1 e " + numeroMassimo +  "! Inserisci nuovamente un numero")); 

//             } 
            
//         }

//         if ( numeriCasualiComputer.includes(numeroUtente)) {
//             alert ("Mi dispiace hai perso!! Il tuo punteggio finale è: " + numeriUtenteInseriti.length);
//             numeriUtenteInseriti.length = livello ;
//         } else {
//             numeriUtenteInseriti.push(numeroUtente);
//             if (numeriUtenteInseriti.length == livello){
//                 alert("Complimenti, hai Vinto !!")
//             }
//         }
// }



// console.log(numeriUtenteInseriti);




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

