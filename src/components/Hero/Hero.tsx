// Cambiá la ruta acá si "assets" está un nivel más arriba (../assets/3.png)
import foto from '../../assets/3.png';

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

      {/* TEXTO */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-300">
          Hola, soy <br />
          <span className="text-purple-400">Florencia Lavié</span>
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-bold">
          Full Stack Developer
        </h2>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Estudiante avanzada de la carrera Analista Programador Universitario (UNLP) 
          con formación en desarrollo Full Stack y conocimientos en diseño. 
          Participé en proyectos colaborativos desarrollando aplicaciones web con React, TypeScript, Node.js, SQL y Git. 
          
        </p>

        {/* BOTONES */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-purple-500 text-gray-200 hover:bg-purple-600 transition px-5 py-3 rounded-lg font-medium text-center"
          >
            Ver proyectos
          </a>

          <a
            href="/Florencia-Lavie-CV.pdf"
            download="Florencia_Lavie_CV.pdf"
            className="border text-purple-400 border-purple-400 px-5 py-3 rounded-lg hover:bg-purple-400/10 transition text-center"
          >
            Descargar CV
          </a>
        </div>
      </div>

      {/* IMAGEN */}
      <div className="flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl"></div>

          {/* Imagen */}
          <img
            src={foto}
            alt="Florencia"
            className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover object-top rounded-full border-2 border-purple-500 opacity-80"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;