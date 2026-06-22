type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  linkLabel: string;
};

function ProjectCard({ title, description, tech, image, link, linkLabel }: ProjectProps) {
  return (
    <div className="w-full bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-400/40 transition hover:-translate-y-1 hover:shadow-md hover:shadow-purple-500/10">

      {/* IMAGEN */}
      <img
        src={image}
        alt={title}
        className="w-full h-36 sm:h-44 md:h-52 object-cover"
      />

      {/* CONTENIDO */}
      <div className="p-4 sm:p-5 md:p-6">

        <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* TECNOLOGIAS */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-purple-500/10 text-purple-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* BOTON */}
        <div className="flex gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 hover:bg-purple-600 transition px-4 py-2 rounded-lg text-sm font-medium text-center text-white"
          >
            {linkLabel}
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;