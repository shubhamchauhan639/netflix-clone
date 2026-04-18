import React from 'react'
import { useDispatch } from 'react-redux'
import { Api_option } from '../../utils/constant'
import {addTrailerVideo } from '../../utils/movieSlice'
import { useEffect } from 'react'

const useMovieTrailer = (movieId) => {
       const dispatch = useDispatch();
    const getMovieVideo = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, Api_option)
        const videos = await data.json();
        console.log(videos);
        const filterData = videos.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : videos.results[0];
        
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getMovieVideo();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default useMovieTrailer
