import React from "react";
import "../../style-sheets/Button.css"

function ButtonReq({ text, onClick }){

    
    
    return(
        <button className="Button" onClick={onClick}>
            {text}
        </button>
    )}


export default ButtonReq