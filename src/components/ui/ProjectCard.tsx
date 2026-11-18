interface ProjectProps {
  icon: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  links: { demo: string | null; code: string };
}

export default function ProjectCard({ icon, category, title, description, stack, links }: ProjectProps) {
  return (
    <div className="glass p-6 rounded-xl hover:translate-y-[-4px] transition-transform">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{icon}</span>
        <span className="text-xs text-[#00F5D4] font-mono">{category}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/60 text-sm mb-4 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((t) => (
          <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">{t}</span>
        ))}
      </div>
      <div className="flex gap-3">
        {links.demo ? (
          <a href={links.demo} target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white border border-white/20 px-3 py-1 rounded hover:bg-white/10 transition">Live Demo</a>
        ) : (
          <span className="text-sm text-white/50 border border-white/10 px-3 py-1 rounded" aria-disabled="true">Live Demo · Coming Soon</span>
        )}
        <a href={links.code} target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white border border-white/20 px-3 py-1 rounded hover:bg-white/10 transition">View GitHub</a>
      </div>
    </div>
  );
}