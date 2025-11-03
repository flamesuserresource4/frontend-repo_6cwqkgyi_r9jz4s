import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const items = [
  {
    name: 'Анна',
    text: 'Через месяц занятий перестала болеть спина, а растяжка превратилась в приятный ритуал. Очень мягко и заботливо!',
  },
  {
    name: 'Мария',
    text: 'Люблю вашу атмосферу и внимательность тренеров. Чувствую прогресс без насилия над телом.',
  },
  {
    name: 'Ольга',
    text: 'Записалась на пробное и осталась на абонемент. Удобный график и понятные рекомендации для дома.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Отзывы учеников
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Реальные впечатления о первых шагах к гибкости и лёгкости в теле.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-100 bg-gradient-to-br from-sky-50/60 to-pink-50/60 p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-500" aria-label="5 из 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{t.text}”</p>
              <div className="mt-4 text-sm font-semibold text-slate-900">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
