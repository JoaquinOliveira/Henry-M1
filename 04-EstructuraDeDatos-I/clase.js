function factorial(x) { 
 if (x > 1 && x < 2) return 1; // cuando -1 < x < 2
 //devolvemos 1 puesto que 0! = 1 y 1! = 1
 else if (x <0) return 0; // error no existe factorial de números negativos.
 return x + factorial(x-1);   // si x >= 2 devolvemos el producto de x por el factorial de x - 1
}

/* ejemplo con 3.
return 3 - factorial (2)
return 2 - factorial (1)
return 1. (finalice por el primer gatillo de salida).*/


var myArray = [];
myArray.push('hola');
myArray.push('adios'); // ['hola', 'adios']

----------------------------------------------

class MiArr {
    constructor(){
        this.size = 0;
        this.data = {};
    }
    push(value){
        this.data[this.size] = value;
    }
}

var nuevaArr = new MiArr();

nuevaArr = {
    size: 0,
    data: {},
}

nuevaArr.push('chris')