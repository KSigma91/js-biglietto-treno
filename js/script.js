// Km che l'utente vuole percorrere
const treno = prompt("Quanti km vuoi percorrere?");
console.log(treno);

// Età del passeggero 
const eta = prompt("Quanti anni hai?");
console.log(eta);

// Prezzo del biglietto al Km 
let risultato;

// Sconto del 20% per i minorenni
const scontoMin = 0.21 * 20 / 100;
console.log(scontoMin);

// Sconto del 40% per gli over 65
const scontoOver = 0.21 * 40 / 100;
console.log(scontoOver);


/*
if ( condizione booleano ) {
    //fai se vero
    //fai se vero
    //fari se vero
} else {
   //fai se fals
    //fai se falso
    //fari se falso
}

// sconto del 20% per i minori
// sconto del 40% per gli over 65
//if annidato
if ( condizione 1 ) {
    //fai se vero cond1

} else if ( condizione 2) {
   //fai se vero cond 2

} else {
    //fai negli altri casi
    // fai quando cond 1 e cond2 sono entrambe false
}
*/


if (eta < 18) {
// sconto 20% --> andiamo a riga 58 (salto)
    risultato = treno * scontoMin;
    console.log(risultato);
} else if (eta > 65) {
// sconto 40%
    risultato = treno * scontoOver;
    console.log(risultato);
} else {
// no sconto
    risultato = (treno * 0.21);
    console.log(risultato);
}

// Prezzo finale del biglietto 
document.getElementById("mio_id").innerHTML = "Il costo del tuo biglietto è di: " + risultato + " &euro;";

