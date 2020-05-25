import React, { Component } from 'react';




class Resultados extends Component {  
    render(){
        let array=[];
        
        for(let i=0;i<this.props.users.length;i++){
            array.push(
            <li>
            Yo soy {this.props.users[i].nombre} y tengo {this.props.users[i].edad} años, cumpliendo el rol de: {this.props.users[i].rol}
            <button onClick={() => {this.props.borrar(i)}}>X</button>
            </li>)
        };
        
        return(
            <ul>
                
                {array}
                
            </ul>
        );
    }
}
export default Resultados;