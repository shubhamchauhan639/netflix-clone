import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
  const movies = useSelector(store=>store.movies?.nowPlayingMovies)

  if (movies === null) return;
  const mainMovie = movies[2];
  console.log(mainMovie);

  const {original_title , overview , id} = mainMovie;
  return (
  <div className="pt-20 relative">
            <VideoBackground movieId = {id} />
         <VideoTitle title = {original_title} overview = {overview} />

    </div>
  )
}

export default MainContainer
