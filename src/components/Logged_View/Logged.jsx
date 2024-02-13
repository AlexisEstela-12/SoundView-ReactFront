import React from "react";
import "../../style-sheets/Logged.css"
import Header from "./Header";  
import Personal from "./Personal";
import Songs from "./Songs";
import { useLocation } from "react-router-dom";
import ButtonReq from "./Button_request";
import { useState } from 'react';
import Artists from "./Artists";


function Logged(){

    // get personal information
    const location = useLocation()
    const encodedPersonalInfo = new URLSearchParams(location.search).get('info')
    const personal_info = encodedPersonalInfo ? JSON.parse(decodeURIComponent(encodedPersonalInfo)) : null

    //artists and songs column visbility 
    const [showSongs, setShowSongs] = useState(true);  
    const [showArtists, setShowArtists] = useState(false);

    

    // handle button TopSongs push
    const [topSongs, setTopSongs] = useState([])
    const handleButtonSongs = async () =>{
        try {
            const response = await fetch(`http://localhost:3002/getSongs/${personal_info.id}`);

            if (!response.ok) {
                console.error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
                return;
            }
            const data = await response.json();
            setTopSongs(data)
            setShowSongs(true) // show songs column
            setShowArtists(false) //hide artist column
        } catch(error){
            console.error('Error en la solicitud:', error);
        }
    }
    // handle button TopArtists push
    const [topArtists, setTopArtists] = useState([])
    const handleButtonArtists = async () =>{
        try{
            const response = await fetch(`http://localhost:3002/getArtists/${personal_info.id}`)

            if (!response.ok) {
                console.error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
                return;
            }

            const data = await response.json()
            console.log(data)
            setTopArtists(data)
            setShowArtists(true) // show artists column
            setShowSongs(false) // hide songs column

        }catch(error){
            console.error('Error en la solicitud:', error);
        } 
    }
        

    return(
        <div className="container-logged">
            <Header
            name= {personal_info.display_name} 
            />
            <Personal 
            name= {personal_info.display_name}
            email = {personal_info.email}
            url = {personal_info.href}
            followers = {personal_info.followers.total}
            image = {personal_info.images}
            />
            <div className="request">
            <ButtonReq 
            text="Top Songs"
            onClick= {handleButtonSongs}
            />
            <ButtonReq 
            text="Top Artist"
            onClick={handleButtonArtists}
            />
            </div>
            <div className="column-songs">
                {showSongs && topSongs.map((songs,index)=> (
                    <Songs
                    index = {index}
                    name={songs.name}
                    popularity={songs.popularity}
                    duration_ms={songs.duration_ms}
                    img = {songs.album.images[1].url} 
                    />
                ))}
            </div>
            <div className="column-artists">
                {showArtists && topArtists.map((artists,index) => (
                    <Artists 
                    index = {index}
                    name= {artists.name}
                    popularity = {artists.popularity}
                    genre= {artists.genres[0]}
                    img = {artists.images[1].url}
                    />
                ))}
            </div>
        </div>
    )
}
export default Logged