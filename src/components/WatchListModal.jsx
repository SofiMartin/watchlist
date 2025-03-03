
const WatchlistModal = ({ watchlist, onClose, onRemove }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Mi Lista</h2>
        <ul>
          {watchlist.map(movie => (
            <li key={movie.id} className="flex justify-between items-center mb-2">
              <span>{movie.title}</span>
              <button
                onClick={() => onRemove(movie.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
  
  export default WatchlistModal;