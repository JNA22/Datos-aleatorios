function getRandom() {
    let start = 7;
    let end = 17;
    // Primero obten el selector donde caerá el número
const cont = document.getElementById('cont');
// Esta función genera un número aleatorio
const randNum = () => Math.floor( Math.random() * (end - start + 1)) + start;
// Cada 5 segundos cambia el valor
setInterval(function(){ 
  cont.innerHTML = '';
  cont.innerHTML = randNum() + ' Voltios ' ;
  }, 
1000);

}

function getRandom1() {
    let start = 7;
    let end = 17;
    // Primero obten el selector donde caerá el número
const cont = document.getElementById('cont1');
// Esta función genera un número aleatorio
const randNum1 = () => Math.floor( Math.random() * (end - start + 1)) + start;
// Cada 5 segundos cambia el valor
setInterval1(function(){ 
  cont.innerHTML = '';
  cont.innerHTML = randNum1() + ' Voltios ' ;
  }, 
1000);
}