import { useState } from "react"
// import Alert from "./Alert";

const Formulario = ({setMensaje}) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
   
    const handleSubmit  = (e) => {
        e.preventDefault();
        if( nombre === "" ||! isValidEmail(email) || password === ""|| password2 === "" ){
            setMensaje("Los campos deben estar llenos");
        } else if (password !== password2){
            setMensaje('La contraseña no coincide');
        }else {
            setMensaje('¡Hola! Registro exitoso');
        }
    };
    const isValidEmail = (email) =>{
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.value= email;
        return emailInput.validity.valid;
    };


    return (
    <>
    <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
            <label></label>
            <input
            placeholder="Nombre"
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value ={nombre}
            />
        </div>
    <div className="form-group">
        <label></label>
        <input
        placeholder="Email"
        type="email"
        name="email"
        className="form-control"
        onChange={(e)=> setEmail(e.target.value)}
        value= {email}
        />
    </div>
    <div className="form-group">
        <label></label>
        <input
        placeholder="Password"
        type="password"
        name="password"
        className="form-control"
        onChange={(e)=> setPassword(e.target.value)}
        value= {password}
        />
    </div>
    <div className="form-group">
        <label></label>
        <input
        placeholder="Confirmación password"
        type="password"
        name="password2"
        className="form-control"
        onChange={(e)=> setPassword2(e.target.value)}
        value= {password2}
        />
    </div>
    <button type="submit" className="btn btn-block btn-lg btn-success">Registrarse</button>
</form>
</>
)
}
export default Formulario
