import React from 'react'
import Header from './Header'
import { useState , useRef } from 'react'
import { checkValidData } from '../utils/validate'

const Login = () => {

  const [isSignIn,setSignIn]= useState(true)
  const [errorMessage , setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick =()=>{
    console.log(email.current.value);
  // console.log(password.current.value);
const message = checkValidData(email.current.value , password.current.value)
console.log(message)
setErrorMessage(message)
  }
  const toggleSignInForm =()=>{
    setSignIn(!isSignInsetSignIn)
  
  
  

  }
  return (
    <div>
      <Header/>
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg" alt="background" />
             <form onSubmit={(e)=>e.preventDefault()} className="bg-black/80 p-12 rounded-md w-3/12 flex flex-col items-center gap-4 
                       absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-3xl font-bold mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn &&  <input
          type="text"
          placeholder="Name"
          className="p-4 w-full bg-gray-700 text-white rounded-md outline-none"
        />}

        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 w-full bg-gray-700 text-white rounded-md outline-none"
        />

        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 w-full bg-gray-700 text-white rounded-md outline-none"
        />
<p className='text-red-600'>{errorMessage}</p>
        <button className="w-full bg-red-600 text-white font-semibold p-4 rounded-md hover:bg-red-700 transition" onClick={handleButtonClick}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
       <label className='text-white mb-15 mr-57 text-2xl'><input type="checkbox" className='text-white w-5 h-5' /> Remember me</label> 
<p className="p-4 text-white">
  <span className="text-gray-400">{isSignIn ? "New to Netflix?" : "Already registered"}</span>{" "}
  <span
    className="cursor-pointer hover:underline text-white"
    onClick={toggleSignInForm}
  >
  {isSignIn ? "Sign Up" : "Sign In"}
  </span>
</p>      </form>
      </div>
    </div>
  )
}

export default Login
