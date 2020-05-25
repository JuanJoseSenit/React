import React from 'react';




function ListaAnimal(props){
    let array=[];
    
    for(let i=0;i<props.datos.length;i++){
        array.push(
            <div>{props.datos[i]}</div>
        )
    }
    return(
        <div>
            
            {array}
        </div>
    );
}
export default ListaAnimal;