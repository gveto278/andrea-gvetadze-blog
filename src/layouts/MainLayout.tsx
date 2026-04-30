import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navLinks } from '../data';
import { useScrollTop } from '../hooks/useScrollTop';

interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  useScrollTop();
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header links={navLinks} />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
