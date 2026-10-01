import React from 'react';

interface PillProps {
  children: React.ReactNode;
}

export function Pill({ children }: PillProps) {
  return (
    <span className="glow-border rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground/85 transition-all duration-300 hover:-translate-y-0.5">
      {children}
    </span>
  );
}
