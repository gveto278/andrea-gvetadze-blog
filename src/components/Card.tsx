import React from 'react';

export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export default function Card({ title, image, description }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col h-full border border-gray-100">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 flex-grow line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
