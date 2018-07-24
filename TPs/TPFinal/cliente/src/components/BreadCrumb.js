import React from 'react';
import './css/BreadCrumb.css';

//Componente representacional para para renderizar breadcrumb  
export const BreadCrumb = (props) =>
  <div className='ContenedorBreadCrumb'>
    {props.arrayCate.map(function(item,i){
        return (

          <ul className='ListaBreadCrumb'>
            {console.log(i)}
            <li key={i}>{item}{i<props.arrayCate.length-1?' > ':''}</li>
          </ul>
        )  
        }
    )}
  </div>