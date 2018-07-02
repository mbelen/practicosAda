const indexService = require('../services/indexService')
const self = {}

self.renderizarInicio=function(req, res, next) {
  res.render('inicio');
};

//Permite calcular máximo número de páginas según el resultado que se quiere mostrar(luego de aplicar filtros).
//Si no hay resultados -> muestra ventana error
self.filterDogs=function(req, res, next) {
	var filtroTamaño=req.query.tamaño;
	var filtroEdad=req.query.edad;
	var filtroSexo=req.query.sexo;
	var filtoFavoritos=req.query.favoritos;

	var filtro=indexService.filterDogs(filtroTamaño,filtroEdad,filtroSexo,filtoFavoritos)

	if (filtro.length>0) {
		var itemsPorPagina = 2;
		maxPags = resultFiltro.length/itemsPorPagina;
		res.redirect('/filtro/pages/1');

	}else
		res.render('errorFiltro',{titulo:'No encontramos amigos con esas características. Seleccioná otros filtros, por favor.', mje:'La pinta es lo de menos!!'});

};

//Permite mostrar los items(dogs) correspondientes a la página solicitada. 
//Se calculan página sigiente y anterior para porder renderizar botones de paginado
self.pageFilter=function(req, res) {
	var page =parseInt(req.params.pag);
	var maxPagsCeil=Math.ceil(maxPags);//para conseguir el entero siguiente

	if (page<=maxPagsCeil) {
		var start = (page - 1) * 2;
		var end = page * 2;	

		//No permite que la página siguiente a la actual sea mayor al máximo de páginas
		if (page==maxPagsCeil)
			pagSig=maxPagsCeil
		else
			pagSig=page+1


		if (page>1) 
			var pagAnt=page-1;
		else{
			//No permite que la página anterior a la actual sea cero
			pagAnt=1;
			if(maxPagsCeil>=3)
				pagSig=3;//me facilita mostrar tres botones del paginado en la primer página
		}
			
		res.render('index', {items: resultFiltro.slice(start, end), numPaginas:maxPagsCeil,  pagActual:page, pagSig:pagSig, pagAnt:pagAnt});
	}else
		//Por si se modifica número de página desde la URL del browser
		res.render('errorFiltro',{titulo:'Pagina no encotrada',mje:'Lo sentimos!!'})
};

//Permite cambiar el estado favorito de un dog(like)
self.editState=function(req, res, next) {
 var codigo=parseInt(req.params.codigo); 
 var result=indexService.editStateFavorite(codigo);
 
 if (result) {
 	res.send(result);
 }else
 	console.log('no se encontró dog'); 
};           


module.exports = self;