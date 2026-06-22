import ProjectCard from "./ProjectsCard";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      title: "Sistema de Gestión para Centro de Actividades Físicas",
      description:
        "Sistema web para la gestión integral de un centro de actividades: registro y login de usuarios, gestión de empleados, profesores y clientes, administración de clases, reservas y membresías.",
      tech: ["React", "TypeScript", "Vite", "Rust"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
      link: "https://github.com/canizafa/sistema-cef",
      linkLabel: "Ver código",
    },
    {
      title: "CMS de Testimonios",
      description:
        "Aplicación web tipo CMS desarrollada en equipo de 4 personas bajo metodología ágil. Frontend con React, Vite y Tailwind CSS integrado a una API REST con Node.js y Express.",
      tech: ["React", "TypeScript", "Node.js", "Express"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
      link: "https://testimonial-cms-main.vercel.app",
      linkLabel: "Ver proyecto",
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