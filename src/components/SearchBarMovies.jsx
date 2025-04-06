export const SearchBarMovies = ({pelicula}) => {
    const {id, title, overview, poster_path, release_date} = pelicula;
          
          const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
            <li className="animate__animated animate__zoomInDown" key={id}>
              <h2>{title}</h2>
              <p>{overview}</p>
              <p>Release Date: {release_date}</p>
              <img src={imageUrl} alt={title}/>
            </li>
    )
}