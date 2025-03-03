import MovieCard from './MovieCard';

const MovieList = ({ movies, onAdd }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} onAdd={onAdd} />
    ))}
  </div>
);

export default MovieList;