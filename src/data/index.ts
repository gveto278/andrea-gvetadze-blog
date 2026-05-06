import type { BlogPost, NavLink, User } from '../types';
import profileImage from '../assets/profile.jpg';


export const currentUser: User = {
  id: 'u1',
  name: 'ანდრია გვეტაძე',
  email: 'andriagvetadze27@icloud.com',
  avatarUrl: profileImage,
  bio: 'პროგრამული უზრუნველყოფის დეველოპერი და ტექნოლოგიების ენთუზიასტი, რომელიც გიზიარებთ ცოდნას თანამედროვე ვებ დეველოპმენტის შესახებ.',
};

export const navLinks: NavLink[] = [
  { label: 'მთავარი', path: '/' },
  { label: 'ბლოგი', path: '/blog' },
  { label: 'ჩემ შესახებ', path: '/about' },
  { label: 'კონტაქტი', path: '/contact' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'p1',
    title: 'React-ისა და Vite-ის საფუძვლები',
    slug: 'getting-started-react-vite',
    excerpt: 'ისწავლეთ როგორ შექმნათ ძალიან სწრაფი React აპლიკაცია Vite-ისა და TypeScript-ის გამოყენებით.',
    content: 'Vite არის ინსტრუმენტი, რომელიც უზრუნველყოფს სწრაფ და მოსახერხებელ დეველოპმენტს თანამედროვე ვებ პროექტებისთვის. ამ სტატიაში ჩვენ განვიხილავთ, თუ როგორ უნდა დავაკონფიგუროთ ახალი React პროექტი Vite-ით, დავამატოთ TypeScript და შევქმნათ მყარი პროექტის სტრუქტურა...',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=60&w=400&auto=format&fm=webp&fit=crop',
    author: currentUser,
    createdAt: '2026-04-20T10:00:00Z',
    tags: ['React', 'Vite', 'Frontend'],
    category: 'დეველოპმენტი',
  },
  {
    id: 'p2',
    title: 'Tailwind CSS-ის გამოყენება',
    slug: 'mastering-tailwind-css',
    excerpt: 'სრულყოფილი გზამკვლევი Tailwind CSS-ით რესპონსიული და ლამაზი UI კომპონენტების შესაქმნელად.',
    content: 'Tailwind CSS არის utility-first CSS ფრეიმვორკი, რომელიც სავსეა კლასებით როგორიცაა flex, pt-4, text-center და rotate-90, რომელთა კომბინირებითაც შეგიძლიათ შექმნათ ნებისმიერი დიზაინი პირდაპირ თქვენს HTML-ში. ჩვენ განვიხილავთ რესპონსიულ დიზაინს, მუქ თემას (dark mode) და ქასთომ თემებს...',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=60&w=400&auto=format&fm=webp&fit=crop',
    author: currentUser,
    createdAt: '2026-04-25T14:30:00Z',
    tags: ['CSS', 'Tailwind', 'Design'],
    category: 'ვებ დიზაინი',
  },
  {
    id: 'p3',
    title: 'React Router v6-ის მიმოხილვა',
    slug: 'understanding-react-router-v6',
    excerpt: 'მართეთ თქვენი Single Page აპლიკაციები ეფექტურად React Router v6-ით.',
    content: 'React Router არის სტანდარტული მარშრუტიზაციის ბიბლიოთეკა React-ისთვის. მე-6 ვერსიაში დაემატა ბევრი გაუმჯობესება და შემცირდა ბიბლიოთეკის ზომა. მოდით განვიხილოთ ახალი API, ჩაშენებული მარშრუტები და პროგრამული ნავიგაცია...',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=60&w=400&auto=format&fm=webp&fit=crop',
    author: currentUser,
    createdAt: '2026-04-28T09:15:00Z',
    tags: ['React', 'Routing', 'SPA'],
    category: 'დეველოპმენტი',
  }
];
