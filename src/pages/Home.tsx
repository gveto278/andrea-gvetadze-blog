import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { blogPosts } from '../data';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('მთავარი');
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <Hero 
        title="კეთილი იყოს თქვენი მობრძანება" 
        subtitle="აღმოაჩინეთ საინტერესო სტატიები თანამედროვე ვებ დეველოპმენტზე, დიზაინ სისტემებსა და ფრონტენდ ფრეიმვორკებზე."
        ctaText="უახლესი სტატიები"
        ctaLink="/blog"
      />

      <Section 
        title="გამორჩეული სტატიები" 
        description="აღმოაჩინეთ ჩვენი ყველაზე პოპულარული და უახლესი სტატიები."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="block group">
              <div className="h-full transform transition duration-300 group-hover:-translate-y-1">
                <Card 
                  title={post.title}
                  description={post.excerpt}
                  image={post.imageUrl || `https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=60&w=400&fm=webp&fit=crop`}
                  priority={index === 0}
                />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section 
        title="გამოიწერეთ სიახლეები" 
        className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-primary mb-2">არ გამოტოვოთ სიახლეები</h3>
            <p className="text-primary/80 text-sm md:text-base">მიიღეთ უახლესი სტატიები და რესურსები პირდაპირ ელ-ფოსტაზე.</p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="შეიყვანეთ ელ-ფოსტა" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-colors shadow-sm whitespace-nowrap">
              გამოწერა
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
