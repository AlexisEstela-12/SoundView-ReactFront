import React from "react";
import "../../style-sheets/Button.css"



/**
    @param {string} are sent to the props function:
 *  text => the text that will say inside the button
 *  onClick => the function that will be performed when the button is pressed
 *  
 * @returns 
 */
function ButtonReq({ text, onClick }){
    return(
        <button className="Button" onClick={onClick}>
            {text}
        </button>
    )}


export default ButtonReq