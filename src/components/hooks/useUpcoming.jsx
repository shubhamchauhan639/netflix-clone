import { Api_option } from "../../utils/constant";
import {addUpcoming } from "../../utils/movieSlice";
import { useDispatch } from "react-redux";
import {  useEffect } from "react";


const useUpcoming = () => {
     const dispatch  = useDispatch()
  const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", Api_option);
    const movies = await data.json();
    console.log(movies.results);
    dispatch(addUpcoming(movies.results))
  }

  useEffect(() => {
    getMovies();
    
  }, [])
}
export default useUpcoming