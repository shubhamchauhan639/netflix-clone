import { createSlice } from "@reduxjs/toolkit";
import { add } from "firebase/firestore/pipelines";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null
    },
    reducers : {
        addNowPlayingMovies : (state , action) =>{
            state.nowPlayingMovies = action.payload
        } ,
    addPopularMovies : (state , action) =>{
state.popularMovies = action.payload
    },
      addUpcoming : (state , action)=>{
            state.upComing = action.payload
        },
      addTopRated : (state , action)=>{
            state.topRated = action.payload;
        },
        addTrailerVideo : (state ,action) =>{
            state.trailerVideo = action.payload;
        },
      
    }
})
export const {addNowPlayingMovies , addTrailerVideo , addPopularMovies, addUpcoming, addTopRated} = movieSlice.actions
export default movieSlice.reducer