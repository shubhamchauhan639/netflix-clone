import React from 'react'

import Header from './Header'
import useNowPlaying from './hooks/useNowPlaying'



const Brouse = () => {
  useNowPlaying();

 
  return (
    <div>
      <Header/>
       browse   </div>
  )
}

export default Brouse
