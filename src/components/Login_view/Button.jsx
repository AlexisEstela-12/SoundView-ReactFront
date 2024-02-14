import React from "react";
import "../../style-sheets/Button.css"




/**
    @param {string} are sent to the props function:
 *  text => the text that will say inside the button
 *  urlRedirect => the function that will be performed when the button is pressed
 *  
 * @returns 
 */
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