function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

      {/* TEXTO */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-300">
          Hola, soy <br />
          <span className="text-purple-400">Florencia Lavié</span>
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-bold">
          Full Stack Developer Jr | QA Tester
        </h2>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Estudiante de Analista Programador Universitario (UNLP) con formación en desarrollo web y Testing QA.
          Construyo APIs REST con Node.js y desarrollo interfaces con React.
          Conocimiento en herramientas como Postman, Git y GitHub.
        </p>

        {/* BOTONES */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <button className="bg-purple-500 text-gray-200 hover:bg-purple-600 transition px-5 py-3 rounded-lg font-medium">
            Ver proyectos
          </button>

          <button className="border text-purple-400 border-purple-400 px-5 py-3 rounded-lg hover:bg-purple-400/10 transition">
            Descargar CV
          </button>
        </div>
      </div>

      {/* IMAGEN */}
      <div className="flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl"></div>

          {/* Imagen */}
          <img
            src="/tu-foto.jpg"
            alt="Florencia"
            className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-2 border-purple-500"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;