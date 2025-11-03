import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Modal from './components/Modal';
import BookingForm from './components/BookingForm';

function App() {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 30000); // auto-open after 30s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero onOpenBooking={openModal} />
      <Benefits />
      <Pricing onOpenBooking={openModal} />
      <Testimonials />

      <footer className="border-t border-slate-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Студия стретчинга. Мягкое движение к гармонии.
        </div>
      </footer>

      <Modal open={open} onClose={closeModal}>
        <BookingForm />
      </Modal>
    </div>
  );
}

export default App;
