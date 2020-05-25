import React, { useState } from 'react';
import ListaProfesional from './ListaProfesional';
import Estrellas from './Estrellas';



function FormProfesional(){
    
    const[arrayResultados, setArrayResultados]=useState([{nombre:"javi",
                                                            profesion:"estudiante"}]);
    
   function alerta(i){
       
       alert(`hola soy la estrella` + i);

   }


   const resultado=()=>{
        let nombre=document.getElementById("nombre").value;
        let profesion=document.getElementById("profesion").value;
        let genero;
        if(document.getElementById('mujer').checked){
            genero=document.getElementById("mujer").value;
        }else{
            genero=document.getElementById("hombre").value;
        }
        
        console.log(genero);
        let profesional={nombre: nombre,
                        profesion: profesion,
                        img: genero
                        }
       
        setArrayResultados([...arrayResultados,profesional]);
        
    }
    
    return(
        <div>
            
            <form>
                Nombre:<input id="nombre" type="text"/>
                Profesión: <input id="profesion" type="text"/>
                <div id="generos">
                    <input type='radio' name='genero' value='mujer' id="mujer"/>Mujer
                    <input type='radio' name='genero' value='hombre' id="hombre"/>Hombre

                </div>
                
                <Estrellas alerta={alerta}></Estrellas>

                <input type="button" onClick={resultado} value="enviar" />

                
                

                
            </form>
            
            <ListaProfesional datos={arrayResultados}></ListaProfesional>
             
            
        </div>
    );

   
}
export default FormProfesional;