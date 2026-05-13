import React from "react";
import GptMovies from "./GptMovies";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10"></div>

      {/* Search Section */}
      <div className="pt-24 px-4 md:px-10">
        <GptSearchBar />
      </div>

      {/* Movies Section */}
      <div className="mt-10 px-2 md:px-6 pb-10">
        <GptMovies />
      </div>
    </div>
  );
};

export default GptSearch;