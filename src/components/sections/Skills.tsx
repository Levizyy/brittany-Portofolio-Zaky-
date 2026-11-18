"use client";

import { useEffect, useState } from "react";
import skills from "@/content/skills.json";

const skillFilters = ["Semua", "Frontend", "Backend", "Tools"] as const;
type SkillFilter = (typeof skillFilters)[number];

export default function Skills() {
  const [skillFilter, setSkillFilter] = useState<SkillFilter>("Semua");

  useEffect(() => {
    const revealElements = document.querySelectorAll("#skills .reveal");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-wrap">
      <section id="skills" className="section-shell skills-shell">
        <div className="skills-heading reveal">
          <div className="skills-intro">
            <div className="section-label">02 — Keahlian / Skills</div>
            <h2>Teknologi yang Saya <span>Pelajari</span></h2>
            <p className="section-desc">
              Teknologi dan tools yang sedang saya pelajari untuk membuat website.
            </p>
          </div>
          <div className="skill-filters saber-frame" role="group" aria-label="Saring keahlian berdasarkan kategori">
            {skillFilters.map((filter) => (
              <button
                className={`skill-filter${skillFilter === filter ? " active" : ""}`}
                type="button"
                key={filter}
                aria-pressed={skillFilter === filter}
                onClick={() => setSkillFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="skills-grid reveal">
          {skills
            .filter((skill) => skillFilter === "Semua" || skill.category === skillFilter)
            .map((skill) => (
              <article className="skill-card saber-frame" key={skill.name}>
                <div className="skill-card-head">
                  <span className={`skill-icon${skill.monochrome ? " skill-icon-mono" : ""}`}>
                    <img src={skill.logo} alt="" width="28" height="28" loading="lazy" decoding="async" />
                  </span>
                  <div className="skill-badges">
                    <span className="skill-category">{skill.category}</span>
                    {skill.learning && <span className="skill-learning">Belajar</span>}
                  </div>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-divider" />
                <div className="skill-status">
                  <span className={skill.learning ? "status-learning" : ""}>{skill.status}</span>
                  <span className="status-dot" aria-hidden="true" />
                </div>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}
