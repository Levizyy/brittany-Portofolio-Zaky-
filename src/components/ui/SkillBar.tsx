export default function SkillBar({ name, percentage, level, icon }: { name: string; percentage: number; level: string; icon: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="flex items-center gap-2"><span>{icon}</span> {name}</span>
        <span className="text-xs text-[#00F5D4]">{level}</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div className="bg-[#6C63FF] h-2 rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}