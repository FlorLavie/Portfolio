function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-10">

      {/* TITULO */}
      <div className="text-center mb-8">
        <p className="text-lg font-bold text-purple-400 mb-1 tracking-widest uppercase">
          Contacto
        </p>

        <p className="text-gray-400">
          Si tenés una propuesta, proyecto o consulta, podés escribirme.
        </p>
      </div>

      {/* FORM */}
      <form className="flex flex-col gap-6">

        <input
          type="text"
          placeholder="Tu nombre"
          className="bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          required
        />

        <input
          type="email"
          placeholder="Tu email"
          className="bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          required
        />

        <textarea
          rows={5}
          placeholder="Tu mensaje"
          className="bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-lg font-medium text-gray-200"
        >
          Enviar mensaje
        </button>

      </form>

    </section>
  );
}

export default Contact;