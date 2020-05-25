import React, { Component } from 'react';
import Boton2 from './Boton2';



class Lista2 extends Component {  
    EnviarAlert(){
        alert("Soy una función declarada en el padre y enviada al hijo");
    }
    render(){
        
       

        return(
            
            <Boton2 mensaje={this.EnviarAlert.bind(this)}></Boton2>
            
        );
    }
}
export default Lista2;