import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondContainer = () => {
  const movies = useSelector(store => store.movies)

  return (
    <div className='bg-black'>
      
      <div className="relative z-20 mt-0 md:-mt-32 lg:-mt-52">

        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />

        <MovieList
          title={"Upcoming"}
          movies={movies.upComing}
        />

        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
        />

        <MovieList
          title={"Top Rated"}
          movies={movies.topRated}
        />

      </div>

    </div>
  )
}

export default SecondContainer