import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from './hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
<div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden -mt-20">
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover scale-125 pointer-events-none"
    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1`}
    title="YouTube video player"
    allow="autoplay; encrypted-media"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none"></div>

  {/* Bottom fade */}
  <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

</div>
  )
}

export default VideoBackground