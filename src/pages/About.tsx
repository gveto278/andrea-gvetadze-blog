import Section from '../components/Section';
import { currentUser } from '../data';
import { usePageTitle } from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('ჩემ შესახებ');
  return (
    <div className="py-12">
      <Section title="ჩემ შესახებ">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src={currentUser.avatarUrl || 'https://via.placeholder.com/300.webp'} 
              alt={currentUser.name} 
              width={256}
              height={256}
              loading="lazy"
              decoding="async"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-md border-4 border-white"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{currentUser.name}</h3>
            <p className="text-sm md:text-base text-accent dark:text-indigo-400 font-medium mb-6">{currentUser.bio}</p>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
                გამარჯობა! მე ვარ ანდრია, პროგრამული უზრუნველყოფის დეველოპერი თბილისიდან. 
                ჩემი სპეციალიზაციაა თანამედროვე, მასშტაბური ვებ აპლიკაციების შექმნა React, TypeScript და Tailwind CSS ტექნოლოგიების გამოყენებით.
              </p>
              <p>
                ჩემი მოგზაურობა ტექნოლოგიებში დაიწყო ინტერესით, თუ როგორ მუშაობს ვებგვერდები, რაც მალევე გადაიზარდა ჩემს მთავარ საქმიანობად. 
                თავისუფალ დროს სიამოვნებით ვუზიარებ ცოდნას სხვებს ამ ბლოგის საშუალებით, ვმონაწილეობ ღია კოდის პროექტებში და ვიკვლევ დიზაინის ახალ ტრენდებს.
              </p>
              <p>
                დამიკავშირდით, თუ გსურთ პროექტზე თანამშრომლობა ან უბრალოდ მოკითხვა!
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
