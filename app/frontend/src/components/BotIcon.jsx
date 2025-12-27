import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send } from "lucide-react";

function BotIcon() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", link: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(false);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setTimeout(() => setOpen(false), 3000);
  }

  return (
    <>
      <motion.button
        type="button"
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 via-sky-400 to-purple-500 text-slate-900 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
        animate={{ y: [0, -5, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Bot className="mx-auto" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[calc(100%-3rem)] max-w-md glass-card p-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-semibold">Quick Project Intake</h4>
            <p className="mt-2 text-sm text-slate-300">
              Share your project details. I will get back to you with a tailored plan.
            </p>
            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                placeholder="Work link (optional)"
                value={form.link}
                onChange={(event) => setForm({ ...form, link: event.target.value })}
              />
              <textarea
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                rows="4"
                placeholder="Tell me about your project"
                required
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
              <button type="submit" className="neon-button w-full justify-center">
                <Send size={16} />
                Send Request
              </button>
              {submitted && (
                <p className="text-sm text-cyan-300">Submitted! I will reply soon.</p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BotIcon;
