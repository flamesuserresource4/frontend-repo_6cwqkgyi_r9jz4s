import { motion } from 'framer-motion';
import { HeartHandshake, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const items = [
    {
      icon: HeartHandshake,
      title: 'Забота и внимание',
      text: 'Мы создаём безопасное пространство, где каждый чувствует поддержку и уважение к возможностям тела.',
    },
    {
      icon: ShieldCheck,
      title: 'Методика и безопасность',
      text: 'Упражнения подбираются с учётом уровня подготовки. Постепенное развитие без боли и травм.',
    },
    {
      icon: Users,
      title: 'Опытные тренеры',
      text: 'Команда сертифицированных специалистов по гибкости, ОФП и восстановлению после нагрузок.',
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
          О студии
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-slate-600"
        >
          Мы помогаем улучшать осанку, гибкость и самочувствие через мягкий стретчинг, дыхательные техники и расслабление.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-sky-50/40 p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 via-emerald-100 to-sky-100">
                  <item.icon className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
