import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599050751795-5fbee1ae8dfe?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599447421348-c19cdd549e91?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593810450967-fd1fc3f278be?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=600&auto=format&fit=crop',
];

export default function InstagramFeed() {
  return (
    <section className="relative bg-gradient-to-b from-white to-sky-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Вдохновение из Instagram
            </motion.h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Подпишитесь, чтобы видеть новые упражнения, лайфхаки по гибкости и атмосферу занятий.
            </p>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-300 via-emerald-200 to-sky-300 px-4 py-2 font-semibold text-slate-800 shadow-sm transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-pink-200"
          >
            <Instagram className="h-5 w-5" /> Подписаться
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {images.map((src, idx) => (
            <motion.a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative block overflow-hidden rounded-2xl border border-white/60 bg-white shadow-sm"
            >
              <img
                src={src}
                alt="Занятие по стретчингу"
                loading="lazy"
                className="h-28 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-36"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
