import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, description, children, className = '' }: SectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        {description && <p className="text-sm md:text-base text-gray-600">{description}</p>}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
}
