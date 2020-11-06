var express = require('express');
var router = express.Router();
var libreriaController = require('../controllers/libreria');

router.get('/', libreriaController.libreria_list);
router.get('/create', libreriaController.libreria_create_get);
router.post('/create', libreriaController.libreria_create_post);
module.exports = router;