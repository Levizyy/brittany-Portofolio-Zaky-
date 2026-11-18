import projects from '@/content/projects.json';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:pl-[calc(var(--sidebar-width)+40px)] py-20">
      <SectionHeader number="03" title="Proyek / Projects" subtitle="Karya Pilihan" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => <ProjectCard key={p.id} {...p} />)}
      </div>
    </section>
  );
}