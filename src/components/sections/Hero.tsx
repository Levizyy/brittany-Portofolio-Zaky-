import profile from '@/content/profile.json';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 md:pl-[calc(var(--sidebar-width)+40px)] pt-20">
      <div className="max-w-3xl">
        <p className="text-[#00F5D4] font-mono mb-4">Hi, I'm {profile.name}</p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">{profile.title}</h1>
        <p className="text-lg text-white/70 mb-8 leading-relaxed">{profile.tagline}</p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Button href="#projects">Lihat Proyek Saya</Button>
          <Button variant="outline" href="#contact">Ayo Mengobrol</Button>
        </div>
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
          <div><p className="text-3xl font-heading font-bold">{profile.stats.years}</p><p className="text-xs text-white/50 uppercase">Years Exp.</p></div>
          <div><p className="text-3xl font-heading font-bold">{profile.stats.projects}</p><p className="text-xs text-white/50 uppercase">Proyek Selesai</p></div>
          <div><p className="text-3xl font-heading font-bold">{profile.stats.clients}</p><p className="text-xs text-white/50 uppercase">Happy Clients</p></div>
        </div>
      </div>
    </section>
  );
}