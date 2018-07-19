import React, { Component } from 'react';
import queryString from 'query-string';
import './Lista.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Lista extends Component {
  constructor (props) {
    super(props);
    this.state={
    	products:[]
  	}
  }

  componentDidMount(){ 

  	const busqueda = queryString.parse(this.props.location.search)
   	fetch(`/items?search=${busqueda.q}`)
   .then(res=>res.json())
   .then(res=>this.setState({products:res.items}))
   .catch(function(e){
    console.log('no puede responder')}
    )

  }
  
  render() {
   
    if(this.state.products.length === 0){
      return(<p>Cargando...</p>)      
    }else{

      return(
        <section className='ContenedorLista'>
          <ul className='Lista'>    	
            {this.state.products.map((p,index) => (<li className='Item' key={p.id}>
                                                      
                                                      <a href={'/items/'+p.id+'/description'}>
                                                        <img className='Imagen' src={p.picture} alt='una imagen'/>
                                                      </a>

                                                      <section className='Info'>
                                                        <section className='Column'>
                                                          <p className='Precio'>{p.price.currency==='ARS'?'$ ':'pe '}
                                                                                {p.price.amount+','}{p.price.decimals=='0'?'00':p.price.decimals}</p>                                
                                                          <Link className='Link' to={'/items/'+p.id+'/description'}>
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

export default Lista;