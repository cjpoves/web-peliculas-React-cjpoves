import { Link, useNavigate } from "react-router";
import "./NavBar.css";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const NavBar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <>
        <nav className="navegacion">
            <Link to={"/searchMovies"}>Buscar pelicula</Link>
            <Link to={"/trending"}>En Tendencia</Link>
            <Link to={"/billboard"}>Cartelera</Link>
            <Link to={"/nextMovies"}>Próximos estrenos</Link>
            <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path> <path d="M9 12h12l-3 -3"></path> <path d="M18 15l3 -3"></path> </svg> </button>
            
        </nav>
        </>
        

    )
}