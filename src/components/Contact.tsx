import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin } from './icons';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { Card } from './Card';
import { CONTACT_INFO } from '../data/portfolioData';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || name.length > 100) {
      setError('Please enter a name under 100 characters.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!message || message.length > 1000) {
      setError('Please enter a message under 1000 characters.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary';

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="text-gradient">amazing together.</span>
        </>
      }
      subtitle="Open to internships, collaborations and cloud, full-stack or AI project conversations."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="grid gap-4">
            <Card>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4">
                <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-xl text-cyan">
                  <Mail size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">Email</span>
                  <span className="block truncate text-sm">{CONTACT_INFO.email}</span>
                </span>
              </a>
            </Card>

            <Card>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4">
                <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-xl text-violet">
                  <Phone size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">Phone</span>
                  <span className="block truncate text-sm">{CONTACT_INFO.phone}</span>
                </span>
              </a>
            </Card>

            <Card>
              <div className="flex items-center gap-4">
                <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-xl text-primary">
                  <MapPin size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">Location</span>
                  <span className="block truncate text-sm">{CONTACT_INFO.location}</span>
                </span>
              </div>
            </Card>

            <Card>
              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-xl text-foreground">
                  <Github size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">GitHub</span>
                  <span className="block truncate text-sm">{CONTACT_INFO.githubDisplay}</span>
                </span>
              </a>
            </Card>

            <Card>
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-xl text-cyan">
                  <Linkedin size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">LinkedIn</span>
                  <span className="block truncate text-sm">{CONTACT_INFO.linkedinDisplay}</span>
                </span>
              </a>
            </Card>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className={inputClass}
                placeholder="Name"
                maxLength={100}
                value={form.name}
                onChange={handleChange('name')}
              />
              <input
                className={inputClass}
                placeholder="Email"
                type="email"
                maxLength={255}
                value={form.email}
                onChange={handleChange('email')}
              />
            </div>

            <input
              className={`${inputClass} mt-4`}
              placeholder="Subject"
              maxLength={150}
              value={form.subject}
              onChange={handleChange('subject')}
            />

            <textarea
              className={`${inputClass} mt-4 min-h-32 resize-y`}
              placeholder="Message"
              maxLength={1000}
              value={form.message}
              onChange={handleChange('message')}
            />

            {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
            {submitted && (
              <p className="mt-3 text-sm text-cyan">
                Thanks — your message is ready to send. I'll get back to you shortly.
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: 'var(--gradient-brand)',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
