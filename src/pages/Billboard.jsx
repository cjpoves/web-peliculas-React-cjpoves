import { useEffect, useState } from "react"
import { NavBar } from "../components/NavBar"
import { BillBoardMovies } from "../components/BillBoardMovies"

export const Billboard = () => {

        const [peliculas, setPeliculas] = useState([])
    

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmZmNTA3MDcwOWE4N2FjZGNjNGRmNjMxMmE4OGM1MCIsIm5iZiI6MTc0MTI1NzU2NC42OTUwMDAyLCJzdWIiOiI2N2M5N2I1YzRhZjhhNjg5YTIwMzQ4YjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KNgNrA6RhFPa0mBebt1YuAIEzcA5LLnMV0Ev9DY9hVw'
            }
        };
      
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => setPeliculas(res.results))
    }, [])

    return(

        <>
            <NavBar/>
            <h1>Cartelera</h1>

            <ul className="peliculas animate__animated animate__fadeInDown">
                {peliculas.map((pelicula) => (
                          
                          
                
                    <BillBoardMovies key={pelicula.id} pelicula={pelicula} />
                            
                          
                ) )}
                </ul>

        
        </>
    )
}