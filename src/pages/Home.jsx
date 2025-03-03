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
        
        {/* Grid de películas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {movie.title}
                </h3>
                <button
                  onClick={() => addToWatchlist(movie)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300"
                >
                  Agregar a Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
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