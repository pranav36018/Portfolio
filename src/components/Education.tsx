import { GraduationCap } from 'lucide-react';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { Card } from './Card';
import { EDUCATION_LIST } from '../data/portfolioData';

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          Academic <span className="text-gradient">background</span>
        </>
      }
    >
      <div className="relative grid gap-5 pl-8">
        <span
          aria-hidden={true}
          className="absolute left-2 top-3 h-[calc(100%-1.5rem)] w-px"
          style={{ background: 'var(--gradient-brand)' }}
        />

        {EDUCATION_LIST.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 90}>
            <div className="relative">
              <span
                aria-hidden={true}
                className="absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full"
                style={{
                  background: 'var(--gradient-brand)',
                  boxShadow: 'var(--shadow-glow)',
                }}
              />
              <Card>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs text-muted-foreground">{item.period}</p>
                    <p className="mt-1 font-display text-sm font-semibold text-gradient">
                      {item.score}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <GraduationCap size={15} className="text-cyan" /> Sai Vidya Institute of Technology, Bengaluru
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
