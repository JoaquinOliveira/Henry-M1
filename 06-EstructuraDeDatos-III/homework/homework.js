"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  let newNode = new BinarySearchTree(value)
  if (value > this.value) {
    if (!this.right) this.right = newNode;
    else this.right.insert(value);
  } else {
    if (!this.left) this.left = newNode;
    else this.left.insert(value);
  }
};

BinarySearchTree.prototype.size = function () {
    //count += (this.left ? this.left.size() : 0) + (this.right ? this.right.size() : 0)
    let count = 1
    if (this.left) {count += this.left.size()}
    else count += 0
    if (this.right) {count += this.right.size()}
    else count += 0
    return count
    }
/* PROFESOR LO RESOLVIO ASI: 

if (this.value === null) return 0;
if (this.left === null & this.right === null) return 1;
if (this left === null & this.right !== null) return 1 + this.right.size();
if (this.right === null & this.left !== null) return 1 + this.left.size();
return 1 + this.right.size() + this.left.size() */

BinarySearchTree.prototype.contains = function (value) {
      if(this.value === value){
      return true;
    }
    if(value < this.value && this.left !== null){
      return this.left.contains(value);
    }else if(value > this.value && this.right !== null){
      return this.right.contains(value)
    }else{
      return false;
    }
  
  }
  /*el profe lo resolvió así:
  if (value > this value){
  if (this.left === null) return false
  else return this.left.contains(value)

  if (this.right === null) return false
  else return this.left.contains(value)}
  */


BinarySearchTree.prototype.depthFirstForEach = function (cb, type) {
  if (!type || type === 'in-order') {
    if (this.left) this.left.depthFirstForEach(cb, type) //this.left && this.left.depthFirstForeach(cb) es igual, pues si el this left es falso no se ejecuta el segundo.
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, type)}
  else if (type === 'pre-order') {
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, type);
    if (this.right) this.right.depthFirstForEach(cb, type)}
  else {
    if (this.left) this.left.depthFirstForEach(cb, type);
    if (this.right) this.right.depthFirstForEach(cb, type);
    cb(this.value)}
} 

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
    cb(this.value)
    if (this.left) array.push(this.left) 
    if (this.right) array.push(this.right)
    array.length && array.shift().breadthFirstForEach(cb, array)}
    
    /*let nextNode = array.shift()
    if (nextNode) nextNode.breathFirstForeach(cb,array)*/
  


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
