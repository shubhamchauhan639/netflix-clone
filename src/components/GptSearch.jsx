import React from "react";
import GptMovies from "./GptMovies";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
   <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">

  {/* Background Overlay */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm -z-10"></div>

  {/* Search Section */}
  <section className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-10 lg:px-16">
    <div className="max-w-5xl mx-auto">
      <GptSearchBar />
    </div>
  </section>

  {/* Movies Section */}
  <section className="mt-8 sm:mt-10 md:mt-14 px-3 sm:px-6 md:px-10 lg:px-16 pb-10 sm:pb-14">
    <div className="max-w-7xl mx-auto">
      <GptMovies />
    </div>
  </section>

</div>
  );
};

export default GptSearch;