import React from "react";
import "../../style-sheets/Button.css"

function Button({ text, urlRedirect }){
    const handleClick = () =>{
        window.location.href = urlRedirect
    }
    return(
        <button className="Button" onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button