import React, { Component } from 'react';




class Boton2 extends Component {  
    render(){
        
        return(
            <div>
                <button onClick={this.props.mensaje} >Alert</button>
            </div>
        );
    }
}
export default Boton2;