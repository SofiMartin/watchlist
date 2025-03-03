const Header = ({ onOpenWatchlist }) => (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide hover:text-gray-200 transition duration-300">Películas de Pokémon</h1>
        <button
          onClick={onOpenWatchlist}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105"
        >
          Ver mi lista
        </button>
      </div>
    </header>
  );
  
  export default Header;
  