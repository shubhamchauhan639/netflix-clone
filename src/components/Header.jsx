import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import {toggelGptSearch } from "../utils/gptSlice";
// import { photoURL } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  // ✅ Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

     dispatch(
  addUser({
    uid,
    email,
    displayName: displayName || "User",  // ✅ fallback
    photoURL:
      photoURL ||
      "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  })
);
        navigate("/brouse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  // ✅ Sign out
  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  const handleGptSearch = () => {
    dispatch(toggelGptSearch());
  }
  return (
    <div className="fixed top-0 left-0 px-4 sm:px-6 md:px-8 w-full py-2 md:py-3 z-50 bg-gradient-to-b from-black via-black/90 to-transparent flex justify-between items-center">

  {/* Logo */}
  <img
    className="w-28 sm:w-36 md:w-44 object-contain"
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
    alt="logo"
  />

  {/* User section */}
  {user && (
    <div className="flex items-center gap-2 sm:gap-4">

      <img
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full hidden md:block border border-white/20"
        src={user?.photoURL}
        alt="user"
      />

      <button
        onClick={handleGptSearch}
        className="py-2 px-3 sm:px-4 m-1 sm:m-2 bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-medium rounded-lg transition duration-200 shadow-md"
      >
        AI Search
      </button>

      <button
        onClick={handleSignOut}
        className="py-2 px-3 sm:px-4 text-white text-sm sm:text-base font-semibold bg-white/10 hover:bg-white/20 rounded-lg transition duration-200"
      >
        Sign Out
      </button>

    </div>
  )}
</div>
  );
};

export default Header;
 
