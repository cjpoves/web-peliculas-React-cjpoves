import { Link } from "react-router"
import "./LogIn.css";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export const SignUp = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const [valido, setValido] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();

        //Funciones de validacion de los campos
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            setTimeout(() => {
                setError('')
           }, 2000)
            return;
        }

        if (!email.includes("@")) {
            setError("Debe ser un correo electrónico")
            setTimeout(() => {
                setError('')
           }, 2000)
            return; 
        }

            // Funcion para crear usuario con email y contraseña de Firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                    // ...
                    setValido("Cuenta creada correctamente");
                    setEmail("");
                    setPassword("");
                    setNombre("");

                setTimeout(() => {
                    setValido('')
               }, 2000)
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message)
                // Limpiar mensaje de error
                setTimeout(() => {
                    setError('')
               }, 2000)
            });
    }



    return(
        <>

        <form onSubmit = {handleSubmit} className="logForm">
        <h1 className="textoForm">Registrate</h1>

        <input className="inputForm"
        type="text"
        placeholder="Tu Nombre"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
        required/>
        <input className="inputForm"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="correo@correo"
        value={email}
        required/>
        <input className="inputForm"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Contraseña"
        value={password}
        required/>
        <button className="buttonForm" type="submit"
        >Registrarse</button>
        <Link to = {"/"} className="btnPagina"  >Página de inicio</Link>
        </form>
    
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {valido && <p style={{ color: 'green' }}>{valido}</p>}
        </>
    )
}