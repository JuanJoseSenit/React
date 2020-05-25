import React, { Component } from 'react';
import Resultados from './Resultados';



class Formulario extends Component {  
    constructor(props){
        super(props);

        this.state={
                    usuarios:[{nombre: "Juanjo",
                    edad: 30,
                    rol: "Ingeniero químico"}],
                };  //siempre se le pasa un objeto
    }
    adicionar(){
        let nombreUsuario=document.getElementById("nombre").value;
        let edadUsuario=document.getElementById("edad").value;
        let rolUsuario=document.getElementById("rol").value;
        let usuario={nombre: nombreUsuario,
                        edad: edadUsuario,
                        rol: rolUsuario};
        let users = this.state.usuarios;
        users.push(usuario);
        this.setState({usuarios:users}); 
    }
    eliminar(i){
        alert("estas intentando borrar");
        let users = this.state.usuarios;
        users.splice(i,1);
        this.setState({usuarios:users}); 

    }
    
    render(){
        
        
        return(
            <div>
                <form>
                    Nombre: <input type="text" id="nombre"/>
                    Edad:<input type="text" id="edad"/>
                    Rol:<input type="text" id="rol"/>
                    <input type="button" value="enviar" onClick={this.adicionar.bind(this)}/>
                    
                    
                </form>
                
                    <Resultados users={this.state.usuarios} borrar={this.eliminar.bind(this)}></Resultados>
               
                
            </div>
            
            
        );
    }
}
export default Formulario;