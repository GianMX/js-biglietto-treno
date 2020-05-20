// CONSOLE CALCOLO BIGLIETTO
var distanza = parseInt(prompt("Quanti chilometri vuoi percorrere ?"));
var eta = parseInt(prompt("Quanti anni hai ?"));
var prezzoAlKm = 0.21;
var prezzoBigliettoIntero = prezzoAlKm * distanza;
var testo = "Il prezzo del biglietto è ";
var euro = " &euro;";
var num = (prezzoBigliettoIntero * 0.80);
var young = num.toFixed(2);
var numold = (prezzoBigliettoIntero * 0.60);
var old = numold.toFixed(2);

// SCONTISTICA
if (eta <= 18) {
 document.getElementById('costo').innerHTML = testo + young + euro;
}else if(eta >= 65) {
 document.getElementById('costo').innerHTML = testo + old + euro;
}else{
 document.getElementById('costo').innerHTML = testo + (prezzoBigliettoIntero) + euro;
}
