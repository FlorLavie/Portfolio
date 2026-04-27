import ProjectCard from "./ProjectsCard.tsx";
import { motion } from "framer-motion";

function Projects() {

const projectsData = [
  {
    title: "Proyecto Full Stack",
    description:
      "Aplicación web completa con frontend en React y backend en Node.js. Incluye autenticación de usuarios, consumo de APIs REST y gestión de base de datos.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    image:
      "https://videocursos.co/wp-content/uploads/2023/09/full-stack.webp",
    github: "#",
    demo: "#",
  },
  {
    title: "Proyecto Testing QA",
    description:
      "Proyecto enfocado en testing manual de aplicaciones web. Incluye diseño y ejecución de casos de prueba, reporte de bugs y validación de funcionalidades utilizando Postman.",
    tech: ["Testing QA", "Postman", "Test Cases", "Bug Tracking"],
    image:
      "https://img.freepik.com/vector-gratis/pruebas-software-personaje-dibujos-animados-programador-lupa-busca-defectos-programa-aplicacion-errores-errores-riesgos-software-ilustracion-metafora-concepto-aislado-vector_335657-2742.jpg?semt=ais_hybrid&w=740&q=80",
    github: "#",
    demo: "#",
  },
];
  return (
    <section id="projects" className="mx-auto px-40 py-15">

      {/* TITULO */}
      <div className="text-center mb-20">
        

        <h2 className="text-4xl md:text-5xl font-bold">
          Mis <span className="text-purple-400">Proyectos</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
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