import React from 'react'
import { Img_CDN } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className='w-70'>
      <img src={Img_CDN + posterPath} alt="MovieCard" />
    </div>
  )
}

export default MovieCard
