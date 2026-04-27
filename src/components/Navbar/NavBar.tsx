import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-800 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4 md:py-5 flex justify-between items-center">

        {/* IZQUIERDA */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-300 hover:text-purple-400 transition" />
          <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-300 hover:text-purple-400 transition" />
        </div>

        {/* DERECHA */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm md:text-base text-gray-200">
          <a href="#projects" className="hover:text-purple-400 transition font-medium">
            Proyectos
          </a>

          <a href="#skills" className="hover:text-purple-400 transition font-medium">
            Habilidades
          </a>

          <a href="#contact" className="hover:text-purple-400 transition font-medium">
            Contacto
          </a>
        </nav>

      </div>

    </header>
  );
}

export default Navbar;