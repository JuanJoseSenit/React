import React from 'react';
import { useState, useEffect } from 'react';






function Preguntas(props){

    
    
    
    let matrizPreguntasRespuestas=[];
    for(let i=0;i<props.api.length;i++){
        matrizPreguntasRespuestas.push(
        <div>
            <p>Question {i+1} </p>
            <p>{props.api[i].question}</p>

        </div>)
        


    }
    
    return(
        <div>
            {matrizPreguntasRespuestas}
            
        </div>
    );
}
export default Preguntas;