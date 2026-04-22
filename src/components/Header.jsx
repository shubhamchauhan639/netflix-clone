import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
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

  return (
    <div className="fixed top-0 left-0 px-8 w-full py-2 z-50 bg-gradient-to-b from-black flex justify-between items-center">

      {/* Logo */}
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />


      {/* User section */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full hidden md:block"
            src={user?.photoURL}
            alt="user"
          />

<button className="py-2 px-4 m-2 bg-blue-500 text-white">GPt search</button>
          <button
            onClick={handleSignOut}
            className="text-white font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
 
