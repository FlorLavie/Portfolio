type SkillCardProps = {
  title: string;
  icon: React.ElementType;
  skills: string[];
};

function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <div className="relative bg-[#283243] p-8 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">

      {/* ICONO */}
      <Icon className="w-10 h-10 text-purple-400 mb-5" />

      {/* TITULO */}
      <h3 className="text-xl font-semibold mb-5 text-white">
        {title}
      </h3>

      {/* LISTA */}
      <ul className="space-y-3 text-gray-300">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>

      {/* EFECTO HOVER */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-purple-500/5 transition"></div>
    </div>
  );
}

export default SkillCard;