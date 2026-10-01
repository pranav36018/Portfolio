import { Section } from './Section';
import { Reveal } from './Reveal';
import { Pill } from './Pill';
import { Card } from './Card';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Technical <span className="text-gradient">toolkit</span>
        </>
      }
      subtitle="Languages, frameworks, databases and cloud platforms I work with day to day."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={idx * 80}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="glass grid h-10 w-10 shrink-0 place-items-center rounded-xl text-cyan">
                    <Icon size={18} />
                  </span>
                  <h3 className="min-w-0 truncate font-display text-base font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
