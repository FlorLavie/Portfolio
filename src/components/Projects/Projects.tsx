import ProjectCard from "./ProjectsCard";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      title: "Sistema de Gestión para Centro de Actividades Físicas - Trabajo en equipo de 5 personas bajo metodología Scrum",
      description:
        "Sistema web para la gestión integral de un centro de actividades: registro y login de usuarios, gestión de empleados, profesores y clientes, administración de clases, reservas y membresías.",
      tech: ["React", "TypeScript", "Vite", "Rust", "SQLx", "Git", "GitHub", "Postman", "IA Aplicada al Desarrollo", "Taiga"],
      image: "/Panel_del_empleado.png",
      link: "https://sistema-cef.vercel.app/admin/clases",
      linkLabel: "Ver Proyecto",
      githubLink: "https://github.com/canizafa/sistema-cef",
    },
    {
      title: "CMS de Testimonios",
      description:
        "**Integración de Servicios:** CMS para gestión de testimonios con roles diferenciados; integración de servicios externos para el manejo de media y contenidos (Cloudinary, YouTube API). **Stack y Arquitectura:** desarrollo full stack (React, Vite, Tailwind CSS) conectado a una API REST (Node.js/Express/PostgreSQL), documentada con Swagger. **Resultados y Metodología:** trabajo en equipo bajo metodología Scrum, con foco en la automatización de flujos de moderación de datos en tiempo real y en la implementación de un dashboard con filtros y paginación.",
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Cloudinary", " YouTube API", "Swagger", "Git", "GitHub", "Trello", "IA Aplicada al Desarrollo", "Postman"],
      image: "/testimonials.png",
      link: "https://testimonial-cms-main.vercel.app",
      linkLabel: "Ver proyecto",
      githubLink: "https://github.com/leonasturizaga/NCs1125e44",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20">

      {/* TITULO */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Mis <span className="text-purple-400">Proyectos</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Projects;