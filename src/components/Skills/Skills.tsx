import SkillCard from "./SkillsCard";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Wrench,
  Users,
  ShoppingCart,
  Monitor,
} from "lucide-react";

function Skills() {
  const skillsData = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Backend y Base de datos",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "SQL"],
    },
    {
      title: "E-commerce y CMS",
      icon:ShoppingCart,
      skills: ["WordPress", "Shopify"],
    },
    {
      title: "Herramientas",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "Trello", "Jira", "IA Aplicada al Desarrollo", "GTM"],
    },
    {
      title: "Sistemas Operativos",
      icon: Monitor,
      skills: ["Linux", "Windows"],
    },
    {
      title: "Habilidades Blandas",
      icon: Users,
      skills: [
        "Trabajo en equipo",
        "Metodologías ágiles (Scrum, Kanban)",
        "Atención al detalle",
        "Pensamiento analítico",
        "Aprendizaje continuo",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#0c1322] w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">

        {/* TITULO */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Mis <span className="text-purple-400">Habilidades</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
          {skillsData.map((item, index) => (
            <motion.div
              key={item.title}
              className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <SkillCard
                title={item.title}
                icon={item.icon}
                skills={item.skills}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;