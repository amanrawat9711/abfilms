import React from 'react'
import { useParams } from 'react-router-dom'
import { sampleData, upcomingMovies } from '../assets/assets'

const FilmDetails = () => {
    const {id} = useParams()
    const filmId = parseInt(id)
    const film = sampleData.find((item)=>item.id===filmId) || upcomingMovies.find((item)=>item.id===filmId)
    if (!film) {
        return <p className="text-center mt-10 text-red-600">Item not found</p>;
      }
    
  return (
    <div className="p-6 text-gray-700">
  <h1 className="text-3xl font-bold text-center mb-6 uppercase">{film.title}</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
    {film.images.map((img, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
      >
        <img
          src={img}
          alt={`${film.title} ${index + 1}`}
          className="w-full h-40 object-cover"
        />
      </div>
    ))}
  </div>
  <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed">{film.about}</p>
</div>

  
  )
}

export default FilmDetails