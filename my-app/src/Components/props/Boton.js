import React, { Component } from 'react';

const estiloBoton={color:'blue', border:'5px solid blue'}


class Boton extends Component {  
    render(){
        return(
            <input  type="button" style={estiloBoton} value={this.props.textoValue}></input>
        );
    }
}
export default Boton;