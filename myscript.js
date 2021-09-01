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

while (numeriCasualiComputer.length < 16) {
    let numeroCasuale = getRandomInt(100);

    if ( contains(numeriCasualiComputer, numeroCasuale) !== true ){

        numeriCasualiComputer.push(numeroCasuale);

    }
}

console.log(numeriCasualiComputer.sort());


let numeroUtente;

while (contains(numeriCasualiComputer, numeroUtente) !== true && numeriUtenteInseriti.length < 84 ) {
    numeroUtente = parseInt( prompt("Inserisci un numero"));

    if ( contains(numeriUtenteInseriti, numeroUtente) === true ){

        alert("Attenzione numero gia inserito! Inserisci un nuovo numero")

    } else if (isNaN(numeriUtenteInseriti)) {

        alert("Attenzione inserisci un valore numerico")

    } else {
        numeriUtenteInseriti.push(numeroUtente);
    }

}

console.log(numeriUtenteInseriti);
console.log(numeriUtenteInseriti.length);


if (numeriUtenteInseriti.length >= 84) {
    console.log("Congratulazioni Hai VINTO !");
} else {
    console.log("Hai preso la BOMBA, mi dispaice, il tuo punteggio è stato:" + numeriUtenteInseriti.length);
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

