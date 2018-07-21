var express = require('express');
var router = express.Router();
var indexController= require('../controllers/indexController')

router.get('/items', indexController.productsList);


router.get('/items/:id',indexController.getDetailProduct);

module.exports = router;
