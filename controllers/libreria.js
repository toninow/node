var Libreria = require('../models/libreria');

exports.libreria_list = function(req, res) {
    res.render('librerias/index', { libs: Libreria.allLibrerias });
}

exports.libreria_create_get = function(req, res) {
    res.render('librerias/create');
}

exports.libreria_create_post = function(req, res) {
    var libreria = new Libreria(req.body.id, req.body.nombre, req.body.tipo);
    libreria.ubicacion = [req.body.latitud, req.body.longitud];
    Libreria.add(libreria);

    res.redirect('/librerias');
}