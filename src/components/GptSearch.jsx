import React from 'react'
import GptMovies from './GptMovies'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <div className='bg-black h-screen'>
              <GptSearchBar/>
     <GptMovies/>
        </div>
      
    </div>
  )
}

export default GptSearch
