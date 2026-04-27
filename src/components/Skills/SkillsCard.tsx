type SkillCardProps = {
  title: string;
  icon: React.ElementType;
  skills: string[];
};

function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <div className="relative bg-[#283243] p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">

      {/* ICONO */}
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-400 mb-4 sm:mb-5" />

      {/* TITULO */}
      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 text-white">
        {title}
      </h3>

      {/* LISTA */}
      <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 sm:gap-3">
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