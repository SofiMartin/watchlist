import MovieCard from './MovieCard';

const MovieList = ({ movies, onAdd }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} onAdd={onAdd} />
    ))}
  </div>
);

export default MovieList;