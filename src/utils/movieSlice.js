import { createSlice } from "@reduxjs/toolkit";
import { add } from "firebase/firestore/pipelines";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null
    },
    reducers : {
        addNowPlayingMovies : (state , action) =>{
            state.nowPlayingMovies = action.payload
        } 
    }
})
export const {addNowPlayingMovies} = movieSlice.actions
export default movieSlice.reducer