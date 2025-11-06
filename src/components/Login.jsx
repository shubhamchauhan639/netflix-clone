import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg" alt="background" />
             <form className="bg-black/80 p-12 rounded-md w-3/12 flex flex-col items-center gap-4 
                       absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-3xl font-bold mb-4">Sign In</h1>

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 w-full bg-gray-700 text-white rounded-md outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 w-full bg-gray-700 text-white rounded-md outline-none"
        />

        <button className="w-full bg-red-600 text-white font-semibold p-3 rounded-md hover:bg-red-700 transition">
          Sign In
        </button>
      </form>
      </div>
    </div>
  )
}

export default Login
