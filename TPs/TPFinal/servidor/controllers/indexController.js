const indexService = require('../services/indexService')

const self = {}

//Controller que devuelve Json que incluye lista de los primeros cuatro productos que coinciden con la búsqueda
self.productsList = function (req, res, next) {
	
var busqueda=req.query.search;

return indexService.getProducts(busqueda)
	.then(function(products){
		return res.json(products)
	})
	.catch(function(){
		console.log('no se pueden traer los products')
	})
}

//Controller que devuelve Json que contiene la info del producto seleccionado
self.getDetailProduct = function (req,res,next){
var id=req.params.id;

return indexService.getDetailProduct(id)
	.then(function(descripcion){
		return res.json(descripcion)
	})
	.catch(function(){
		console.log('no se puede traer  el detalle de products')
	})

}

module.exports = self;