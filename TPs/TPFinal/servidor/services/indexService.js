const axios = require('axios')
// import axios from 'axios'

const service = {}

service.getProducts = function (search) {
    let objeto={
        'author': {'name': 'Soledad',
                   'lastname': 'Spinnenhirn'
        }
    }
  return axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`)
    .then(function (res) {
      return res.data.results
    })
    .then(function(data){
        objeto.categories= [''],
        objeto.items= [];

        data.map(function(r){ 
                let prod={}  
                let arr=r.price.toString().split('.');
                let entero=arr[0];
               
                let decimal;
                if (arr.length>1){
                    decimal=arr[1];
                }else{
                    decimal=0;
                }

                prod.id= r.id;
                prod.title= r.title;
                prod.price= {'currency': r.currency_id, 'amount': entero, 'decimals': decimal};
                prod.picture= r.thumbnail;
                prod.condition= r.condition;
                prod.free_shipping= r.shipping.free_shipping;
                prod.state_name= r.address.state_name;

                objeto.items.push(prod);
        })
    
        return objeto;            
    })
    .catch(function(){
    	console.log('no puede responder pedido a API productos')
    })
}



service.getDetailProduct = function(id){
    let objeto={
        'author': {
            'name': 'Soledad',
            'lastname': 'Spinnenhirn'
            }
        }

    return axios
        .get(`https://api.mercadolibre.com/items/${id}`)    
        .then(function (res) {
          return res.data;
        })
        .then(function(data){
                console.log(data.price)
            
                let arr=data.price.toString().split('.');
                let entero=arr[0];

                let decimal;
                if (arr.length>1){
                    decimal=arr[1];
                }else{
                    decimal=00;
                }

                console.log(decimal)

                objeto.item= {
                    'id': data.id,
                    'title': data.title,
                    'price': {'currency': data.currency_id,'amount': entero,'decimals': decimal},
                    'picture': data.thumbnail,
                    'condition': data.condition,
                    'free_shipping': data.shipping.free_shipping,
                    'sold_quantity': data.sold_quantity
                }

                return objeto;
        })
        .then( function(producto){
         return axios
                .get(`https://api.mercadolibre.com/items/${id}/description`)
                .then(function (res) {
                  return res.data;
                })
        
                .then(function(data){
                    objeto.item.description=data.plain_text;
                    return objeto;
                })
        })
        .catch(function(){
            console.log('no puede responder pedido a API getDetailProduct')
        })

}

module.exports = service;