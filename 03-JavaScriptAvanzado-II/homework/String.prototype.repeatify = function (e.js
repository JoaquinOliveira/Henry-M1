String.prototype.repeatify = function (entero) {
    if (entero < 0) {return `Error al recibir ${entero}, pues es menor a 0`};
    if (entero === 0) {return "''"}
        else return this.repeat(entero)}


console.log('hola'.repeatify(3));


/*Shapes
Crea un objeto llamado shape que tenga una propiedad type y un método getType.
Ahora defini una función Triangle cuyo prototipo sea shape. 
Los objetos creados con Triangle deberían tener tres propiedades: a, b y c.
Que representan cada lado del triángulo. type debe ser Triangle.
Agregá un nuevo método al prototipo llamado getPerimeter.

Probá tu solución con el siguiente código:*/




let shape = {
    type: getType(){return  },    
}

shape.prototype.triangle = function (a, b, c) {     
}


var t = new Triangle(1, 2, 3);
t instanceof Triangle
Shape.prototype.isPrototypeOf(t);
t.getPerimeter();
t.getType();