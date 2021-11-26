//Date permite manejar fechas
const diaHoy = new Date();
// console.log(typeof diaHoy)

Date.now();

console.log(diaHoy)

// const cumple = new Date('1-5-1994');
const cumple = new Date('2 5 1994');
// to string
cumple.toString()

let valor = cumple;

valor = cumple.getMonth();
valor = cumple.getDate();
valor = cumple.getDay();
valor = cumple.getFullYear();
valor = diaHoy.getHours();
valor = cumple.getMinutes();
valor = cumple.getTime();
valor = cumple.getFullYear();
valor = cumple.setFullYear(2001);
valor = cumple.getFullYear();

console.log(valor);