import React from "react";
import "../../style-sheets/Header.css"

/**
    @param {string} are sent to the props function:
 *  name => the username that enters the app
 * 
 * @returns 
 */
function Header({ name }){ 
    return(
        <div className="header">
        Hello {name}, Welcome to Soundview 🎧
        </div>
    )
}

export default Header