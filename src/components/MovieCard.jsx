import React from 'react';
import { Plus, Star } from 'phosphor-react';

const MovieCard = ({ movie, onAdd }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      {/* Contenedor de la imagen */}
      <div className="w-full h-48 sm:h-64 flex items-center justify-center bg-gray-200 overflow-hidden">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">{movie.title}</h3>
          <button
            onClick={() => console.log("Película favorita", movie.title)}
            className="p-2 rounded-full hover:bg-gray-100 transition duration-300"
          >
            <Star size={24} weight="fill" className="text-yellow-400 hover:text-yellow-500" />
          </button>
        </div>
        {/* Botón actualizado */}
        <button
          onClick={() => onAdd(movie)}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2"
        >
          <Plus size={18} weight="bold" />
          <span className="text-sm">Agregar a mi lista</span>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;