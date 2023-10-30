import React from "react";
import Formulario from "./Formulario";
import SocialBoton from "./SocialBoton";


const Registro = () =>{

    return(
         
        <div className="registro-container">
            <h1>Crea una cuenta</h1>
        <div className="social-buttons">
            <SocialBoton icon="bi bi-facebook" />
            <SocialBoton icon="bi bi-instagram"/>
            <SocialBoton icon="bi bi-github"/>
        </div>
        <h5>O usa tu email para registrarte</h5>
        
        
        </div>
    )
};
export default Registro;