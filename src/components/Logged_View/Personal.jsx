import React from "react";
import nn from "../../images/nn.png"
import "../../style-sheets/Personal.css"

function Personal (props){

    return(
        <div className="personal">
            {props.image.length !== 0 ? (<img src={props.image} alt="Imagen del usuario"  className="personal-image"/>) : (<img src={nn} alt="Imagen desconocido"  className="personal-image"/>)
            }
            <span className="personal-info">
                <h2>Name : {props.name} </h2>
                <h2>Email : {props.email} </h2>
                <h2>Personal Account : {props.url}</h2>
                <h2>Followers : {props.followers}</h2>
            </span> 
        </div>
    )
}

export default Personal