import profile from '@/content/profile.json';
import SectionHeader from '@/components/ui/SectionHeader';

export default function About() {
  return (
    <section id="about" className="px-8 md:pl-[calc(var(--sidebar-width)+40px)] py-20">
      <SectionHeader number="01" title="Tentang Saya" subtitle="Mengenal Saya" />
      <p className="text-[#00F5D4] font-mono mb-6">Masih belajar, terus berkarya.<br/>👩‍💻✦ Growing one project at a time</p>
      <h3 className="text-2xl font-bold mb-4">{profile.name} — Aspiring Web Developer</h3>
      <div className="space-y-4 text-white/70 leading-relaxed">
        {profile.bio.split('\n').map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="flex flex-wrap gap-3 mt-8">
        {profile.traits.map((t) => <span key={t} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full">{t}</span>)}
      </div>
    </section>
  );
} 