import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { blogPosts } from '../data';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">The Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights, tutorials, and deep dives into frontend development, design, and web technologies.
        </p>
      </div>

      <Section title="All Articles">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="block group">
              <div className="h-full transform transition duration-300 group-hover:-translate-y-1 relative">
                <Card 
                  title={post.title}
                  description={post.excerpt}
                  image={post.imageUrl || 'https://via.placeholder.com/800x600'}
                />
                <div className="absolute top-4 right-4 z-10">
                  <Badge label={post.category} color="blue" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
