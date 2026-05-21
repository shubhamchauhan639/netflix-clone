import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-4 sm:py-6">

      {/* Title */}
      <h1
        className="
          text-white
          text-lg sm:text-xl md:text-2xl
          font-semibold
          mb-4 sm:mb-5
        "
      >
        {title}
      </h1>

      {/* Scroll Row */}
      <div
        className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="flex gap-3 sm:gap-4 md:gap-5">

          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="
                flex-shrink-0
                hover:scale-105
                transition-transform
                duration-300
                cursor-pointer
              "
            >
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default MovieList
