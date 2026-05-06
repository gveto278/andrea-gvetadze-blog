import { memo } from 'react';

export interface CardProps {
  title: string;
  image: string;
  description: string;
  priority?: boolean;
}

const Card = memo(function Card({ title, image, description, priority = false }: CardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100 dark:border-slate-700 group">
      <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={image}
          alt={title}
          width={800}
          height={600}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'low'}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-indigo-400 transition-colors line-clamp-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 flex-grow line-clamp-3 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
});

export default Card;
