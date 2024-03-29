import React from "react";
import "../../style-sheets/Songs.css"


/**
 * 
 * @param {string} are sent to the props function:
*   index => is the order in the list of artists
  * name => artist name
  * popularitu => the popularity of the artist
  * genre => the genre of the artist
  * img => iamgen URL
 * @returns 
 */

function Songs ({index, name, popularity, duration_ms,img}){
    return(
        <div className="songs">
            <h2 className="id">{index+1}</h2>
            <span className="info-song">
                <h2>Name: {name}</h2>
                <h2>Popularity: {popularity}</h2>
                <h2>Aprox Duration: ${Math.round(duration_ms / 60000)} min</h2>
            </span>
            <img className="image-song" src={img} alt="" />
        </div>
    )

}

export default Songs