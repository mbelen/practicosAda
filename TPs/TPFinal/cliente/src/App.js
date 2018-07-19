import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Lista from './components/Lista'
import Detalle from './components/Detalle'

import {
  BrowserRouter as Router,
  Route,
  //Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <section className='App'>
      	<Form/>
  	    <Router>
  	      <section className='Rutas'>		
  		      <Route exact path="/items" component={Lista}/>
            <Route path="/items/:id" component={Detalle}/>
  		    </section>
  		  </Router>
      </section>
    );
  }
}

export default App;
