import React, { useState } from 'react';
import { useParams } from 'react-router-dom';



function Contador2(props){
    const[contador,setCount]=useState(Number (useParams().id));
    return(
        <div>
            Contador: {contador}
            <button onClick={()=>setCount(contador-1)}>-</button>
            <button onClick={()=>setCount(contador+1)}>+</button>
            
        </div>
    );
}
export default Contador2;