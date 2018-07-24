import React, { Component } from 'react';
import busquedaLupa from '../img/busqueda.png';
import icono from '../img/icono.png';
import './css/Form.css';

class Form extends Component {
constructor (props) {
    super(props);
      this.state = {
        search:''
        }
    }

handleSearchInput (e) {
      const value = e.target.value;
      this.setState({'search': value});
  }  

render() {
    return (
      <section className="Search">
	      <section className='ContForm'>
		        <form action='/api/items' method='get'>
		        	<section className='ContenedorIcono'>
		        		<img alt='Choque los 5' className='Icono' src={icono}/>
		        	</section>
		        	<input className='inputSearch' type="text" placeholder='Nunca dejes de buscar' name="q" onChange={(event) => this.handleSearchInput(event)} />
		        	<button type="submit" className="Boton" disabled={this.state.search===''}><img alt='Buscar' src={busquedaLupa}/></button>
		        </form>
	      </section>
      </section>
    )
}
}

export default Form;