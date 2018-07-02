//Al hacer click en el icono de like.
//Si hay exito en el servidor -> se cambia color del icono   
$(document).on('click','.like',function(e){
	var codigo=$(this).data('codigo');

	var resguardoThis=$(this);
	
	$.ajax({
	  method: "PATCH",
	  url: `/editar/${codigo}`
	})
	  .done(function( data ) {
	  	if (data.estado)
            $(resguardoThis).children(0).attr('src','/images/corazonLike.png')
         else
            $(resguardoThis).children(0).attr('src','/images/corazon.png')	   
	  });
	})

//Permite desplegar mas info de un Perro
$(document).on('click','.masInfoBtn',function(e){
	$(this).hide();
	$(this).parent().next().show();
})

//Permite ocultar info de un Perro
$(document).on('click','.menosInfoBtn',function(e){
	$(this).parent().parent().prev().children(0).show();
	$(this).parent().parent().hide();
})


