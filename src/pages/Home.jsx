import { useState } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import WatchlistModal from '../components/WatchListModal';
import useWatchlist from '../hooks/useWatchlist';
import Footer from '../components/Footer';

const movies = [
  {
    id: 1,
    title: "Pokémon: La Película",
    image: "/PokemonTheMovie.jpg",
  },
  {
    id: 2,
    title: "Pokémon 2000",
    image: "/PokemonTheMovie2000.jpg",
  },
  {
    id: 3,
    title: "Pokémon 3: El Hechizo de los Unown",
    image: "/HechizoUnown.jpg",
  },
  {
    id: 4,
    title: "Pokémon 4Ever",
    image: "/Pokemon-4ever.jpg",
  },
  {
    id: 5,
    title: "Pokémon Heroes",
    image: "/PokemonHeroes.jpg",
  },
  {
    id: 6,
    title: "Pokémon: Jirachi y los Deseos",
    image: "/JirachiyLosDeseos.jpg",
  },
];

const Home = () => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header onOpenWatchlist={() => setIsModalOpen(true)} />
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Películas Disponibles
        </h2>
        
        {/* Usar MovieList */}
        <MovieList movies={movies} onAdd={addToWatchlist} />
      </div>

      <Footer />

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