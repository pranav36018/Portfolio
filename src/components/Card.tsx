import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`glass glow-border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
