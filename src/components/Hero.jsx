import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Radial pastel overlays that don't block interaction */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(216,180,254,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(125,211,252,0.26), transparent 42%), radial-gradient(circle at 40% 80%, rgba(252,165,165,0.22), transparent 45%)',
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 sm:py-24 md:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur">
            Студия мягкого стретчинга
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Почувствуй свою гибкость — открой новые горизонты с нашим стретчингом!
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
            Нежные практики, внимательные тренеры и вдохновляющая атмосфера. Бережно улучшаем подвижность, снимаем
            напряжение и возвращаем телу лёгкость.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <div className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200 backdrop-blur">Сертифицированные тренеры</div>
            <div className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200 backdrop-blur">Индивидуальный подход</div>
            <div className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200 backdrop-blur">Мягкие безопасные практики</div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-slate-300"
            >
              Записаться
              <span className="text-sky-300">→</span>
            </button>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-5 py-3 text-slate-800 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
            >
              Узнать больше
            </a>
          </div>
        </motion.div>

        {/* Spline animation container (no negative z-index) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 h-[420px] w-full rounded-2xl border border-white/50 bg-white/50 shadow-xl backdrop-blur"
        >
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
