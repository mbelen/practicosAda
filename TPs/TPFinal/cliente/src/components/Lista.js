import React, { Component } from 'react';
import queryString from 'query-string';
import {BreadCrumb} from './BreadCrumb';
import loader from '../img/loader.gif';
import './css/Lista.css';

import {
  Link
} from 'react-router-dom'

class Lista extends Component {
  constructor (props) {
    super(props);
    this.state={
    	products:null
  	}
  }

  componentDidMount(){ 

  	const busqueda = queryString.parse(this.props.location.search)
   	fetch(`/api/items?search=${busqueda.q}`)
   .then(res=>res.json())
   .then(res=>this.setState({products:res}))
   .catch(function(e){
     console.log('no puede responder lista',e)}
    )
  }
  
  render() {   
    if(this.state.products === null)
      return(<img alt='Cargando...' className='Loader' src={loader}/>)//Informa que está procesando la búsqueda 

    else{

      if(this.state.products.items.length===0){
        return( <p className='NoEncontrado'>Lo sentimos, no se encontraron productos con tu solicitud!!</p>)//Informa que no hay resultados de la búsqueda 
      }
      else{
          //Muestra la lista con el resultado de la búsqueda exitosa
          return(
            <section className='ContenedorLista'>
              <BreadCrumb arrayCate={this.state.products.categories} />
              <ul className='Lista'>    	
                {this.state.products.items.map((p,index) => (<li className='Item' key={p.id}>
                                                          
                                                          <a href={'/api/items/'+p.id+'/description'}>
                                                            <img className='Imagen' src={p.picture} alt='Producto listado'/>
                                                          </a>

                                                          <section className='Info'>
                                                            <section className='Column'>
                                                              <p className='Precio'>{p.price.currency==='ARS'?'$ ':'USD '}
                                                                                    {p.price.amount}{p.price.decimals===0?'':','+p.price.decimals}</p>                                
                                                              <Link className='Link' to={'/api/items/'+p.id+'/description'}>
                                                                <p className='Titulo'>{p.title}</p>
                                                              </Link>
                                                            </section>
                                                            <p className='Ubicacion'>{p.state_name}</p>
                                                           </section>
                                                             
                                                         </li>)
                                      )}
              </ul>
            </section>
          )

      }
  }
}
}

export default Lista;