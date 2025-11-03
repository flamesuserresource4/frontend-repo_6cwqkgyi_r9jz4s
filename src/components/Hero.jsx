import { motion } from 'framer-motion';
import BookingForm from './BookingForm';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-pink-50 via-emerald-50 to-sky-50">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,182,193,0.35),transparent_40%),_radial-gradient(circle_at_80%_30%,rgba(163,230,208,0.35),transparent_40%),_radial-gradient(circle_at_30%_80%,rgba(186,230,253,0.35),transparent_40%)]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 sm:py-24 md:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur">Студия мягкого стретчинга</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Почувствуй свою гибкость — открой новые горизонты с нашим стретчингом!
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
            Мы объединяем научный подход, бережную методику и атмосферу заботы. Наши сертифицированные тренеры помогают
            развивать гибкость, снимать напряжение и наполнять день энергией — безопасно и с удовольствием.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <div className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200 backdrop-blur">Сертифицированные тренеры</div>
            <div className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200 backdrop-blur">Индивидуальный подход</div>
            <div className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200 backdrop-blur">Мягкие безопасные практики</div>
          </div>

          <a href="#signup" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-slate-300">
            Записаться сейчас
            <span className="text-sky-300">→</span>
          </a>
        </motion.div>

        <motion.div
          id="signup"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
}
