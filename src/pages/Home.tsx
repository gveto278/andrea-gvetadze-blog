import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { blogPosts } from '../data';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('Home');
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <Hero 
        title="Welcome to BlogApp" 
        subtitle="Discover insightful articles on modern web development, design systems, and frontend frameworks from industry experts."
        ctaText="Read Latest Posts"
        ctaLink="/blog"
      />

      <Section 
        title="Featured Articles" 
        description="Explore some of our most popular and recent posts carefully curated for you."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="block group">
              <div className="h-full transform transition duration-300 group-hover:-translate-y-1">
                <Card 
                  title={post.title}
                  description={post.excerpt}
                  image={post.imageUrl || 'https://via.placeholder.com/800x600'}
                />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section 
        title="Subscribe to our Newsletter" 
        className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Never miss an update</h3>
            <p className="text-blue-700 text-lg">Get the latest articles, tutorials, and resources directly in your inbox.</p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
