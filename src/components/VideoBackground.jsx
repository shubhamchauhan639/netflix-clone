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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/NKYea63tQmI?si=5rzGT6UXs85Dvwpz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground
