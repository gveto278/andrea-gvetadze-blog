import { useState, useEffect } from 'react';
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
  image?: string;
}

// Smaller images for cards (400px wide instead of 800px) - saves ~60% bandwidth
const topics = [
  { title: "ხელოვნური ინტელექტი", excerpt: "როგორ ცვლის AI ჩვენს ყოველდღიურობას და რა გველის მომავალში.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=60&w=400&fm=webp&fit=crop" },
  { title: "კოსმოსური კვლევები", excerpt: "მარსზე მოგზაურობა და კოსმოსის ათვისების უახლესი მიღწევები.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=400&fm=webp&fit=crop" },
  { title: "ჯანსაღი ცხოვრება", excerpt: "პრაქტიკული რჩევები ფიტნესისა და სწორი კვების შესახებ.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=60&w=400&fm=webp&fit=crop" },
  { title: "ფინანსური წიგნიერება", excerpt: "როგორ ვმართოთ ფინანსები ეფექტურად და დავზოგოთ ფული.", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=60&w=400&fm=webp&fit=crop" },
  { title: "მოგზაურობა", excerpt: "აღმოაჩინეთ მსოფლიოს ყველაზე ლამაზი და უცხო ადგილები.", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=60&w=400&fm=webp&fit=crop" },
  { title: "კიბერუსაფრთხოება", excerpt: "როგორ დავიცვათ პერსონალური მონაცემები ციფრულ ეპოქაში.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=60&w=400&fm=webp&fit=crop" },
  { title: "ფსიქოლოგია", excerpt: "თვითგანვითარება, სტრესთან გამკლავება და მენტალური ჯანმრთელობა.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=60&w=400&fm=webp&fit=crop" },
  { title: "გეიმინგი", excerpt: "ვიდეო თამაშების ინდუსტრიის ევოლუცია და კიბერსპორტი.", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=60&w=400&fm=webp&fit=crop" },
  { title: "კულინარია", excerpt: "უგემრიელესი ეგზოტიკური კერძების რეცეპტები მარტივად.", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=60&w=400&fm=webp&fit=crop" },
  { title: "თანამედროვე ხელოვნება", excerpt: "რა გავლენას ახდენს ციფრული ერა მხატვრობასა და დიზაინზე.", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=60&w=400&fm=webp&fit=crop" }
];

export default function Blog() {
  usePageTitle('ბლოგი');
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=9', { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        const georgianData = data.map((post: ApiPost) => {
          const topic = topics[post.id % topics.length];
          return {
            ...post,
            title: `სტატია ${post.id}: ${topic.title}`,
            body: `${topic.excerpt} წაიკითხეთ მეტი ამ საინტერესო თემაზე ჩვენს ვრცელ სტატიაში...`,
            image: topic.image
          };
        });
        setPosts(georgianData);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError('მონაცემები ვერ ჩაიტვირთა');
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, []);

  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(p => p.userId.toString() === filter);

  return (
    <div className="py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">ბლოგი</h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          სტატიები, გაკვეთილები და სიღრმისეული განხილვები ფრონტენდ დეველოპმენტზე.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            ყველა სტატია
          </button>
          <button 
            onClick={() => setFilter('1')} 
            className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === '1' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            ავტორი 1
          </button>
        </div>
      </div>

      <Section title="ყველა სტატია">
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
                    image={post.image || `https://picsum.photos/seed/${post.id}/400/300`}
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <Badge label={`ავტორი ${post.userId}`} color="blue" />
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
