import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import InstagramFeed from './components/InstagramFeed';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <About />
      <Benefits />
      <InstagramFeed />
      <footer className="border-t border-slate-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Студия стретчинга. Мягкое движение к гармонии.
        </div>
      </footer>
    </div>
  );
}

export default App;
