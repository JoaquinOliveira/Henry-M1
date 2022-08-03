'use strict'

function BinarioADecimal(num) {
 //Primera solución con método:
return parseInt(num, 2)}
/*Segunda solución con for:
let sum = 0 // creo una variable para hacer la suma
let pos = 0 // creo una variable para elevar la posición
for (let i = num.length -1; i >= 0; i--) { //empiezo a recorrer el num dado por parametro, de derecha a izquierda
  sum += Math.pow(2, pos) * num[i] // resuelvo que la suma, es la suma entre la elevación de 2 a la posición por el recorrido de la iteración
  pos++ // voy cambiando la posición, que se que son 8.
}
return sum} */

/*Tercera solución dando vuelta directamente el num y recorriendo el array de izq a derecha.

let array = [], sum = 0;
array = num.split('').reverse();
for (let i = 0; i < array.length; i++) {
  sum += Math.pow(2, i) * array[i]
}
return sum}*/
/*Cuarta solución: 
var decimal = 0, i = 0, resto;
  
  while (num != 0) {
    resto = num % 10;
    num = Number.parseInt(num / 10);
    decimal += resto * Math.pow(2, i);
    ++i;
  }
return decimal
}*/


function DecimalABinario(num) {
// primera opción con método://
return num.toString(2)}
/* segunda opción:
let bin = []
while (num > 0) {
  bin.unshift(num % 2);
  num = Math.floor(num/2)}
  return bin.join('')
} */
/*tercera opción: 
let bin = []
while (num > 0) {
  bin.push(num % 2);
  num = Math.floor(num/2)}
  return bin.reverse().join('')
}*/
/*cuarta opción:
let array = []
while (num != 0) {
  let residuo = num%2;
  num = Math.floor(num/2)
  array.unshift(residuo)
}*/

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}