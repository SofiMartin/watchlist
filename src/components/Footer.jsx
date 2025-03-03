import { FileText, Lock } from "phosphor-react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 mt-12 shadow-inner">
    <div className="container mx-auto text-center">
      <p className="text-lg font-medium">
        © 2025 Películas de Pokémon. Todos los derechos reservados.
      </p>
      <div className="mt-4">
        <a
          href="#"
          className="flex items-center justify-center text-blue-100 hover:text-blue-200 transition duration-300 mx-2"
        >
          <FileText size={20} className="mr-2" /> Términos de servicio
        </a>
        |
        <a
          href="#"
          className="flex items-center justify-center text-blue-100 hover:text-blue-200 transition duration-300 mx-2"
        >
          <Lock size={20} className="mr-2" /> Política de privacidad
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
