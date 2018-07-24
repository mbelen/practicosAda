import React, { Component } from 'react';
import {BreadCrumb} from './BreadCrumb';
import loader from '../img/loader.gif';
import './css/Detalle.css';

class Detalle extends Component {
  constructor (props) {
    super(props);
    this.state={
    	producto:'',
      loading:false
  	}
  }

  componentWillMount(){ 
  	const id = this.props.match.params.id;
    fetch(`/api/items/${id}`)
   .then(res=>res.json())
   .then(res=>{
      this.setState({producto:res.item,loading:true});
    })
   .catch(function(e){
    console.log('No puede responder detalle')}
    )
  }
  
  render() {
    if(!this.state.loading){
      return(<img alt='Cargando...' className='Loader' src={loader}/>)
    }else{

      return(
        <section className='ContenedorDetalle'>
          <BreadCrumb arrayCate={this.state.producto.categories} />
          <section className='Detalle'>
            <section className='RowProducto'>
              <img className='Imagen' src={this.state.producto.picture} alt='Producto detalle'/>
              <section className='InfoLateral'>
                <p className='CondicionVendidos'>{this.state.producto.condition==='new'?'Nuevo':'Usado'}
                                                   {' - '+this.state.producto.sold_quantity+' Vendidos' }</p>
                <section className='Titulo'>
                  <p>{this.state.producto.title}</p>
                </section>
                <section className='Precio'>
                  <p>{this.state.producto.price.currency==='ARS'?'$ ':'USD '}
                     {this.state.producto.price.amount}
                     {this.state.producto.price.decimals===0?'':','+this.state.producto.price.decimals}</p>
                </section>
                <a className='Boton'>Comprar</a>

              </section>
          </section>  
        
          <section className='Descripcion'>
            <p className='Titulo'>Descripción del producto</p>
            <p>{this.state.producto.description}</p>
          </section>
        </section>
        </section>
      )
    }
  }
}

export default Detalle;