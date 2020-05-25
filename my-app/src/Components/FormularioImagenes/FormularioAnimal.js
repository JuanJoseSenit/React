import React, { useState } from 'react';
import ListaAnimal from './ListaAnimales';



function FormularioAnimal(){
    //const[text,setText]=useState();
    //const[text2,setText2]=useState();
    const[arrayResultado, setArrayResultado]=useState([]);
    
   
   
   const resultado=()=>{
        let texto1=document.getElementById("texto").value;
        let texto2=document.getElementById("texto2").value;
        //array.push(text);
        //array.push(text2);
       
        setArrayResultado([...arrayResultado,texto1,texto2]);
        
    }
    
    return(
        <div>
            
            <form>
                Escriba algo sobre el animal:<input id="texto" type="text"/>
                Deje su opinion: <input id="texto2" type="text"/>
                <input type="button" onClick={resultado} />
                
            </form>
            
            <ListaAnimal datos={arrayResultado}></ListaAnimal>
            
        </div>
    );

   
}
export default FormularioAnimal;