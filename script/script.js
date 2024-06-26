let number_km = prompt('inserisci il numero di kilometri');
let eta = prompt('inserisci eta del passeggero');
let sconto = 0;
if (eta < 18) {
    sconto = 20;
}
else if (eta > 65) {
    sconto = 40;
}

document.getElementById('template_literal').innerText = `${first_name} ${second_name}`;
let full_string = `${first_name} ${second_name}`;