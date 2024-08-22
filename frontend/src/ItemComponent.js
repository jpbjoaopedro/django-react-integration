import React from "react";

export default function ItemComponent(props){
    const status = props.status
    return <li>{props.name} 
    <p>Status: {status ? <b>Finalizado</b> : <b>Não finalizado</b>}</p></li>
}