import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Пробное занятие',
    price: '990₽',
    desc: 'Познакомьтесь с методикой и тренером',
    features: ['Индивидуальное сопровождение', 'Анализ подвижности', 'Рекомендации по домашним упражнениям'],
    highlight: false,
  },
  {
    name: 'Абонемент 8 занятий',
    price: '6 900₽',
    desc: 'Оптимально для устойчивого результата',
    features: ['Гибкий график', 'Персональная адаптация нагрузок', 'Поддержка тренера между занятиями'],
    highlight: true,
  },
  {
    name: 'Парные занятия',
    price: '4 900₽',
    desc: 'Тренируйтесь вдвоём и экономьте',
    features: ['Индивидуальный подход для двоих', 'Совместная мотивация', 'Доступ к видеоматериалам'],
    highlight: false,
  },
];

export default function Pricing({ onOpenBooking }) {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-white to-pink-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Тарифы и специальные предложения
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Выберите удобный формат и начните путь к гибкости уже сегодня.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`relative rounded-2xl border ${
                p.highlight ? 'border-slate-900' : 'border-slate-100'
              } bg-white/80 p-6 shadow-sm backdrop-blur`}
            >
              {p.highlight && (
                <div className="absolute -top-3 right-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">Хит</div>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <div className="text-3xl font-bold text-slate-900">{p.price}</div>
                <div className="text-sm text-slate-500">за пакет</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenBooking}
                className={`mt-6 w-full rounded-xl px-5 py-3 font-semibold shadow-sm transition focus:outline-none focus:ring-2 ${
                  p.highlight
                    ? 'bg-slate-900 text-white focus:ring-slate-300 hover:brightness-110'
                    : 'bg-gradient-to-r from-pink-300 via-emerald-200 to-sky-300 text-slate-900 focus:ring-pink-200 hover:brightness-105'
                }`}
              >
                Записаться
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
