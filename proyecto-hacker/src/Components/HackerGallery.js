import React from 'react';
import '../styles/GalleryStyle.scss';

function HackerGallery(props){
    let array=[];
    console.log(props.myApi)

    for(let i=0; i<props.myApi.length;i++){
        if(props.myApi[i].url.includes('.html')){
            array.push(
                <div>
                    <figure><iframe className="cams" title='cameras'src={props.myApi[i].url}/></figure>
                    <p className="texto">
                    <p className="nombre">Nombre: {props.myApi[i].name}</p>
                    <p>Latitud: {props.myApi[i].latitude}</p>
                    <p>Longitud: {props.myApi[i].longitude}</p>
                    </p>
                    
                </div>
            )
        }else{
            array.push(
                <div>
                    <figure><img className="imagenes" alt='imagen no disponible' src={props.myApi[i].url}/></figure>
                    <p className="texto">
                    <p>Nombre: {props.myApi[i].name}</p>
                    <p>Latitud: {props.myApi[i].latitude}</p>
                    <p>Longitud: {props.myApi[i].longitude}</p>
                    </p>
                    
                </div>
            )
        }
    }
    
    return(
        <div className="contenedor-imagenes">
            {array}
        </div>
    );

   
}
export default HackerGallery;