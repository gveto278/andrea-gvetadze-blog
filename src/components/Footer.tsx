
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
                AG
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">AG</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              თანამედროვე ბლოგ-პლატფორმა AG, რომელიც გიზიარებთ სიახლეებს ვებ დეველოპმენტის, დიზაინისა და ტექნოლოგიების შესახებ.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">კონტაქტი</h3>
            <p className="text-gray-400 mb-2">ელ. ფოსტა: andriagvetadze27@icloud.com</p>
            <p className="text-gray-400">ადგილმდებარეობა: თბილისი, საქართველო</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">სოციალური ქსელები</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AG. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  );
}
