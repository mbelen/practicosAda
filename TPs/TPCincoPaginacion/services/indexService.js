const service = {}

var dogs=[{codigo:1,nombre:'Pepe',tamaño:'mediano',edad:'cachorro',sexo:'masculino',src:'perri1.jpg',estado:false,mas:'Es muy amable y se lleva bien con los gatos'},
		  {codigo:2,nombre:'Pancho',tamaño:'pequeño',edad:'cachorro',sexo:'masculino',src:'perri2.jpg',estado:false,mas:'Le gusta jugar y hacer amigos en el parque'},
		  {codigo:3,nombre:'Lola',tamaño:'grande',edad:'adulto',sexo:'femenino',src:'perri3.jpg',estado:false,mas:'Es muy divertida, siempre te saca una sonrisa'},
		  {codigo:4,nombre:'Chipo',tamaño:'mediano',edad:'cachorro',sexo:'masculino',src:'perri4.jpg',estado:false,mas:'Es muy tranquilo y dormilón'},
		  {codigo:5,nombre:'Tino',tamaño:'pequeño',edad:'adulto',sexo:'masculino',src:'perri5.jpg',estado:false,mas:'Ama jugar con niños, se lleva muy bien con ellos'},
		  {codigo:6,nombre:'Nano',tamaño:'grande',edad:'cachorro',sexo:'masculino',src:'perri6.jpg',estado:false,mas:'Es muy educado y le gusta salir a pasear'},
		  {codigo:7,nombre:'Tato',tamaño:'mediano',edad:'adulto',sexo:'masculino',src:'perri7.jpg',estado:false,mas:'Es muy curioso, simpre alerta'},
		  {codigo:8,nombre:'Ruby',tamaño:'pequeño',edad:'cachorro',sexo:'femenino',src:'perri8.jpg',estado:false,mas:'Es muy divertida y se lleva muy bien con otros animales'},
		  {codigo:9,nombre:'Jerry',tamaño:'grande',edad:'adulto',sexo:'masculino',src:'perri9.jpg',estado:false,mas:'Le gusta mucho ir al mar, es un niño en el agus'},
		  {codigo:10,nombre:'Cata',tamaño:'mediano',edad:'cachorro',sexo:'femenino',src:'perri10.jpg',estado:false,mas:'Atesora sus juguetes. Le gusta mucho jugar'},
		  {codigo:11,nombre:'Teo',tamaño:'pequeño',edad:'adulto',sexo:'masculino',src:'perri11.jpg',estado:false,mas:'Cuando llega el horario del paseo, solo busca su correa'},
		  {codigo:12,nombre:'Rufo',tamaño:'grande',edad:'cachorro',sexo:'masculino',src:'perri12.jpg',estado:false,mas:'No le gusta visitar al vete pero se la banca'},
		  {codigo:13,nombre:'Peti',tamaño:'mediano',edad:'adulto',sexo:'femenino',src:'perri13.jpg',estado:false, mas:'Se lleva muy bien con los de su especie, no tando con sus hermanos gatunos'},
		  {codigo:14,nombre:'Luna',tamaño:'pequeño',edad:'cachorro',sexo:'femenino',src:'perri14.jpg',estado:false,mas:'Es muy educada y aprende muy rápido'},
		  {codigo:15,nombre:'Lucre',tamaño:'grande',edad:'adulto',sexo:'femenino',src:'perri15.jpg',estado:false,mas:'Le gustan mucho los baños. No se lleva con felinos'},
		  {codigo:16,nombre:'Luz',tamaño:'mediano',edad:'cachorro',sexo:'femenino',src:'perri16.jpg',estado:false,mas:'Es muy divertida y le gusta comer caramelos'},
		  {codigo:17,nombre:'Mia',tamaño:'pequeño',edad:'adulto',sexo:'femenino',src:'perri17.jpg',estado:false,mas:'Lo que mas le gusta es hacer nuevos amigos en el parque'},
		  {codigo:18,nombre:'Tati',tamaño:'grande',edad:'cachorro',sexo:'femenino',src:'perri18.jpg',estado:false,mas:'Ama jugar con sus jugetes. Se lleva bien con otros animales'},
		  {codigo:19,nombre:'Teo',tamaño:'mediano',edad:'adulto',sexo:'masculino',src:'perri18.jpg',estado:false,mas:'Ama dormir. Es muy tanqui'},
		  {codigo:20,nombre:'Ciru',tamaño:'pequeño',edad:'cachorro',sexo:'masculino',src:'perri17.jpg',estado:false,mas:'No le gusta bañarse. Se lleva bien con otros perros'},
		  {codigo:21,nombre:'Ato',tamaño:'grande',edad:'adulto',sexo:'masculino',src:'perri16.jpg',estado:false,mas:'Ama ir al parque y hacer amigos'},
		  {codigo:22,nombre:'Kiara',tamaño:'mediano',edad:'cachorro',sexo:'femenino',src:'perri15.jpg',estado:false,mas:'Le gustan los caramelos y salir al parque'},
		  {codigo:23,nombre:'Firu',tamaño:'pequeño',edad:'adulto',sexo:'masculino',src:'perri14.jpg',estado:false,mas:'Es muy educado y obediente'},
		  {codigo:24,nombre:'Kiwi',tamaño:'grande',edad:'cachorro',sexo:'femenino',src:'perri13.jpg',estado:false,mas:'Se divierte mucho jugando con niños y le gusta comer'},
		  {codigo:25,nombre:'Lolo',tamaño:'mediano',edad:'adulto',sexo:'masculino',src:'perri12.jpg',estado:false,mas:'Es muy obediente y tranquilo'},
		  {codigo:26,nombre:'Pipo',tamaño:'pequeño',edad:'cachorro',sexo:'masculino',src:'perri11.jpg',estado:false,mas:'No está acostumbrado a vivir en deptos, es muy saltarín'},
		  {codigo:27,nombre:'Charly',tamaño:'grande',edad:'adulto',sexo:'masculino',src:'perri10.jpg',estado:false, mas:'Se lleva muy bien con otro perros, no muy bien con gatos'},
		  {codigo:28,nombre:'Colo',tamaño:'mediano',edad:'cachorro',sexo:'masculino',src:'perri9.jpg',estado:false,mas:'Muy amable y obediente. Le gustan los caramelos'},
		  {codigo:29,nombre:'Larry',tamaño:'pequeño',edad:'adulto',sexo:'masculino',src:'perri8.jpg',estado:false,mas:'No se lleva muy bien con gatos pero sí con otros perrunos'},
		  {codigo:30,nombre:'Yoda',tamaño:'grande',edad:'cachorro',sexo:'masculino',src:'perri7.jpg',estado:false,mas:'Es muy tranqui y le gustan los paseos'},
		  {codigo:31,nombre:'Mar',tamaño:'mediano',edad:'adulto',sexo:'femenino',src:'perri6.jpg',estado:false,mas:'Muy divertida y amigable. Ama los paseos'},
		  {codigo:32,nombre:'Lara',tamaño:'pequeño',edad:'cachorro',sexo:'femenino',src:'perri5.jpg',estado:false,mas:'Es muy amigable con niños y muy saltarina'},
		  {codigo:33,nombre:'Coca',tamaño:'grande',edad:'adulto',sexo:'femenino',src:'perri4.jpg',estado:false, mas:'No le gustan los baños. Pero es muy buena y obediente'},
		  {codigo:34,nombre:'Choco',tamaño:'mediano',edad:'cachorro',sexo:'femenino',src:'perri3.jpg',estado:false,mas:'Ama los caramelos perrunos y saltar'},
		  {codigo:35,nombre:'Flaca',tamaño:'pequeño',edad:'adulto',sexo:'femenino',src:'perri2.jpg',estado:false,mas:'Es una compañera muy fiel, muy respetuosa'},
		  {codigo:36,nombre:'Art',tamaño:'grande',edad:'cachorro',sexo:'femenino',src:'perri1.jpg',estado:false,mas:'Ama las salidas al parque y caminar'}
		  ]

//Permite cambiar el estado favorito de un dog 
service.editStateFavorite=function(codigo){
var dog=dogs.find( dog => dog.codigo === codigo )

   if (dog.estado){
      dog.estado=false;
    }
    else{
      dog.estado=true;
    }
   return dog;
   
}

//Permite aplicar filtros por tamaño, edad, sexo y favorito al listado de todos los dogs
service.filterDogs=function(filtroTamaño,filtroEdad,filtroSexo,filtoFavoritos){

resultFiltro=dogs;

	if (filtroTamaño!=='todos'){
		resultFiltro = dogs.filter(dog => dog.tamaño===filtroTamaño);
	}
	if (filtroEdad!=='todos') {
		resultFiltro = resultFiltro.filter(dog => dog.edad===filtroEdad);
	}
	if (filtroSexo!=='todos') {
		resultFiltro = resultFiltro.filter(dog => dog.sexo===filtroSexo);
	}
	//Filtro por estado favorito
	if (filtoFavoritos){
		resultFiltro = resultFiltro.filter(dog => dog.estado===true);
	}

	return resultFiltro;
}


module.exports = service;