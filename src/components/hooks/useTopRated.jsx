import { Api_option } from "../../utils/constant";
import {addTopRated } from "../../utils/movieSlice";
import { useDispatch } from "react-redux";
import {  useEffect } from "react";


const useTopRated = () => {
     const dispatch  = useDispatch()
  const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", Api_option);
    const movies = await data.json();
    console.log(movies.results);
    dispatch(addTopRated(movies.results))
  }

  useEffect(() => {
    getMovies();
    
  }, [])
}
export default useTopRated