import React, { Component } from 'react';
import './Form.css'
import busquedaLupa from '../busqueda.png'

class Form extends Component {


onSubmit (e) {
}
  render() {
    return (
      <section className="Search">
	      <section className='ContForm'>
		        <form action='/items' method='get'>
		        	<input className='inputSearch' type="text" placeholder='Nunca dejes de buscar' name="q" />
		        	<button type="submit" className="Boton"><img src={busquedaLupa}/></button>
		        </form>
	      </section>
      </section>
    )
}
}

export default Form;