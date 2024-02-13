import React from "react";
import "../../style-sheets/Header.css"

function Header({ name }){ 
    return(

        <div className="header">
        Hello {name}, Welcome to Soundview 🎧
        </div>
    )
}

export default Header