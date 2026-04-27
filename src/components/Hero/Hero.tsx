function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-30 pt-44 pb-20 grid md:grid-cols-2 gap-16 items-center">

      {/* TEXTO */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-300">
          Hola, soy <br />
          <span className="text-purple-400">Florencia Lavié</span>
        </h1>

        <h2 className="mt-5 text-2xl text-gray-200 font-bold">
          Full Stack Developer Jr | QA Tester
        </h2>

        <p className="mt-7 text-lg text-gray-300 leading-relaxed">
          Estudiante de Analista Programador Universitario (UNLP) con formación en desarrollo web y Testing QA.
          Construyo APIs REST con Node.js y desarrollo interfaces con React.
          Conocimiento en herramientas de testing y desarrollo como Postman, Git, GitHub.
        </p>

        {/* BOTONES */}
        <div className="mt-8 flex flex-wrap gap-4 text-base">
          <button className="bg-purple-500 text-gray-200 hover:bg-purple-600 transition px-6 py-3 rounded-lg font-medium">
            Ver proyectos
          </button>

          <button className="border text-purple-400 border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/10 transition">
            Descargar CV
          </button>
        </div>
      </div>

      {/* IMAGEN */}
      <div className="flex justify-end -mt-6">
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl"></div>

          {/* Imagen */}
          <img
            src="/tu-foto.jpg"
            alt="Florencia"
            className="relative w-64 h-64 md:w-90 md:h-90 object-cover rounded-full border-2 border-purple-500"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;