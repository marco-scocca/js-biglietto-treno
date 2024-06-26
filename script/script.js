
let km = prompt('inserisci il numero di kilometri');

let eta = prompt('inserisci eta del passeggero');

let prezzo_base = km * 0.21;

let prezzo_finale = prezzo_base;

if (eta < 18) {
    let sconto = prezzo_base * 0.2;
    prezzo_finale = prezzo_base - sconto;
}
else if (eta > 65) {
    let sconto = prezzo_base * 0.4;
    prezzo_finale = prezzo_base - sconto;
}

