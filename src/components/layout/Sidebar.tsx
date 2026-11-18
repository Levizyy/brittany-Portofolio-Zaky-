import socials from "@/content/socials.json";
import profile from "@/content/profile.json";
import SocialLink from "@/components/ui/SocialLink";
import Button from "@/components/ui/Button";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[var(--sidebar-width)] bg-[#0F0F23]/95 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col z-50">
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-white">ZAKY<span className="text-[#00F5D4]">.DEV</span></h1>
        <p className="text-sm text-white/60 mt-1">Aspiring Web Developer</p>
      </div>
      <div className="space-y-3 mb-8">
        <SocialLink platform="instagram" url={socials.instagram} value="@zakyfvi._" />
        <SocialLink platform="whatsapp" url={socials.whatsapp} value="+62 897-5249-000" />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {[
            ["Tentang", "about"],
            ["Keahlian", "skills"],
            ["Proyek", "projects"],
            ["Kontak", "contact"],
          ].map(([label, target]) => (
            <li key={target}>
              <a href={`#${target}`} className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded transition">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-6 border-t border-white/10">
        <Button href="#contact" className="w-full">Hubungi Saya →</Button>
        <p className="text-xs text-white/40 mt-3 text-center">✦ {profile.availability}</p>
      </div>
    </aside>
  );
}