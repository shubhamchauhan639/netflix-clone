import { createBrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import Login from './login'
import Brouse from './Brouse'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser , removeUser } from '../utils/userSlice'




const Body = () => {
  const dispath = useDispatch()
 

       const appRouter = createBrowserRouter([
        {
path : "/",
element : <Login/>
    },
    {
        path : "/brouse",
        element : <Brouse/>
    }
]);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid , email , displayName} = user;
    dispath(addUser({uid : uid , email : email , displayName : displayName}));
    
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // ...
  } else {
    dispath(removeUser())
   
    // User is signed out
    // ...
  }
});
}, [])
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
