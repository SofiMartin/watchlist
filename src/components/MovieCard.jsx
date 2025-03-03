const MovieCard = ({ movie, onAdd }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{movie.title}</h3>
        <button
          onClick={() => onAdd(movie)}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Agregar a mi lista
        </button>
      </div>
    </div>
  );
  
  export default MovieCard;