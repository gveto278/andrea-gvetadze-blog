import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent";
      break;
    case 'secondary':
      variantStyles = "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 border border-transparent";
      break;
    case 'outline':
      variantStyles = "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500";
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
