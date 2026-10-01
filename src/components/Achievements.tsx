import { Section } from './Section';
import { Reveal } from './Reveal';
import { Card } from './Card';
import { ACHIEVEMENTS, SOFT_SKILLS } from '../data/portfolioData';

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={
        <>
          Recognition &amp; <span className="text-gradient">milestones</span>
        </>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {ACHIEVEMENTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.text} delay={idx * 90}>
              <Card className="h-full">
                <span className="glass grid h-11 w-11 place-items-center rounded-xl text-cyan">
                  <Icon size={19} />
                </span>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-12">
          <h3 className="font-display text-lg font-semibold">Soft Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                className="glass glow-border rounded-full px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
