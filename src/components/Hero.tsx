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
    <div className="relative rounded-3xl p-10 md:p-20 text-center shadow-xl border border-gray-200 dark:border-slate-700 mb-16 overflow-hidden bg-white dark:bg-slate-800">
      {/* Simple gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-accent"></div>
      
      <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-6">
        ✨ აღმოაჩინეთ საუკეთესო სტატიები
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
        {title}
      </h1>
      <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
        {subtitle}
      </p>
      <div>
        <Link to={ctaLink}>
          <Button variant="primary" className="text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-primary to-indigo-600 border-none">
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  );
});

export default Hero;
