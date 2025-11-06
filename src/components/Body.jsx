import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Login from './login'
import Brouse from './Brouse'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

       const appRouter = createBrowserRouter([
        {
path : "/",
element : <Login/>
    },
    {
        path : "/brouse",
        element : <Brouse/>
    }
])
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
