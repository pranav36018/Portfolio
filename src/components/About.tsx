import { Section } from './Section';
import { Reveal } from './Reveal';
import { Pill } from './Pill';
import { Card } from './Card';
import { STATS } from '../data/portfolioData';

const FOCUS_TAGS = ['Cloud Computing', 'Full-Stack', 'AI', 'Data Science', 'Distributed Systems'];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Engineering for the <span className="text-gradient">cloud-native</span> era
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm Pranav V Rao, an Information Science Engineering student pursuing my B.E. at Sai Vidya Institute of Technology, Bengaluru (2023–2027).
            </p>
            <p>
              My work centres on cloud computing and full-stack development, extending into AI, data science and distributed architectures. I enjoy taking an idea from schema and API design through to a polished interface running on modern cloud-native infrastructure.
            </p>
            <p>
              Currently deepening my Google Cloud engineering skills while building real-time, data-driven applications with the MERN and PostgreSQL stacks.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {FOCUS_TAGS.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 90}>
              <Card className="h-full">
                <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{stat.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
