import React from "react";
import "../../style-sheets/LoginDash.css"
import LogoSpotify from "../../images/spotify.png"
import Button from "../../components/Login_view/Button";

function LoginDash(){
    const Login_URL = "http://localhost:3002/spotify"
    return(
        <div className="container-big">
            {console.log('URL de Redirección:', process.env.REACT_APP_LOGIN_URL)}
            <h2 className="title">Bienvenido a SoundView🎧</h2>
            <h3>Ingresa a tu cuenta de Spotify y mira tus Top artistas y tus canciones mas escuchadas</h3>
            <img className="spotify" src= {LogoSpotify} alt="" />
            <Button 
                text = "Login"
                urlRedirect={ Login_URL }
            />
        </div>
    )
}


export default LoginDash
