'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length <= 1) return array;
let right = [];
let left = [];
let pivot = (Math.floor(array.length / 2));
let pivotIndex = array.splice(pivot, 1)
for (let i = 0; i < array.length; i++){
  if (pivotIndex < array[i]) {
    right.push(array[i])
  } else {
    left.push(array[i])
  }}
return quickSort(left).concat(pivotIndex, quickSort(right))
}


function merge(left, right){
  let leftIndex = 0;
  let rightIndex = 0;
  let orderedArray = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      orderedArray.push(left[leftIndex]);
      leftIndex++
    } else {
      orderedArray.push(right[rightIndex]);
      rightIndex++}
    } 
  return orderedArray.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
  }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array;
  let half = Math.floor(array.length/2);
  let halfLeft= array.slice(0, half);
  let halfRight = array.slice(half);

  return merge(mergeSort(halfLeft), mergeSort(halfRight))
  }

  



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
