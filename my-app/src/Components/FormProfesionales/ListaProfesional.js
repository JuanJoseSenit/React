import React from 'react';




function ListaProfesional(props){
    let array=[];
    
    for(let i=0;i<props.datos.length;i++){
        if(props.datos[i].img==="mujer"){
            array.push(
            <div>
                <p><img alt="mujer" src="./assets/woman.png"/></p>
                <p>Nombre: {props.datos[i].nombre}</p>
                <p>Profesión: {props.datos[i].profesion}</p>
                
            
            </div>
            ) 

            }else{
                array.push(
                    <div>
                        <p><img alt="hombre" src="./assets/man.png"/></p>
                        <p>Nombre: {props.datos[i].nombre}</p>
                        <p>Profesión: {props.datos[i].profesion}</p>
                    
                    
                    </div>
                    ) 

            }
    }
    return(
        <div>
            
            {array}
        </div>
    );
}
export default ListaProfesional;