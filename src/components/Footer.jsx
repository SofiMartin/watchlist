import { FileText, Lock, GithubLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-800 to-purple-900 text-white p-6 mt-12 shadow-inner">
    <div className="container mx-auto text-center">
      {/* Texto principal */}
      <p className="text-lg font-medium mb-4">
        © 2025 Películas de Pokémon. Todos los derechos reservados.
      </p>

      {/* Enlaces importantes */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-6">
        <a
          href="#"
          className="flex items-center text-gray-200 hover:text-gray-50 transition duration-300"
        >
          <FileText size={20} className="mr-2" /> Términos de servicio
        </a>
        <a
          href="#"
          className="flex items-center text-gray-200 hover:text-gray-50 transition duration-300"
        >
          <Lock size={20} className="mr-2" /> Política de privacidad
        </a>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/SofiMartin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-gray-50 transition duration-300"
        >
          <GithubLogo size={24} />
        </a>
        <a
          href="https://linkedin.com/in/mariasofiamartin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-gray-50 transition duration-300"
        >
          <LinkedinLogo size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;