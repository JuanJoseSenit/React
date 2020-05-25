import React from 'react';
import { useState, useEffect } from 'react';
import Formulario from './Formulario';
import axios from 'axios';
import Preguntas from './Preguntas';


function Trivial(){

    //const[url, seturl]=useState();
    const[api, setApi]=useState("");
    const[numPre, setNumPre]=useState("");
    const[dif, setDif]=useState("");
    const[cat, setCat]=useState("");
    const[respuesta, setRespuesta]=useState([]);
    //console.log(api)

    const numPreguntas=(e)=>{
        setNumPre(e.target.value);
    }
    const dificultad=(e)=>{
        setDif(e.target.value);
    }
    const categoria=(e)=>{
        setCat(e.target.value);
    }
   const resultado=()=>{
        
       let url="https://opentdb.com/api.php?amount="+numPre+"&category="+cat+"&difficulty="+dif+"&type=multiple";
       //seturl(url)
       axios.get(url).then((response)=>{
        
        setApi(response.data.results);
    });
         
    }

    const comprobarRespuesta=(e)=>{
        
        if(e.target.value==="true"){
            setRespuesta([...respuesta,e.target.value]);
            
        }
    }
    const validar=()=>{
        alert("Has acertado " + respuesta.length + " respuestas de " + numPre);
        setRespuesta([]);
        
        console.log(respuesta);
    }
 
    return(
        <div>
            
            <Formulario numPreguntas={numPreguntas} dificultad={dificultad} categoria={categoria} url={()=>{resultado()}}></Formulario>
            <Preguntas api={api} comprobarRespuesta={comprobarRespuesta} validar={()=>{validar()}}></Preguntas>
        </div>
    );
}
export default Trivial;