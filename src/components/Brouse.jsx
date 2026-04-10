import React from 'react'

import Body from './Body'
import Header from './Header'
import { useEffect } from 'react'
import { Api_option } from '../utils/constant'


const Brouse = () => {
  const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", Api_option);
    const movies = await data.json();
    console.log(movies);
  }

  useEffect(() => {
    getMovies();
  }, [])
 
  return (
    <div>
      <Header/>
       browse   </div>
  )
}

export default Brouse
