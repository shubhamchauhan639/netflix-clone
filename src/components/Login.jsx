import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [isSignIn,setSignIn]= useState(true)
  const toggleSignInForm =()=>{
    setSignIn(!setSignIn)

  }
  return (
    <div>
      <Header/>
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg" alt="background" />
             <form className="bg-black/80 p-12 rounded-md w-3/12 flex flex-col items-center gap-4 
                       absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-3xl font-bold mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn &&  <input
          type="text"
          placeholder="Name"
          className="p-4 w-full bg-gray-700 text-white rounded-md outline-none"
        />}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 w-full bg-gray-700 text-white rounded-md outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 w-full bg-gray-700 text-white rounded-md outline-none"
        />

        <button className="w-full bg-red-600 text-white font-semibold p-4 rounded-md hover:bg-red-700 transition" onClick={toggleSignInForm}>
          {isSignIn ? "Sign In" : "Sign Out"}
        </button>
       <label className='text-white mb-15 mr-57 text-2xl'><input type="checkbox" className='text-white w-5 h-5' /> Remember me</label> 
<p className="p-4 text-white">
  <span className="text-gray-400">New to Netflix?</span>{" "}
  <span
    className="cursor-pointer hover:underline text-white"
    onClick={toggleSignInForm}
  >
    Sign Up Now
  </span>
</p>      </form>
      </div>
    </div>
  )
}

export default Login
