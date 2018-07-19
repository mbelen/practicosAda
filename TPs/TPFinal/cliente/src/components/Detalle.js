import React, { Component } from 'react';
import './Detalle.css'

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
   	
    fetch(`/items/${id}`)
   .then(res=>res.json())
   .then(res=>{
      this.setState({producto:res.item,loading:true});
    })
   .catch(function(e){
    console.log('No puede responder')}
    )
  }
  
  render() {
    if(!this.state.loading){
      return(<p>cargando...</p>)
    }else{

      return(
        <section className='ContenedorDetalle'>
          <section className='RowProducto'>
            <img className='Imagen' src={this.state.producto.picture} alt='una imagen'/>
            <section className='InfoLateral'>
              <section className='CondicionVendidos'>
                <p className='CondicionVendidos'>{this.state.producto.condition==='new'?'Nuevo':'Usado'}
                                                 {' - '+this.state.producto.sold_quantity+' Vendidos' }</p>
              </section>
              <section className='Titulo'>
                <h3>{this.state.producto.title}</h3>
              </section>
              <section className='Precio'>
                <p>{this.state.producto.price.currency==='ARS'?'$ ':'pe '}
                   {this.state.producto.price.amount+','}
                   {this.state.producto.price.decimals=='0'?'00':this.state.producto.price.decimals}</p>
              </section>
              <a className='Boton'>Comprar</a>

            </section>
          </section>  
          <section className='Descripcion'>
            <h3>Descripción del producto</h3>
            <p>{this.state.producto.description}</p>
          </section>
        </section>
      )
    }
  }
}

export default Detalle;