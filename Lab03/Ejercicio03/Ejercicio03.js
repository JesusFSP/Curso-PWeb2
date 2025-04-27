const hoy = new Date();
const añoActual = hoy.getFullYear();
console.log(hoy.getMilliseconds());
const diaArequipa = new Date(añoActual, 3, 28);
const resta = diaArequipa - hoy
console.log(resta);
console.log(Math.ceil(resta / (1000 * 60 * 60 * 24)));