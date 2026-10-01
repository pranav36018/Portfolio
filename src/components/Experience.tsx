import { Briefcase } from 'lucide-react';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { Card } from './Card';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Professional <span className="text-gradient">timeline</span>
        </>
      }
    >
      <Reveal>
        <div className="relative pl-8">
          <span
            aria-hidden={true}
            className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px"
            style={{ background: 'var(--gradient-brand)' }}
          />
          <span
            aria-hidden={true}
            className="absolute left-0 top-2 h-4 w-4 rounded-full"
            style={{
              background: 'var(--gradient-brand)',
              boxShadow: 'var(--shadow-glow-strong)',
            }}
          />
          <Card>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold">Junior Developer Intern</h3>
                <p className="mt-1 text-sm text-cyan">BackBoneHub.in — IT Team, Bengaluru</p>
              </div>
              <span className="glass shrink-0 rounded-full px-3 py-1 text-xs">2026</span>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase size={15} className="text-violet" /> 4-month full-time internship
            </p>
          </Card>
        </div>
      </Reveal>
    </Section>
  );
}
