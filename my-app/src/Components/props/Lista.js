import React, { Component } from 'react';
import Item from './Item';



class Lista extends Component {  
    render(){
        let items=[];
        for(let i=0;i<5;i++){
            items.push(<Item numero={i+1}></Item>)
        }

        return(
            <div>{items}</div>
            
        );
    }
}
export default Lista;