import Section from '../components/Section';
import { currentUser } from '../data';
import { usePageTitle } from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('About Me');
  return (
    <div className="py-12">
      <Section title="About Me">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src={currentUser.avatarUrl || 'https://via.placeholder.com/300.webp'} 
              alt={currentUser.name} 
              loading="lazy"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-md border-4 border-white"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentUser.name}</h3>
            <p className="text-sm md:text-base text-accent font-medium mb-6">{currentUser.bio}</p>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Hello! I'm Andrea, a passionate software developer based in Tbilisi, Georgia. 
                I specialize in building scalable, modern web applications using technologies like React, TypeScript, and Tailwind CSS.
              </p>
              <p>
                My journey in tech started with a curiosity for how things work on the web, which quickly turned into a full-time passion. 
                When I'm not coding, I enjoy sharing my knowledge through technical articles on this blog, contributing to open-source projects, and exploring new design trends.
              </p>
              <p>
                Feel free to reach out if you want to collaborate on a project or just want to say hi!
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
