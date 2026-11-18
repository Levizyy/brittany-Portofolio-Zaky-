import socials from '@/content/socials.json';
import SocialLink from '@/components/ui/SocialLink';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Contact() {
  return (
    <section id="contact" className="px-8 md:pl-[calc(var(--sidebar-width)+40px)] py-20">
      <SectionHeader number="04" title="Kontak" subtitle="Mari Berkarya Bersama" />
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-white/70 mb-6">Punya ide atau ingin menyapa? Kirim pesan atau hubungi saya lewat media sosial.</p>
          <h4 className="text-xl font-bold mb-4">Terbuka untuk belajar</h4>
          <p className="text-white/60 mb-8">Saya ingin terus belajar dan berkolaborasi melalui proyek yang sesuai dengan kemampuan saya.</p>
          <div className="space-y-3">
            <SocialLink platform="instagram" url={socials.instagram} value="@zakyfvi._" />
            <SocialLink platform="whatsapp" url={socials.whatsapp} value="+62 897-5249-000" />
          </div>
        </div>
        <form className="space-y-4 glass p-6 rounded-xl">
          <input type="text" placeholder="NAMA" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#6C63FF]" />
          <input type="email" placeholder="ALAMAT EMAIL" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#6C63FF]" />
          <textarea placeholder="PESAN" rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#6C63FF]"></textarea>
          <button type="submit" className="w-full bg-[#6C63FF] text-white py-3 rounded font-medium hover:bg-[#5a52e0] transition neon-glow">Kirim Pesan →</button>
        </form>
      </div>
    </section>
  );
}