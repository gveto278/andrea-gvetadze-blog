import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center rounded-xl shadow-sm mb-12 border border-gray-100">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
        {title}
      </h1>
      <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-8 leading-relaxed">
        {subtitle}
      </p>
      <Link to={ctaLink}>
        <Button variant="primary" className="text-lg px-8 py-3 shadow-sm hover:shadow-md transition-shadow">
          {ctaText}
        </Button>
      </Link>
    </div>
  );
}
