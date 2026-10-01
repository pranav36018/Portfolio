import { Section } from './Section';
import { Reveal } from './Reveal';
import { Pill } from './Pill';
import { PROJECTS } from '../data/portfolioData';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={
        <>
          Things I've <span className="text-gradient">built</span>
        </>
      }
    >
      <div className="grid gap-10">
        {PROJECTS.map((project, idx) => (
          <Reveal key={project.name} delay={idx * 100}>
            <article className="glass glow-border grid overflow-hidden rounded-3xl transition-all duration-500 lg:grid-cols-2">
              <div className="group relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} interface mockup`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  aria-hidden={true}
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      'linear-gradient(120deg, oklch(0.16 0.025 268 / 70%), transparent)',
                  }}
                />
              </div>

              <div className="p-7 lg:p-10">
                <h3 className="font-display text-2xl font-bold">{project.name}</h3>
                <p className="mt-1 text-sm text-cyan">{project.tagline}</p>

                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden={true}
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: 'var(--gradient-brand)' }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="glow-border inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
