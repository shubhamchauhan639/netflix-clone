import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { Api_option } from '../../utils/constant'
import { addNowPlayingMovies } from '../../utils/movieSlice'
import { useSelector } from "react-redux";

const useNowPlaying = () => {
     const dispatch  = useDispatch()
     const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", Api_option);
    const movies = await data.json();
   
    dispatch(addNowPlayingMovies(movies.results))
  }

  useEffect(() => {
    if(!nowPlayingMovies)
    getMovies();
    
  }, [])
}
export default useNowPlaying