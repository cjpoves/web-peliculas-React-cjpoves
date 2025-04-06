import { Link, useNavigate } from "react-router";
import "./LogIn.css";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //Funcion para acceder con email y contraseña de firebase
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          //Navega a la página si el inicio de sesión es éxitoso
          navigate("/searchMovies");
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
        
        <form onSubmit={handleSubmit} className="logForm">
            <h1 className="textoForm">Ingresar</h1>

            <input className="inputForm"
                type="text"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            
            <input className="inputForm"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            
        
        <button className="buttonForm" type="submit"
        >Acceder</button>

        <Link to = {"/signUp"} className="btnPagina" >Página de registro</Link>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}        

        </>
    )
}