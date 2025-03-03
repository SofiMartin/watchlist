import { useState } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import WatchlistModal from '../components/WatchListModal';
import useWatchlist from '../hooks/useWatchlist';

const movies = [
  { id: 1, title: "Pokémon: La Película", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Pokémon 2000", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Pokémon 3: El Hechizo de los Unown", image: "https://via.placeholder.com/300" },
];

const Home = () => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header onOpenWatchlist={() => setIsModalOpen(true)} />
      <div className="container mx-auto p-4">
        <MovieList movies={movies} onAdd={addToWatchlist} />
      </div>
      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          onRemove={removeFromWatchlist}
        />
      )}
    </div>
  );
};

export default Home;