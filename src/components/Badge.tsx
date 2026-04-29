import React from 'react';

export interface BadgeProps {
  label: string;
  color?: 'blue' | 'green' | 'red' | 'gray' | 'purple' | 'yellow';
}

export default function Badge({ label, color = 'blue' }: BadgeProps) {
  const colorStyles = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-800",
    purple: "bg-purple-100 text-purple-800",
    yellow: "bg-yellow-100 text-yellow-800"
  };

  const selectedStyle = colorStyles[color] || colorStyles.blue;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedStyle}`}>
      {label}
    </span>
  );
}
