import { Api_option } from "../../utils/constant";
import { addPopularMovies } from "../../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const usePopular = () => {
     const dispatch  = useDispatch()

     const popularMovies =useSelector(store => store.movies?.popularMovies);
  const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", Api_option);
    const movies = await data.json();
   
    dispatch(addPopularMovies(movies.results))
  }

  useEffect(() => {
    if(!popularMovies)
    getMovies();
    
  }, [])
}
export default usePopular