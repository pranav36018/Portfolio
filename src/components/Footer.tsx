import { Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from './icons';
import { FOOTER_LINKS, CONTACT_INFO } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold tracking-[0.2em]">
            PRANAV <span className="text-gradient">V RAO</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Information Science Engineer · Cloud &amp; Full-Stack Enthusiast
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="Email Pranav"
              className="glass glow-border grid h-10 w-10 place-items-center rounded-xl"
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              aria-label="Call Pranav"
              className="glass glow-border grid h-10 w-10 place-items-center rounded-xl"
            >
              <Phone size={16} />
            </a>
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              className="glass glow-border grid h-10 w-10 place-items-center rounded-xl"
            >
              <Github size={16} />
            </a>
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="glass glow-border grid h-10 w-10 place-items-center rounded-xl"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm text-muted-foreground sm:grid-cols-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © 2026 Pranav V Rao. All rights reserved.
      </p>
    </footer>
  );
}
