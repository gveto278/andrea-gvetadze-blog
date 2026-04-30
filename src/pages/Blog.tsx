import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Blog() {
  usePageTitle('Blog');
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('მონაცემები ვერ ჩაიტვირთა');
        setLoading(false);
      });
  }, []);

  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(p => p.userId.toString() === filter);

  return (
    <div className="py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">The Blog</h1>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-8">
          Insights, tutorials, and deep dives into frontend development.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            All Posts
          </button>
          <button 
            onClick={() => setFilter('1')} 
            className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === '1' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Author 1
          </button>
        </div>
      </div>

      <Section title="All Articles">
        {loading && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600 font-semibold animate-pulse">იტვირთება...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-20 bg-red-50 rounded-2xl border border-red-100">
            <p className="text-2xl text-red-600 font-semibold">{error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="block group">
                <div className="h-full transform transition duration-300 group-hover:-translate-y-1 relative">
                  <Card 
                    title={post.title}
                    description={post.body}
                    image={`https://picsum.photos/seed/${post.id}/800/600`}
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <Badge label={`Author ${post.userId}`} color="blue" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
