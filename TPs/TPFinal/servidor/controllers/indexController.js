const indexService = require('../services/indexService')

const self = {}

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