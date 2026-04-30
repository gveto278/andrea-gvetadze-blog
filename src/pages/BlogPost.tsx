import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { blogPosts } from '../data';
import { usePageTitle } from '../hooks/usePageTitle';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  usePageTitle('Blog Post');

  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if it matches a local post slug or id
    const localPost = blogPosts.find(p => p.slug === id || p.id === id);
    if (localPost) {
      setPost({
        title: localPost.title,
        body: localPost.content,
        imageUrl: localPost.imageUrl
      });
      setLoading(false);
      return;
    }

    // Otherwise, try to fetch from JSONPlaceholder
    if (!isNaN(Number(id))) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Not found');
          return res.json();
        })
        .then(data => {
          setPost({
            title: data.title,
            body: data.body,
            imageUrl: `https://picsum.photos/seed/${data.id}/800/600`
          });
          setLoading(false);
        })
        .catch(() => {
          setError('Post not found');
          setLoading(false);
        });
    } else {
      setError('Post not found');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl text-gray-600 font-semibold animate-pulse">იტვირთება...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-600 mb-6">{error || 'Post not found'}</h2>
        <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <article className="py-12 max-w-4xl mx-auto px-4">
      <Button variant="outline" onClick={() => navigate(-1)} className="mb-8 hover:bg-gray-100">
        &larr; Back
      </Button>
      
      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-md mb-8"
        />
      )}
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 capitalize leading-tight">
        {post.title}
      </h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="whitespace-pre-line">{post.body}</p>
      </div>
    </article>
  );
}
