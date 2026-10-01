import { Sparkles, ArrowRight, Cloud, Cpu, Database } from 'lucide-react';
import { Github, Linkedin } from './icons';
import { CONTACT_INFO } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      {/* Background ambient lighting */}
      <div aria-hidden={true} className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-backdrop absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
        <div
          className="animate-float-slow absolute -left-24 top-10 h-80 w-80 rounded-full blur-[120px]"
          style={{ background: 'oklch(0.66 0.19 256 / 45%)' }}
        />
        <div
          className="animate-drift absolute right-0 top-40 h-96 w-96 rounded-full blur-[140px]"
          style={{ background: 'oklch(0.64 0.23 296 / 38%)' }}
        />
        <div
          className="animate-float-slow absolute bottom-0 left-1/3 h-64 w-64 rounded-full blur-[120px]"
          style={{ background: 'oklch(0.82 0.15 196 / 26%)', animationDelay: '3s' }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-cyan">
            <Sparkles size={14} /> Cloud · Full-Stack · AI
          </span>

          <h1 className="mt-7 whitespace-nowrap text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            PRANAV <span className="text-gradient">V RAO</span>
          </h1>

          <p className="mt-5 font-display text-lg text-foreground/90 sm:text-xl">
            Information Science Engineer · Cloud &amp; Full-Stack Enthusiast
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            I build cloud-native, full-stack systems and explore AI and data science — with a focus on scalable architectures, clean engineering and real-time experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: 'var(--gradient-brand)',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="glow-border inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let's Connect
            </a>

            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              className="glow-border grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
            >
              <Github size={20} />
            </a>

            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="glow-border grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Cloud size={15} className="text-cyan" /> Google Cloud
            </span>
            <span className="inline-flex items-center gap-2">
              <Cpu size={15} className="text-violet" /> AI / ML
            </span>
            <span className="inline-flex items-center gap-2">
              <Database size={15} className="text-primary" /> MongoDB · PostgreSQL
            </span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden={true}
            className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
            style={{ background: 'var(--gradient-brand)' }}
          />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <img
              src="/assets/pranav-profile.png"
              alt="Portrait of Pranav V Rao"
              width={1024}
              height={1536}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
            <div className="glass absolute inset-x-4 bottom-4 rounded-xl px-4 py-3">
              <p className="font-display text-sm font-semibold">Bengaluru, India</p>
              <p className="text-xs text-muted-foreground">B.E. Information Science · 2023–2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
