import { Trash } from "phosphor-react"; 

const WatchlistModal = ({ watchlist, onClose, onRemove }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 transition-opacity duration-300">
    <div className="bg-white rounded-lg w-full max-w-md overflow-hidden shadow-xl transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white">Mi Lista de Películas</h2>
      </div>
      <div className="p-6">
        {watchlist.length === 0 ? (
          <p className="text-gray-600 text-center">Tu lista está vacía.</p>
        ) : (
          <ul>
            {watchlist.map((movie) => (
              <li key={movie.id} className="flex justify-between items-center mb-4">
                <span className="text-gray-800 text-lg">{movie.title}</span>
                <button
                  onClick={() => onRemove(movie.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center"
                >
                  <Trash size={20} className="mr-2" /> Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="bg-gray-100 p-4 flex justify-end rounded-b-lg">
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
);

export default WatchlistModal;
