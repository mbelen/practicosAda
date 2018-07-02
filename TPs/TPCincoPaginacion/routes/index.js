var express = require('express');
var indexController=require('../controllers/indexController')
var router = express.Router();

router.get('/', indexController.renderizarInicio);

router.patch('/editar/:codigo',indexController.editState); 

router.get('/filtro',indexController.filterDogs);

//para renderizar items correspondientes a cada página
router.get('/filtro/pages/:pag', indexController.pageFilter);


module.exports = router;
