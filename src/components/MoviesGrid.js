import React, {useEffect, useState} from "react";

import MovieCard from "./MovieCard";
import styles from '../css/MoviesGrid.module.css'
import get from "../utils/httpClient";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from 'react-infinite-scroll-component'
import { Empty } from "./Empty";



function MoviesGrid() {
    // let movies=[];
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
  
    const query = useQuery();
    const search =  query.get("search")

    


   useEffect(() => {
    setIsLoading(true)
    const searchUrl = search ? "/search/movie?query="+ search + '&page=' + page :"/discover/movie?page=" + page;
    //  get('/discover/movie').then((data) => {
      get(searchUrl).then((data) => {
    setMovies((prevMovies) => prevMovies.concat(data.results) ) ;
    setHasMore(data.page < data.total_pages)
    setIsLoading(false)
});
},[search,page]);


if(!isLoading &&  movies.length === 0 ){
 return <Empty/>
}
// if(isLoading){
//   return <Spinner/>
// }

   
    
   
  return (
    <InfiniteScroll dataLength={movies.length} hasMore={true} next={() => setPage((prevpage) => prevpage + 1)}
    loader={<Spinner/>}>

      <ul className={styles.moviesGrid}>
        {movies.map((movie) => <MovieCard key={movie.id} movie = {movie}/> )}
      </ul>
    </InfiniteScroll>
    
  );
}

export default MoviesGrid;
