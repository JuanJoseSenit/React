import React, { Component } from 'react';




class Contador extends Component {  
    constructor(props){
        super(props);
        this.state={count: 0};  //siempre se le pasa un objeto
    }
    aumentar(){
        this.setState({count: this.state.count + 1})
    }
    disminuir(){
        this.setState({count: this.state.count - 1})
    }
    render(){
        
        return(
        <div>Contador: {this.state.count}
            <div>
                 <button onClick={this.disminuir.bind(this)}>-</button>
                <button onClick={this.aumentar.bind(this)}>+</button>

            </div>
            
        
        </div>
        );
    }
}
export default Contador;