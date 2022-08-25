'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
let factor = 2
let array = [1]

while (num > 1) {
  if(num % factor === 0){
    num = num / factor
    array.push(factor)
  }
  else {
  factor++
  }
}
return array
}

/*function factorear(num, arr = [1], numerosPrimos = 2) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(num % numerosPrimos === 0){
    arr.push(numerosPrimos);
    num = num / numerosPrimos;
    return factorear(num, arr, numerosPrimos);
  } else if(num === 1) return arr 
  else {
    numerosPrimos++;
    return factorear(num, arr, numerosPrimos);
  }
}*/

function bubbleSort(array) {
  
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
/**** FORMA NO OPTIMIZADA
  for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++){
    let change = array[j];
    if (array[j] > array[j+1]){
    array[j] = array[j+1]
    array[j+1] = change
  }
}
}
return array} */

let swap = true;
while (true) {
  swap = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]){
      let aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;
      swap = true;
    }
  }
}
return array;
}




function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for (let i = 1; i < array.length; i++) {
  let aux  = array[i];
  let j = i - 1
  while (j >= 0 && array[j] > aux){
    array[j+1] = array[j]
    j--
  }
  array[j+1] = aux
}
return array
}




function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; j++) {
  let posicion = i;
  //console.log('array: ' + array + ', en posición: ' + i);
  for (let j = i + 1; j < array.length; j++) {
  //console.log(`Comparando ${array[j]} > ${array[posicion]}`)
    if (array[j] > array[posicion]) {
      j++
    }
    posicion = j}
  let posAnter = array[i];
  array[i] = array[posicion];
  array[posicion] = posAnter;
  }
  return array;
  }
// let array = [9, 8, 6, 4, 8, 15, 23, 5]
// selectionSort(array)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
