import SkillCard from "./SkillsCard";
import { motion } from "framer-motion";

import {
  Code,
  Server,
  Database,
  Wrench,
} from "lucide-react";

function Skills() {
  const skillsData = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "APIs REST"],
    },
    {
      title: "Base de Datos",
      icon: Database,
      skills: ["MySQL", "SQL"],
    },
    {
      title: "Herramientas",
      icon: Wrench,
      skills: ["Postman", "Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-10 py-20">

      {/* TITULO */}
      <div className="text-center mb-20">
        

        <h2 className="text-md md:text-5xl font-bold">
          Mis <span className="text-purple-400">Habilidades</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
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

    </section>
  );
}

export default Skills;