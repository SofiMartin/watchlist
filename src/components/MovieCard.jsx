

const MovieCard = ({ movie, onAdd }) => (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>
      <button
        onClick={() => onAdd(movie)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Agregar a mi lista
      </button>
    </div>
  );
  
  export default MovieCard;