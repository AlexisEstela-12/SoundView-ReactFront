import React from "react";
import "../../style-sheets/Artists.css"

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
function Artists({index,name,popularity,genre,img}){

    return(
        <div className="artists">
            <h2 className="id"> {index+1}</h2>
            <span className="info-artist">
                <h2>Name: {name}</h2>
                <h2>Popularity: {popularity}</h2>
                <h2>Genres: {genre[0]}</h2> 
            </span>
            <img className="image-artist" src={img} alt="" />
        </div>
    )
}

export default Artists