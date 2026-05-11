import React from 'react';
import { useRef } from 'react';

const GptSearchBar = () => {
  const searchText = useRef(null)

  const handleSearch = () => {
    console.log(searchText.current.value);
  }

  return (
    <div className="flex justify-center items-center pt-40 px-4">
      <form className="w-full max-w-2xl bg-black/70 backdrop-blur-md p-4 rounded-2xl shadow-lg flex gap-3" onSubmit={(e) => e.preventDefault()} >
        
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch?"
          className="flex-1 p-3 rounded-lg outline-none bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-red-500"
        />

        <button onClick={handleSearch}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200"
        >
          Search
        </button>

      </form>
    </div>
  );
};

export default GptSearchBar;