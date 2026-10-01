import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
