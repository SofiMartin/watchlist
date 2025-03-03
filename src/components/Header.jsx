
const Header = ({ onOpenWatchlist }) => (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Películas de Pokémon</h1>
        <button
          onClick={onOpenWatchlist}
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
        >
          Ver mi lista
        </button>
      </div>
    </header>
  );
  
  export default Header;