import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b py-3 shadow-[0_10px_40px_-24px_oklch(0_0_0/80%)]'
          : 'py-5'
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <a href="#home" className="min-w-0">
          <span className="block truncate font-display text-sm font-bold tracking-[0.3em] sm:text-base">
            PRANAV <span className="text-gradient">V RAO</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'var(--gradient-brand)',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            Let's Connect
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="shrink-0 rounded-xl border border-border p-2 lg:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="glass mx-5 mt-3 grid gap-1 rounded-2xl p-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
