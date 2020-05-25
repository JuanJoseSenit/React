import React from 'react';
import { useState, useEffect } from 'react';

function Preguntas(props){
    
    const[incorrectas, setIncorrectas]=useState([]);
    
    
    
    let matrizPreguntasRespuestas=[];
    
    for(let i=0;i<props.api.length;i++){
        let matrizRespuestasIncorrectas;
        
        matrizRespuestasIncorrectas=props.api[i].incorrect_answers;
        
        let matriz=[];
        for(let j=0;j<matrizRespuestasIncorrectas.length;j++){
            matriz.push(
                <div>
                    <input type="radio" name={"question"+(i+1)} value="false" onChange={props.comprobarRespuesta} />{matrizRespuestasIncorrectas[j]}
                </div>)
                
        }
        console.log(matrizRespuestasIncorrectas);

        matrizPreguntasRespuestas.push(
        <div>
            <p>Question {i+1} </p>
            <p>{props.api[i].question}</p>
            <p>Answer</p>
            <input type="radio" name={"question"+(i+1)} value="true" onChange={props.comprobarRespuesta}/>{props.api[i].correct_answer}
            {matriz}
            
        </div> 
        )
        
        
        

    }
    
    return(
        <div>
            {matrizPreguntasRespuestas}
            <button onClick={props.validar}>Comprobar</button>
            
        </div>
    );
}
export default Preguntas;