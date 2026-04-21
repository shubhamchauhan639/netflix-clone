import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';


const SecondContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
       <div className='-mt-55 pl-12 relative - z-20'>

  <MovieList title ={"Now Playing"} movies = {movies.nowPlayingMovies} />
  <MovieList title ={"Upcoming"} movies = {movies.upComing} />
  <MovieList title ={"Popular"} movies = {movies.popularMovies} />
  <MovieList title ={"Top Rated"} movies = {movies.topRated} />
    </div>
    </div>
   
  )
}

export default SecondContainer
