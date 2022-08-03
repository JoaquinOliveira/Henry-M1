'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
/*it('should return 2', function() {
    expect(BinarioADecimal('10')).toBe(2);
  });
  it('should return 7', function() {
    expect(BinarioADecimal('111')).toBe(7);
  });

  // 111 y tiene que ser 7. */
/* PRIMERA SOLUCION 


let pos = 0
let suma = 0
for (let i = num.length -1; i >= 0; i --){
  suma += Math.pow(2, pos)*num[i];
  pos++
}
return suma
} */

/* SEGUNDA SOLUCION 
let bin = []; dec = 0
bin = num.split('').reverse();
for (let i = 0; i <bin.length; i++) {
  dec +=bin[i] * math.pow(2,i);
}
return dec;}*/



return parseInt(num, 2) }

function DecimalABinario(num) {
  // tu codigo aca
/*t('should return "100"', function() {
    expect(DecimalABinario(4)).toBe('100');
  });
  it('should return "111"', function() {
    expect(DecimalABinario(7)).toBe('111');
  })*/

  /* PRIMERA SOLUCION 
let binario = '';
let div = 0
while (num / 2 !== 0) {
  if (num % 2 == 0) {
    binario += '0'}
  else {
    binario += '1'}
}
div = parseInt(num / 2);
num = div;

let nuevaCadena = ''
for (let i =binario.length - 1; i >= 0; i--){
  nuevaCadena += binario[i];
  }
return nuevaCadena
}*/

/*SEGUNDA SOLUCION 
let bin = []
while (num > 0) {
  bin.push (num % 2);
  num = Math.floor(num/2)}
  return bin.reverse().join('')
}
*/
return num.toString(2)}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}