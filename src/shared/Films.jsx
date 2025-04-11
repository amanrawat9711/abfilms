import React, { useState } from 'react'
import { sampleData, upcomingMovies } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import useVisibleCount from './VisibleCount'
import { motion, AnimatePresence } from 'framer-motion'

const Films = () => {
  const navigate = useNavigate()
  const visibleCount = useVisibleCount()
  const [latestIndex, setLatestIndex] = useState(0)
  const [upcomingIndex, setUpcomingIndex] = useState(0)

  const handleNext = (type, dataLength, currentIndex, setIndex) => {
    if (currentIndex + visibleCount < dataLength) {
      setIndex(currentIndex + 1)
    }
  }

  const handlePrev = (currentIndex, setIndex) => {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1)
    }
  }

  const renderSlider = (title, data, index, setIndex, type) => (
    <div className="relative">
      <div className="flex justify-between mb-2">
        <h1 className='text-2xl text-gray-700 font-bold'>{title}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => handlePrev(index, setIndex)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded cursor-pointer lg:hidden"
          >
            ←
          </button>
          <button
            onClick={() => handleNext(type, data.length, index, setIndex)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded cursor-pointer lg:hidden"
          >
            →
          </button>
        </div>
      </div>
  
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 overflow-hidden"
        >
          {data.slice(index, index + visibleCount).map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/films/${item.id}`)}
              className="cursor-pointer shadow-md p-1"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 md:h-48 object-cover rounded-md"
              />
              <p className="font-black uppercase tracking-wide text-md text-gray-800 mt-2">{item.title}</p>
              <p className="text-sm text-gray-600">{item.about}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
  

  return (
    <div className='m-3'>
      {renderSlider("Latest Films", [...sampleData].reverse(), latestIndex, setLatestIndex, 'latest')}
      <div className="mt-10" />
      {renderSlider("Upcoming Films", [...upcomingMovies].reverse(), upcomingIndex, setUpcomingIndex, 'upcoming')}

      <div className='flex items-center justify-center mt-8'>
        <button
          onClick={() => navigate("/films")}
          className='cursor-pointer px-6 py-2 border rounded-md hover:text-white hover:bg-black'
        >
          All Films
        </button>
      </div>
    </div>
  )
}

export default Films
