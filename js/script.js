// Km che l'utente vuole percorrere
const treno = prompt("Quanti km vuoi percorrere?");
console.log(treno);

// Età del passeggero 
const eta = prompt("Quanti anni hai?");
console.log(eta);

// Prezzo del biglietto al Km 
const prezzo = '0.21';
console.log(prezzo);

// Sconto del 20% per i minorenni
const scontoMin = (treno * prezzo) * 20 / 100;
console.log(scontoMin);

// Sconto del 40% per gli over 65
const scontoOver = (treno * prezzo) * 40 / 100;
console.log(scontoOver);

// Prezzo finale del biglietto 
document.getElementById(mio_id).innerHTML

