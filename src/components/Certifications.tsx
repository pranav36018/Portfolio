import { Cloud } from 'lucide-react';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { Card } from './Card';
import { CERTIFICATIONS_LIST } from '../data/portfolioData';

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={
        <>
          Verified <span className="text-gradient">credentials</span>
        </>
      }
    >
      <Reveal>
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-10"
          style={{
            background: 'var(--gradient-brand)',
            boxShadow: 'var(--shadow-glow-strong)',
          }}
        >
          <div className="relative z-10 text-primary-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-80">
              Google Cloud
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Professional Cloud Engineer Certification
            </h3>
            <p className="mt-3 max-w-lg text-sm opacity-85">
              Core credential behind my cloud engineering focus — designing, deploying and operating scalable solutions on Google Cloud.
            </p>
          </div>
          <Cloud
            aria-hidden={true}
            size={220}
            className="absolute -right-6 -top-8 opacity-20 text-primary-foreground"
          />
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS_LIST.map((cert, idx) => (
          <Reveal key={cert.name} delay={idx * 60}>
            <Card className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                {cert.issuer}
              </p>
              <p className="mt-3 text-sm leading-relaxed">{cert.name}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
