type SkillCardProps = {
  title: string;
  icon: React.ElementType;
  skills: string[];
};

function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <div className="relative h-full bg-[#283243] p-4 sm:p-5 md:p-6 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">

      {/* ICONO */}
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-400 mb-3 sm:mb-4" />

      {/* TITULO */}
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
        {title}
      </h3>

      {/* LISTA */}
      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
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