"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ExternalLink,
  FileDown,
  GitBranch,
  MessageCircle,
  Moon,
  Rocket,
  Send,
  Sun,
} from "lucide-react";
import profile from "@/content/profile.json";
import socials from "@/content/socials.json";
import projects from "@/content/projects.json";
import skills from "@/content/skills.json";
import Skills from "@/components/sections/Skills";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useLayoutEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const nextTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    const loader = document.getElementById("loader");
    const navbar = document.getElementById("navbar");
    const progressBar = document.getElementById("progress");
    const hero = document.getElementById("hero");
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    let heroHeight = hero?.offsetHeight ?? 1;
    let progressFrame = 0;
    let cursorFrame = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateProgress = () => {
      progressFrame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      if (progressBar) progressBar.style.transform = `scaleX(${pct})`;
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 30);
      if (hero) hero.style.setProperty("--hero-scroll", `${Math.min(window.scrollY / heroHeight, 1)}`);
    };

    const scheduleProgress = () => {
      if (!progressFrame) progressFrame = window.requestAnimationFrame(updateProgress);
    };

    const handleResize = () => {
      heroHeight = hero?.offsetHeight ?? 1;
      scheduleProgress();
    };

    const moveCursor = (event: MouseEvent) => {
      if (!cursor || !ring) return;
      cursorX = event.clientX;
      cursorY = event.clientY;
      if (cursorFrame) return;
      cursorFrame = window.requestAnimationFrame(() => {
        cursorFrame = 0;
        cursor.style.transform = `translate3d(${cursorX - 6}px, ${cursorY - 6}px, 0)`;
        ring.style.transform = `translate3d(${cursorX - 18}px, ${cursorY - 18}px, 0)`;
      });
    };

    const timer = window.setTimeout(() => {
      loader?.classList.add("hidden");
    }, 650);

    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    const counters = document.querySelectorAll(".stat-number[data-count]");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = Number((entry.target as HTMLElement).dataset.count ?? 0);
            let current = 0;
            const step = Math.ceil(target / 40);
            const timerId = window.setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                window.clearInterval(timerId);
              }
              (entry.target as HTMLElement).textContent = `${current}+`;
            }, 40);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((counter) => counterObserver.observe(counter));

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateHover = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const current = event.target.closest("a, button, .project-card, .skill-card");
      const related = event.relatedTarget instanceof Element
        ? event.relatedTarget.closest("a, button, .project-card, .skill-card")
        : null;
      if (current !== related) {
        document.body.classList.toggle("hovering", event.type === "pointerover" ? Boolean(current) : Boolean(related));
      }
    };

    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    if (finePointer.matches) {
      document.addEventListener("mousemove", moveCursor, { passive: true });
      document.addEventListener("pointerover", updateHover);
      document.addEventListener("pointerout", updateHover);
    }

    updateProgress();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", handleResize);
      if (progressFrame) window.cancelAnimationFrame(progressFrame);
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("pointerover", updateHover);
      document.removeEventListener("pointerout", updateHover);
      document.body.classList.remove("hovering");
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div id="progress" className="progress-bar" />

      <div id="loader" className="loader-screen">
        <div className="loader-text">ZAKY.DEV</div>
        <div className="loader-bar">
          <div className="loader-fill" />
        </div>
      </div>

      <div className="social-bar">
        <a href={socials.instagram} target="_blank" rel="noreferrer" className="social-btn ig" aria-label="Instagram">
          <InstagramIcon />
          <span className="tooltip">@zakyfvi._</span>
        </a>
        <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="social-btn wa" aria-label="WhatsApp">
          <MessageCircle size={20} />
          <span className="tooltip">+62 897-5249-000</span>
        </a>
      </div>

      <nav id="navbar" className="top-nav">
        <div className="logo">
          Z<span>.</span>dev
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Beranda</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#skills">Keahlian</a></li>
          <li><a href="#projects">Proyek</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Ganti ke tema ${theme === "dark" ? "terang" : "gelap"}`}
            title={`Ganti ke tema ${theme === "dark" ? "terang" : "gelap"}`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="hire-btn">Ayo Terhubung <ArrowRight size={15} /></a>
        </div>
      </nav>

      <main className="portfolio-shell">
        <section id="hero" className="hero-section">
          <div className="hero-bg">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="grid-overlay" />
          </div>

          <div className="hero-layout">
            <div className="hero-inner reveal">
              <div className="hero-kicker">PORTOFOLIO <span>—</span> 2026</div>
              <h1>
                <span className="line1">{profile.name}<span className="hero-period">.</span></span>
                <span className="line2">{profile.title}</span>
              </h1>
              <p className="hero-desc">{profile.tagline}</p>
              <div className="hero-actions">
                <a href="#projects" className="btn-primary"><Rocket size={17} /> Lihat Proyek</a>
                <a href="/cv-zaky.pdf" className="btn-secondary" download="Zaky-CV.pdf"><FileDown size={17} /> Unduh CV</a>
                <a href="#contact" className="hero-contact-link"><Send size={15} /> Let&apos;s Talk</a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">11</div>
                  <div className="stat-label">TEKNOLOGI</div>
                </div>
                <div className="stat">
                  <div className="stat-number">03</div>
                  <div className="stat-label">BIDANG KEAHLIAN</div>
                </div>
                <div className="stat">
                  <div className="stat-number">02</div>
                  <div className="stat-label">SEDANG DIPELAJARI</div>
                </div>
              </div>
            </div>

            <div className="hero-portrait saber-frame reveal">
              <div className="portrait-frame">
                <Image
                  src="/images/zaky-waist.webp"
                  alt="Foto Zaky dari kepala hingga pinggang"
                  width={560}
                  height={760}
                  priority
                  sizes="(max-width: 900px) 90vw, 46vw"
                  className="portrait-image"
                />
                <div className="portrait-vignette" />
                <div className="portrait-topline">
                  <span>ZK / 01</span>
                  <span>DEVELOPER MODE</span>
                </div>
                <div className="portrait-caption">
                  <span>THE MAKER</span>
                  <strong>Code with character.</strong>
                </div>
                <div className="portrait-crosshair crosshair-one" />
                <div className="portrait-crosshair crosshair-two" />
              </div>
              <span className="portrait-side-label">DESIGN <i /> BUILD <i /> SHIP</span>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell about-shell">
          <div className="reveal">
            <div className="section-label">01 — Profil / Profile</div>
            <h2>About Me</h2>
            <p className="section-desc">Kenali saya lebih dekat dan hal-hal yang sedang saya pelajari.</p>
          </div>
          <div className="about-grid reveal">
            <div className="about-img-wrap">
              <div className="about-img-box saber-frame">
                <Image
                  src="/images/zaky-about-new.png"
                  alt={`Foto ${profile.name}`}
                  width={720}
                  height={960}
                  sizes="(max-width: 900px) 90vw, 42vw"
                  className="about-photo"
                />
                <div className="about-photo-shade" />
                <div className="about-photo-caption">
                  <span>WEB DEVELOPMENT · PEMULA</span>
                  <strong>Belajar, membangun,<br />terus berkembang.</strong>
                </div>
              </div>
              <div className="about-corner tl" />
              <div className="about-corner br" />
            </div>
            <div className="about-text">
              <div className="about-overline">HELLO, SAYA</div>
              <h3>{profile.name}<span> — {profile.title}</span></h3>
              {profile.bio.split("\n").map((paragraph, index) => (
                <p key={`${paragraph}-${index}`}>{paragraph}</p>
              ))}
              <div className="about-tags">
                {profile.traits.map((trait) => (
                  <span className="tag" key={trait}>{trait}</span>
                ))}
              </div>
              <a href="#projects" className="about-link">
                Lihat karya saya <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="about-knowledge reveal">
            <div className="about-knowledge-copy">
              <div className="section-label">Yang Saya Pelajari</div>
              <h3>Knowledge</h3>
              <p>Dasar teknologi yang terus saya latih lewat belajar dan proyek kecil.</p>
            </div>
            <ul className="about-knowledge-list">
              {skills
                .filter((skill) => skill.category !== "Tools")
                .map((skill) => (
                  <li key={skill.name}>
                    <Check size={16} aria-hidden="true" />
                    <span>{skill.name}</span>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <Skills />

        <section id="projects" className="section-shell projects-shell">
          <div className="projects-header reveal">
            <div>
              <div className="section-label">03 — Proyek / Projects</div>
              <h2>Featured Projects</h2>
              <p className="section-desc">Project pilihan yang saya kembangkan sambil terus belajar.</p>
            </div>
          </div>
          <div className="projects-grid reveal">
            {projects.map((project) => (
              <div key={project.id} className="project-card saber-frame">
                <div className="project-thumb">
                  <Image
                    src={project.thumbnail}
                    alt={`Ilustrasi pratinjau ${project.title}`}
                    width={720}
                    height={420}
                    className="project-preview"
                  />
                </div>
                <div className="project-body">
                  <div className="project-type">{project.category}</div>
                  <div className="project-title">{project.title}</div>
                  <div className="project-desc">{project.description}</div>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span className="stack-tag" key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={project.links.code} className="project-action project-action-primary" target="_blank" rel="noreferrer">
                      <GitBranch size={16} /> View GitHub <ExternalLink size={14} />
                    </a>
                    {project.links.demo ? (
                      <a href={project.links.demo} className="project-action" target="_blank" rel="noreferrer">
                        Live Demo <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="project-action project-action-disabled" aria-disabled="true">
                        Live Demo <span>Coming Soon</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell contact-shell">
          <div className="reveal">
            <div className="section-label">04 — Kontak / Get in Touch</div>
            <h2>Mari Berkarya Bersama</h2>
            <p className="section-desc">Punya ide atau ingin menyapa? Hubungi saya lewat media sosial. Let&apos;s talk!</p>
          </div>
          <div className="contact-grid reveal">
            <div className="contact-info">
              <h3>Terbuka untuk belajar</h3>
              <p>Saya ingin terus belajar dan berkolaborasi melalui proyek yang sesuai dengan kemampuan saya. Ada ide menarik? Mari ngobrol.</p>
              <div className="contact-links">
                <a href={socials.instagram} target="_blank" rel="noreferrer" className="contact-link saber-frame">
                  <div className="contact-link-icon ig"><InstagramIcon /></div>
                  <div className="contact-link-text">
                    <strong>Instagram</strong>
                    <small>@zakyfvi._</small>
                  </div>
                  <ArrowRight size={16} />
                </a>
                <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="contact-link saber-frame">
                  <div className="contact-link-icon wa"><MessageCircle size={20} /></div>
                  <div className="contact-link-text">
                    <strong>WhatsApp</strong>
                    <small>+62 897-5249-000</small>
                  </div>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="contact-form saber-frame">
              <div className="form-group">
                <label>NAMA</label>
                <input type="text" placeholder="Nama kamu" />
              </div>
              <div className="form-group">
                <label>ALAMAT EMAIL</label>
                <input type="email" placeholder="nama@email.com" />
              </div>
              <div className="form-group">
                <label>PESAN</label>
                <textarea placeholder="Ceritakan ide atau pertanyaanmu..." />
              </div>
              <button type="button" className="form-submit" onClick={() => {}} >Kirim Pesan →</button>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-logo">Z<span>.</span>dev — {profile.name}</div>
          <div className="footer-copy">Dibuat dengan <span>♥</span> © 2026 {profile.name}. Hak cipta dilindungi.</div>
        </footer>
      </main>

      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  );
}