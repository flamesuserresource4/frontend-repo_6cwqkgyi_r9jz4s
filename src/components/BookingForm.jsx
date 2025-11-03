import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', contact: '', time: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.contact) return;
    setStatus('submitting');
    // Simulate request
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          <div>
            <h4 className="text-lg font-semibold text-emerald-700">Заявка отправлена!</h4>
            <p className="mt-1 text-sm text-emerald-800/80">
              Мы свяжемся с вами в ближайшее время, чтобы согласовать удобное время занятия.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-md"
    >
      <h3 className="text-xl font-semibold text-slate-800">Записаться на занятие</h3>
      <p className="mt-1 text-sm text-slate-600">Оставьте контакты — перезвоним в течение 15 минут.</p>

      <div className="mt-4 grid grid-cols-1 gap-3">
        <label className="block">
          <span className="mb-1 block text-sm text-slate-700">Ваше имя</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Анна"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none ring-pink-200 focus:ring-2"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-slate-700">Телефон или email</span>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
              {form.contact.includes('@') ? <Mail className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
            </div>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              placeholder="+7 (___) ___-__-__ или name@mail.com"
              className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-slate-800 outline-none ring-blue-200 focus:ring-2"
            />
          </div>
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-slate-700">Предпочтительное время</span>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
              <Calendar className="h-4 w-4" />
            </div>
            <input
              type="text"
              name="time"
              value={form.time}
              onChange={handleChange}
              placeholder="Будние 19:00"
              className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-slate-800 outline-none ring-emerald-200 focus:ring-2"
            />
          </div>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-pink-300 via-emerald-200 to-sky-300 px-5 py-3 font-semibold text-slate-800 shadow-sm transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-pink-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Отправляем…' : 'Записаться на занятие'}
      </button>
      <p className="mt-2 text-center text-xs text-slate-500">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
    </motion.form>
  );
}
