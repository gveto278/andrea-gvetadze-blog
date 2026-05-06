import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { blogPosts } from '../data';
import { usePageTitle } from '../hooks/usePageTitle';

// Moved outside component - avoids recreation on re-renders
const topics = [
  { title: "ხელოვნური ინტელექტი", text: "ხელოვნური ინტელექტი (AI) უკვე ჩვენი ცხოვრების განუყოფელი ნაწილია.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=75&w=1200&fm=webp&fit=crop" },
  { title: "კოსმოსური კვლევები", text: "კოსმოსის ათვისება არასდროს ყოფილა ისეთი აქტიური, როგორც დღეს.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=1200&fm=webp&fit=crop" },
  { title: "ჯანსაღი ცხოვრება", text: "ფიტნესი და სწორი კვება პირდაპირ კავშირშია ჩვენს ჯანმრთელობასთან.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=75&w=1200&fm=webp&fit=crop" },
  { title: "ფინანსური წიგნიერება", text: "ფინანსების სწორი მართვა მნიშვნელოვანია სტაბილური მომავლისთვის.", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=75&w=1200&fm=webp&fit=crop" },
  { title: "მოგზაურობა", text: "მსოფლიოს გარშემო მოგზაურობა აფართოებს თვალსაწიერს.", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=75&w=1200&fm=webp&fit=crop" },
  { title: "კიბერუსაფრთხოება", text: "ციფრულ ეპოქაში პერსონალური მონაცემების დაცვა მნიშვნელოვანია.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=75&w=1200&fm=webp&fit=crop" },
  { title: "ფსიქოლოგია", text: "მენტალური ჯანმრთელობა ისეთივე მნიშვნელოვანია, როგორც ფიზიკური.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=75&w=1200&fm=webp&fit=crop" },
  { title: "გეიმინგი", text: "ვიდეო თამაშები დიდი ხანია გასცდა უბრალო გართობის საზღვრებს.", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=75&w=1200&fm=webp&fit=crop" },
  { title: "კულინარია", text: "საჭმლის მომზადება ხელოვნებაა სხვადასხვა კულტურის შესახებ.", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=75&w=1200&fm=webp&fit=crop" },
  { title: "თანამედროვე ხელოვნება", text: "ხელოვნება მუდმივად განიცდის ტრანსფორმაციას ციფრულ ეპოქაში.", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=75&w=1200&fm=webp&fit=crop" }
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  usePageTitle('სტატია');

  const [post, setPost] = useState<{ title: string; body: string; imageUrl?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const localPost = blogPosts.find(p => p.slug === id || p.id === id);
    if (localPost) {
      setPost({ title: localPost.title, body: localPost.content, imageUrl: localPost.imageUrl });
      setLoading(false);
      return;
    }

    if (!isNaN(Number(id))) {
      const controller = new AbortController();
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { signal: controller.signal })
        .then(res => { if (!res.ok) throw new Error('Not found'); return res.json(); })
        .then(data => {
          const topic = topics[data.id % topics.length];
          setPost({
            title: `სტატია ${data.id}: ${topic.title}`,
            body: `${topic.text}\n\nეს არის რიგით ${data.id}-ე სტატია.`,
            imageUrl: topic.image
          });
          setLoading(false);
        })
        .catch((err) => {
          if (err.name !== 'AbortError') {
            setError('სტატია ვერ მოიძებნა');
            setLoading(false);
          }
        });
      return () => controller.abort();
    } else {
      setError('სტატია ვერ მოიძებნა');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-6">{error || 'სტატია ვერ მოიძებნა'}</h2>
        <Button onClick={() => navigate('/blog')}>ბლოგზე დაბრუნება</Button>
      </div>
    );
  }

  return (
    <article className="py-12 max-w-4xl mx-auto px-4">
      <Button variant="outline" onClick={() => navigate(-1)} className="mb-8 hover:bg-gray-100">&larr; უკან</Button>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={600}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-md mb-8"
        />
      )}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 capitalize leading-tight">{post.title}</h1>
      <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="whitespace-pre-line">{post.body}</p>
      </div>
    </article>
  );
}
