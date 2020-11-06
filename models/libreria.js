var Libreria = function(id, nombre, tipo, ubicacion) {

    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.ubicacion = ubicacion;
}

Libreria.prototype.toString = function() {
    return 'id:' + this.id + "| nombre:" + this.nombre;
}


//mostrar todas las librerias
Libreria.allLibrerias = [];


//añadir todas las librerias
Libreria.add = function(addLibreria) {
    Libreria.allLibrerias.push(addLibreria)
}

var libreriaUno = new Libreria(1, 'luna lunera', 'infantil', [-0.064425, -78.452223]);
var libreriaDos = new Libreria(2, 'mars', 'informatica', [-0.060619, -78.451740]);
var libreriaTres = new Libreria(3, 'xtra cook', 'cocina', [-0.063740, -78.451423]);

Libreria.add(libreriaUno);
Libreria.add(libreriaDos);
Libreria.add(libreriaTres);

module.exports = Libreria;