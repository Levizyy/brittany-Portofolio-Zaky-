export default function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="mb-12">
      <span className="text-[#00F5D4] font-mono text-sm">{number} — {title}</span>
      <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">{subtitle}</h2>
    </div>
  );
}