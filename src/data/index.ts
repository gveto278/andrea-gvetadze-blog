import type { BlogPost, NavLink, User } from '../types';

export const currentUser: User = {
  id: 'u1',
  name: 'Andrea Gvetadze',
  email: 'andrea@example.com',
  avatarUrl: 'https://i.pravatar.cc/150?u=andrea',
  bio: 'Software Developer & Tech Enthusiast sharing knowledge about modern web development.',
};

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'p1',
    title: 'Getting Started with React and Vite',
    slug: 'getting-started-react-vite',
    excerpt: 'Learn how to set up a blazing fast React application using Vite and TypeScript.',
    content: 'Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. In this post, we will explore how to configure a new React project with Vite, integrate TypeScript, and set up a solid project structure...',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fm=webp&fit=crop',
    author: currentUser,
    createdAt: '2026-04-20T10:00:00Z',
    tags: ['React', 'Vite', 'Frontend'],
    category: 'Development',
  },
  {
    id: 'p2',
    title: 'Mastering Tailwind CSS for Modern UIs',
    slug: 'mastering-tailwind-css',
    excerpt: 'A comprehensive guide to building responsive and beautiful UI components with Tailwind CSS.',
    content: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. We will cover responsive design, dark mode, and custom themes...',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fm=webp&fit=crop',
    author: currentUser,
    createdAt: '2026-04-25T14:30:00Z',
    tags: ['CSS', 'Tailwind', 'Design'],
    category: 'Web Design',
  },
  {
    id: 'p3',
    title: 'Understanding React Router v6',
    slug: 'understanding-react-router-v6',
    excerpt: 'Navigate your Single Page Applications effectively with React Router v6.',
    content: 'React Router is the standard routing library for React. In version 6, it introduces a lot of improvements and a smaller bundle size. Let\'s dive into the new API, nested routes, and programmatic navigation...',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fm=webp&fit=crop',
    author: currentUser,
    createdAt: '2026-04-28T09:15:00Z',
    tags: ['React', 'Routing', 'SPA'],
    category: 'Development',
  }
];
