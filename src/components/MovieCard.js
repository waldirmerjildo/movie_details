import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/MovieCard.module.css'
// import imgreference from '../Data/img.jfif'
import { getMovieImg } from '../utils/getMovieImg'

function MovieCard({movie}) {
    console.log(styles)
    const imgUrl = getMovieImg(movie.poster_path,300)
    // const imgUrl =movie.poster_path ? 'https://image.tmdb.org/t/p/w300'+ movie.poster_path : imgreference
    return (
        <li className={styles.movieCard}>
            <Link to={'/movies/'+ movie.id}>

            <img
            width={230}
            height={345}
            className={styles.movieImage} src={imgUrl} alt={movie.title}/>
            <div>

            {movie.title}
                    
            </div>
            </Link>
            <a className={styles.ver} href="https://www.youtube.com/watch?v=Vte_kf5CSSM">ver</a>
           
            </li>
    )
}

export default MovieCard
