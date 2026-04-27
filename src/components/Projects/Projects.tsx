import ProjectCard from "./ProjectsCard";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      title: "Proyecto Full Stack",
      description:
        "Aplicación web completa con frontend en React y backend en Node.js. Incluye autenticación de usuarios, APIs REST y base de datos.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      image:
        "https://videocursos.co/wp-content/uploads/2023/09/full-stack.webp",
      github: "#",
      demo: "#",
    },
    {
      title: "Proyecto Testing QA",
      description:
        "Testing manual de aplicaciones web con casos de prueba, reporte de bugs y validación con Postman.",
      tech: ["Testing QA", "Postman", "Test Cases"],
      image:
        "https://img.freepik.com/vector-gratis/pruebas-software-personaje-dibujos-animados-programador-lupa-busca-defectos-programa-aplicacion-errores-errores-riesgos-software-ilustracion-metafora-concepto-aislado-vector_335657-2742.jpg",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20">

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