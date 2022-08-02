'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
/*it('should return 2', function() {
    expect(BinarioADecimal('10')).toBe(2);
  });
  it('should return 7', function() {
    expect(BinarioADecimal('111')).toBe(7);
  });

  // 111 y tiene que ser 7.

0 0 0 0 0 1 1 1 
2 ^ 0 = 1 + 1



let pos = 0
let suma = 0
for (let i = num.length -1; i >= 0; i --){
  suma += Math.pow(2, pos)*num[i];
  pos++
}
return suma
}*/

return parseInt(num, 2) }

function DecimalABinario(num) {
  // tu codigo aca
/*t('should return "100"', function() {
    expect(DecimalABinario(4)).toBe('100');
  });
  it('should return "111"', function() {
    expect(DecimalABinario(7)).toBe('111');
  })
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
return num.toString(2)}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}