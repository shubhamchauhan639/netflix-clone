import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute
      top-[20%] sm:top-[24%] md:top-[30%]
        left-4 sm:left-8 md:left-12
        right-4
        text-white
        z-30
        max-w-[95%] sm:max-w-xl md:max-w-2xl
      "
    >

      {/* Title */}
      <h1
        className="
          text-3xl sm:text-5xl md:text-6xl
          font-extrabold
          mb-3 md:mb-4
          leading-tight
          drop-shadow-2xl
        "
      >
        {title}
      </h1>

      {/* Overview */}
      <p
        className="
          text-xs sm:text-sm md:text-base lg:text-lg
          text-gray-300
          mb-4 md:mb-6
          leading-relaxed
          max-w-[95%] sm:max-w-xl
          line-clamp-2 sm:line-clamp-3 md:line-clamp-none
        "
      >
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex gap-3 sm:gap-4">

        <button
          className="
            bg-white
            text-black
            px-4 sm:px-6
            py-2 sm:py-3
            rounded-md
            text-sm sm:text-base
            font-semibold
            hover:bg-gray-200
            transition
            shadow-md
          "
        >
          ▶ Play
        </button>

        <button
          className="
            bg-gray-700/70
            backdrop-blur-sm
            text-white
            px-4 sm:px-6
            py-2 sm:py-3
            rounded-md
            text-sm sm:text-base
            font-semibold
            hover:bg-gray-600/70
            transition
          "
        >
          More Info
        </button>

      </div>

    </div>
  )
}

export default VideoTitle