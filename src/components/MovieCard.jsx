import React from 'react'
import { Img_CDN } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
   <div className="w-32 sm:w-40 md:w-52 lg:w-60 flex-shrink-0">
  <img
    className="
      w-full
      rounded-xl
      object-cover
      shadow-lg
      hover:scale-105
      transition-transform
      duration-300
      cursor-pointer
    "
    src={Img_CDN + posterPath}
    alt="MovieCard"
  />
</div>
  )
}

export default MovieCard
