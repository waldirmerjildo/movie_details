import React, {useEffect, useState} from "react";

import styles from "../css/MovieDetails.module.css";
import { useParams } from "react-router-dom";
import get from "../utils/httpClient";
import Loading from "../components/Loading";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";

function MovieDetails() {
    
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)
      



    useEffect(() => {
      setIsLoading(true);
       get('/movie/'+ movieId).then(data => {
        setIsLoading(false);
        setMovie(data)
       })
      
    }, [movieId]);

    // if(isLoading){
    //   return <Loading/>
    
    if(isLoading){
      return <Spinner/>;
    }
    if (!movie){
        return null;
    }
    
  const imgUrl = getMovieImg(movie.poster_path,500)
  // const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
    <img className={`${styles.col} ${styles.movieImage}` } src={imgUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.MovieDetails}}`}>
        <p className={styles.firstItem}>Title: {movie.title}</p>
        <p>
          <strong>Genres</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Descrption:</strong> {movie.overview}
        </p>
        
     
      </div>
      
    </div>
  );
}

export default MovieDetails;
