import React from 'react';
import { useState, useEffect } from 'react';
import Formulario from './Formulario';
import axios from 'axios';
import Preguntas from './Preguntas';


function Trivial(){

    //const[url, seturl]=useState();
    const[api, setApi]=useState([]);

    //console.log(url);
    
    
    
    
   const resultado=()=>{
        let numeroPreguntas=document.getElementById("pregunta").value;
        let dificultad=document.getElementById("dificultad").value;
        let categoria=document.getElementById("categoria").value;
        let formulario={numPreguntas: numeroPreguntas,
                        dificultad: dificultad,
                        categoria: categoria
                    
                    }
       
       let url="https://opentdb.com/api.php?amount="+formulario.numPreguntas+"&category="+formulario.categoria+"&difficulty="+formulario.dificultad+"&type=multiple";
       //seturl(url)
       axios.get(url).then((response)=>{
        
        setApi(response.data.results);

        
     
    });
         
    }

   
    
      
  
    
    return(
        <div>
            
            <Formulario url={resultado}></Formulario>
            <Preguntas api={api}></Preguntas>
        </div>
    );
}
export default Trivial;