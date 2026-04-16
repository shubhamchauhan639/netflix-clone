import React from 'react'
import { Api_option } from '../utils/constant'
import { useEffect } from 'react'
const VideoBackground = ({ movieId }) => {
    const getMovieVideo = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, Api_option)
        const videos = await data.json();
        console.log(videos);
        const filterData = videos.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : videos.results[0];
        
        console.log(trailer);
    }
    useEffect(()=>{
        getMovieVideo();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default VideoBackground
