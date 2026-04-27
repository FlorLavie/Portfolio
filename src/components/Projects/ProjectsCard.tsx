type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
}: ProjectProps) {
  return (
    <div className="bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-400/40 transition hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">

      {/* IMAGEN */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* CONTENIDO */}
      <div className="p-6">

        <h3 className="text-xl font-semibold mb-2 text-white">
          {title}
        </h3>

        <p className="text-gray-300 mb-4">
          {description}
        </p>

        {/* TECNOLOGIAS */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* BOTONES */}
        <div className="flex gap-4">
          <a
            href={demo}
            target="_blank"
            className="bg-purple-500 hover:bg-purple-600 transition px-4 py-2 rounded-lg text-sm font-medium"
          >
            Ver Demo
          </a>

          <a
            href={github}
            target="_blank"
            className="border border-purple-400 px-4 py-2 rounded-lg text-sm hover:bg-purple-400/10 transition"
          >
            GitHub
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;