import { Api_option } from "../../utils/constant";
import { addPopularMovies } from "../../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const usePopular = () => {
     const dispatch  = useDispatch()
  const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", Api_option);
    const movies = await data.json();
    console.log(movies.results);
    dispatch(addPopularMovies(movies.results))
  }

  useEffect(() => {
    getMovies();
    
  }, [])
}
export default usePopular