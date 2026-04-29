import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page Not Found');
  
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button variant="primary" className="text-lg px-8 py-3">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
