import React, { Component } from 'react';
import Boton from './Boton'; 




class Item extends  Component {  
    render(){
        let mensajeBoton="Desde el padre";
        return(
            <div>
                <ul>
                    <li>{this.props.numero} <Boton textoValue={mensajeBoton}></Boton></li>
                </ul>
                
            </div>
        );
    }
}
export default Item;