
import imgreference from '../Data/img.jfif'
export function getMovieImg(path, width){

    return  path? `https://image.tmdb.org/t/p/w${width}${path}`: imgreference
}