import React from 'react';




function Estrellas(props){
    let matrizEstrellas=[];
    for(let i=0;i<10;i++){
        matrizEstrellas.push(
            <span onClick={()=>props.alerta(i+1)} className='icon-star'></span>
        )

    }
    console.log(matrizEstrellas);

   
    return(
        <div>
            {matrizEstrellas}
            
        </div>
    );
}
export default Estrellas; 