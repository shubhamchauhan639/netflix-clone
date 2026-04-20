import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies);
  return (
<div className="px-6 md:px-12 py-6 bg-black">
  
  {/* Title */}
  <h1 className="text-white text-xl md:text-2xl font-semibold mb-4">
    {title}
  </h1>

  {/* Scroll Row */}
  <div className="flex overflow-x-scroll no-scrollbar">
    <div className="flex gap-4">
      {movies?.map(movie => (
        <MovieCard key={movie.id} posterPath={movie.poster_path} />
      ))}
    </div>
  </div>

</div>
  )
}

export default MovieList
