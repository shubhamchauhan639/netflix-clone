import ai from "../utils/openAi";
// import ai from "../utils/gemini";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import { Api_option} from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      Api_option
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // Gemini API Call
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });

    // Error handling
    if (!response.text) {
      return;
    }

    console.log(response.text);

    // Convert string into array
    const gptMovies = response.text.split(",");

    // Search each movie in TMDB
    const promiseArray = gptMovies.map((movie) =>
      searchMovieTMDB(movie.trim())
    );

    // Wait for all promises
    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    // Dispatch data to redux store
    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
  <div className="flex justify-center items-center pt-24 sm:pt-32 md:pt-40 px-4 sm:px-6">

  <form
    className="
      w-full 
      max-w-3xl 
      bg-black/70 
      backdrop-blur-lg 
      border border-white/10
      p-3 sm:p-4 
      rounded-2xl 
      shadow-2xl 
      flex 
      flex-col sm:flex-row 
      gap-3
    "
    onSubmit={(e) => e.preventDefault()}
  >

    <input
      ref={searchText}
      type="text"
      placeholder="What would you like to watch?"
      className="
        flex-1 
        px-4 py-3 sm:py-4
        rounded-xl 
        outline-none 
        bg-white 
        text-black 
        placeholder-gray-500 
        text-sm sm:text-base
        focus:ring-2 
        focus:ring-red-500
      "
    />

    <button
      onClick={handleGptSearchClick}
      className="
        w-full sm:w-auto
        px-6 sm:px-8 
        py-3 sm:py-4
        bg-red-600 
        hover:bg-red-700
        active:scale-95
        text-white 
        font-semibold 
        rounded-xl 
        transition-all 
        duration-200
        shadow-lg
      "
    >
      Search
    </button>

  </form>

</div>
  );
};

export default GptSearchBar;