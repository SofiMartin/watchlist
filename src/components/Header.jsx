import { MagnifyingGlass, UserCircle, List } from "phosphor-react";

const Header = ({ onOpenWatchlist }) => (
  <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <h1 className="font-poppins text-3xl font-extrabold">
        Películas de Pokémon
      </h1>

      {/* Botón e íconos */}
      <div className="flex items-center space-x-4">
        {/* Botón "Ver mi lista" */}
        <button
          onClick={onOpenWatchlist}
          className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          <List size={20} className="mr-2" /> Ver mi lista
        </button>

        {/* Íconos */}
        <MagnifyingGlass
          size={24}
          className="text-gray-200 hover:text-white cursor-pointer transition duration-300 transform hover:scale-110"
        />

        <UserCircle
          size={24}
          className="text-gray-200 hover:text-white cursor-pointer transition duration-300"
        />
      </div>
    </div>
  </header>
);

export default Header;
