import { Section } from './Section';
import { Reveal } from './Reveal';
import { Card } from './Card';
import { SERVICES } from '../data/portfolioData';

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={
        <>
          What I can <span className="text-gradient">build</span>
        </>
      }
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={idx * 70}>
              <Card className="h-full">
                <span className="glass grid h-11 w-11 place-items-center rounded-xl text-violet">
                  <Icon size={19} />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
