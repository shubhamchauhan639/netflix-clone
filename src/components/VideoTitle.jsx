import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[30%] left-12 text-white z-10 max-w-xl">
      
      <h1 className="text-5xl font-bold mb-4">
        {title}
      </h1>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-opacity-80 transition">
          ▶ Play
        </button>

        <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded-md font-semibold hover:bg-opacity-50 transition">
          More Info
        </button>
      </div>

    </div>
  )
}

export default VideoTitle
