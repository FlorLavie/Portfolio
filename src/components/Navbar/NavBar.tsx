import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-800 z-50">
      
      <div className="max-w-7xl mx-auto px-30 py-6 pt-6   flex justify-between items-center">

        {/* IZQUIERDA - REDES */}
        <div className="flex gap-8">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <FaGithub size={40} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        {/* DERECHA - LINKS */}
        <nav className="flex items-center gap-8 text-md text-gray-300  ">

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