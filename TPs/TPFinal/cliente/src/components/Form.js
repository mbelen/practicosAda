import React, { Component } from 'react';
import busquedaLupa from '../img/busqueda.png';
import icono from '../img/icono.png';
import './css/Form.css';

class Form extends Component {

  render() {
    return (
      <section className="Search">
	      <section className='ContForm'>
		        <form action='/api/items' method='get'>
		        	<section className='ContenedorIcono'>
		        		<img className='Icono' src={icono}/>
		        	</section>
		        	<input className='inputSearch' type="text" placeholder='Nunca dejes de buscar' name="q" />
		        	<button type="submit" className="Boton"><img src={busquedaLupa}/></button>
		        </form>
	      </section>
      </section>
    )
}
}

export default Form;