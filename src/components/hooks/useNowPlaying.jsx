import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { Api_option } from '../../utils/constant'
import { addNowPlayingMovies } from '../../utils/movieSlice'

const useNowPlaying = () => {
     const dispatch  = useDispatch()
  const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", Api_option);
    const movies = await data.json();
    console.log(movies.results);
    dispatch(addNowPlayingMovies(movies.results))
  }

  useEffect(() => {
    getMovies();
  }, [])
}
export default useNowPlaying