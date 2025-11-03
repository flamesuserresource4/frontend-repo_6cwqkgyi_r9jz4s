import { motion } from 'framer-motion';
import { StretchHorizontal, Sun, Heart, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: StretchHorizontal,
      title: 'Гибкость и подвижность',
      text: 'Мягко раскрываем суставы и мышцы, улучшая амплитуду движений без перегрузок.',
      color: 'from-pink-100 to-pink-50',
    },
    {
      icon: Heart,
      title: 'Снятие стресса',
      text: 'Дыхательные практики и расслабление помогают успокоить ум и тело.',
      color: 'from-emerald-100 to-emerald-50',
    },
    {
      icon: Sun,
      title: 'Энергия и бодрость',
      text: 'Нежные растяжки активируют кровообращение и наполняют день ресурсом.',
      color: 'from-sky-100 to-sky-50',
    },
    {
      icon: Zap,
      title: 'Профилактика болей',
      text: 'Регулярные занятия уменьшают напряжение и дискомфорт в теле.',
      color: 'from-amber-100 to-amber-50',
    },
  ];

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
          Преимущества стретчинга
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-slate-600"
        >
          Регулярные тренировки улучшают качество жизни — от гибкости до эмоционального состояния.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`rounded-2xl border border-slate-100 bg-gradient-to-br ${b.color} p-6 shadow-sm`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 ring-1 ring-white/60 backdrop-blur">
                  <b.icon className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{b.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
