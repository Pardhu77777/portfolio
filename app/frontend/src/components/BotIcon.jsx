import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send } from "lucide-react";

function BotIcon() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", link: "" });
  const [hideBot, setHideBot] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBot(entry.isIntersecting);
        if (entry.isIntersecting) {
          setOpen(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const link = formData.get("link") || "";
    const message = formData.get("message") || "";
    const body = `Name: ${name}%0AEmail: ${email}%0AWork Link: ${link}%0A%0A${message}`;
    window.location.href = `mailto:mopidevipardhu77@gmail.com?subject=${encodeURIComponent(
      "Project Inquiry"
    )}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setOpen(false), 1500);
  }

  return (
    <>
      {!hideBot && (
        <motion.button
          type="button"
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 via-sky-400 to-purple-500 text-slate-900 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
          animate={{ x: [0, -2, 2, -2, 2, 0], y: [0, -4, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Bot className="mx-auto" />
        </motion.button>
      )}

      <AnimatePresence>
        {open && !hideBot && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[calc(100%-3rem)] max-w-md glass-card p-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <p className="mt-2 text-sm text-slate-300">
              Share your project details. I will get back to you with a tailored plan.
            </p>
            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              <input
                name="name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
              <input
                name="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
              <input
                name="link"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                placeholder="Work link (optional)"
                value={form.link}
                onChange={(event) => setForm({ ...form, link: event.target.value })}
              />
              <textarea
                name="message"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                rows="4"
                placeholder="Tell me about your project"
                required
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
              <button type="submit" className="neon-button w-full justify-center">
                <Send size={16} />
                Let's Connect
              </button>
              {submitted && (
                <p className="text-sm text-cyan-300">Opening your email app...</p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BotIcon;
