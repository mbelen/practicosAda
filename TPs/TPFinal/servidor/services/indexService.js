const axios = require('axios')
const service = {}

//Función para determinar la categoría que más resultados obtuvo
    function getMayorCategory(arr, result = []){
        for (var i=0; i<arr.length;i++){
            var index=result.findIndex(item=>item.categoria==arr[i].category_id);
            if(index!=-1)
                result[index].count=result[index].count+1
            else
                result.push({'categoria':arr[i].category_id,'count':1})
        }
        
        let mayor=0; let indice;
        for (var i=0; i<result.length ;i++) {
            if (result[i].count>mayor) {
                mayor=result[i].count; indice=i;
            }
        }
        return result[indice].categoria
    }


//Función para obtener parte entera y parte decimal de un precio 
    function splitPrice(price){
        let arr=price.toString().split('.');
            let entero=arr[0]; 
            let decimal= arr.length>1 ? arr[1] : 0;

            return {'entero':entero, 'decimal':decimal}
    }

//Permite obtener la lista de los primeros 4 productos que coinciden con la búsqueda con todas sus propiedades requeridas
service.getProducts = function (search) {
    let objeto={
        'author': {'name': 'Soledad','lastname': 'Spinnenhirn'}
    }    

  //Solicitud a la API para obtener lista de items con algunas propiedades
  return axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`)
    .then(res=>res.data.results)
    .then(data=>{

        if(data.length===0){//si no hay coincidencias en la búsqueda-->retorna el objeto con array items vacío 
            objeto.items=[];
            return objeto;
        }

        objeto.categories= []; objeto.items= [];

        data.map(function(d){ 
                let prod={}  
                let priceSp=splitPrice(d.price);

                prod.id= d.id;
                prod.title= d.title;
                prod.price= {'currency': d.currency_id, 'amount': priceSp.entero, 'decimals': priceSp.decimal};
                prod.picture= d.thumbnail;
                prod.condition= d.condition;
                prod.free_shipping= d.shipping.free_shipping;
                prod.state_name= d.address.state_name;
                prod.category_id= d.category_id;

                objeto.items.push(prod);
        })   

        var arr=objeto.items;
        var result=[]; 
        let categoria=getMayorCategory(arr);

        //Solicitud a la API para obtener propiedad categories(array) de la lista
        return axios
            .get(`https://api.mercadolibre.com/categories/${categoria}`)
            .then(res=> res.data)
            .then(data=>{
                data.path_from_root.map(item=>objeto.categories.push(item.name));
                return objeto;
            })
    })
    .catch(function(e){
        console.log('no puede responder pedido a API productos', e)
    })
}

//Permite obtener producto con todas sus propiedades requeridas
service.getDetailProduct = function(id){
    let objeto={
        'author': {'name': 'Soledad','lastname': 'Spinnenhirn'}
        }

    //Solicitud a la API para obtener item con algunas propiedades
    return axios
        .get(`https://api.mercadolibre.com/items/${id}`)    
        .then(res=>res.data)
        .then(data=>{
                let priceSp=splitPrice(data.price);
                
                objeto.item= {
                    'id': data.id,
                    'title': data.title,
                    'price': {'currency': data.currency_id,'amount': priceSp.entero,'decimals': priceSp.decimal},
                    'picture': data.thumbnail,
                    'condition': data.condition,
                    'free_shipping': data.shipping.free_shipping,
                    'sold_quantity': data.sold_quantity,
                    'category_id':data.category_id,
                    'categories':[]
                }
                return objeto;
        })
        .then(producto=>{
            //Solicitud a la API para obtener propiedad description del item
            return axios
                .get(`https://api.mercadolibre.com/items/${id}/description`)
                .then(res=>res.data)        
                .then(data=>{
                  objeto.item.description=data.plain_text;
                  return objeto;
                })
                .then(res=>{
                    //Solicitud a la API para obtener propiedad categories(array) del item
                    return axios
                        .get(`https://api.mercadolibre.com/categories/${res.item.category_id}`)            
                        .then(res=>res.data)
                        .then(data=>{
                            data.path_from_root.map(item=>objeto.item.categories.push(item.name));
                            return objeto;
                    })
                })
        })
        .catch(function(e){
            console.log('no puede responder pedido a API getDetailProduct',e)
        })
}        

module.exports = service;