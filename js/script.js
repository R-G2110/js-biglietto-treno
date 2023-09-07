/*Passaggi:
1. Salvare in 2 variabili nel prompt l'inserimento dei chilometri da percorrere e l’età del passeggero.

2. Calcolare il prezzo del biglietto in base ai km da percorrere.

3. Controllare l'età se è designato allo sconto e di conseguenza applicarlo. 

4. Arrotondare il prezzo con massimo 2 decimali.

5. Creare la stringa di output.

6. Effettuare l'innerHTML dell'output nel tag designato.
*/

const km = parseInt(prompt("Inserisci i chilometri da percorrere"));
const age = parseInt(prompt("Inserisci l'età del passeggero"));
const minor = 18;
const senor = 65;
let message;
let prezzoBiglietto;

prezzoBiglietto = (km * 0.21);
if (isNaN(km)){
	message = "Attenzione! il numero dei chilometri da percorrere inserito non è corretto!"
} else if (isNaN(age)) {
	message = "Attenzione! l'età del passeggero inserito non è corretto!"
} else if (age < minor) {
	prezzoBiglietto = (prezzoBiglietto - ((prezzoBiglietto * 20) / 100));
	message = "Il costo del biglietto è pari a €" + (prezzoBiglietto.toFixed(2));
} else if (age > senor) {
	prezzoBiglietto = (prezzoBiglietto - ((prezzoBiglietto * 40) / 100));
	message = "Il costo del biglietto è pari a €" + (prezzoBiglietto.toFixed(2));
}

document.getElementById('output').innerHTML = message;

console.log(km, age);
console.log(prezzoBiglietto);
console.log(message);
