import { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero = memo(function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-16 text-center shadow-sm border border-gray-100 mb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
        {title}
      </h1>
      <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-500 mb-8 leading-relaxed">
        {subtitle}
      </p>
      <Link to={ctaLink}>
        <Button variant="primary" className="text-lg px-8 py-3 shadow-md hover:shadow-lg">
          {ctaText}
        </Button>
      </Link>
    </div>
  );
});

export default Hero;
