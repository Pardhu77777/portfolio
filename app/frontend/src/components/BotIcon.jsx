import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X } from "lucide-react";

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
      <AnimatePresence>
        {!hideBot && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Pulse ring 1 */}
            {!open && (
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ border: "2px solid rgba(0,240,255,0.55)" }}
                animate={{ scale: [1, 1.75], opacity: [0.65, 0] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            {/* Pulse ring 2 */}
            {!open && (
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ border: "2px solid rgba(168,85,247,0.45)" }}
                animate={{ scale: [1, 2.1], opacity: [0.5, 0] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut", delay: 0.75 }}
              />
            )}

            {/* Main button */}
            <motion.button
              type="button"
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-slate-900"
              style={{
                background: "linear-gradient(135deg, #00f0ff 0%, #818cf8 50%, #a855f7 100%)",
                boxShadow: open
                  ? "0 0 40px rgba(168,85,247,0.5), 0 0 80px rgba(0,240,255,0.2)"
                  : "0 0 30px rgba(0,240,255,0.35), 0 0 60px rgba(168,85,247,0.15)",
              }}
              animate={open ? { rotate: 180 } : { rotate: 0, y: [0, -4, 0] }}
              transition={
                open
                  ? { duration: 0.25 }
                  : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
              }
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={20} /> : <Bot size={20} />}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && !hideBot && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[calc(100%-3rem)] max-w-md"
            style={{
              background: "rgba(8,8,16,0.96)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,240,255,0.06), 0 0 60px rgba(168,85,247,0.1)",
            }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Top gradient line */}
            <div className="h-px w-full rounded-t-[20px] bg-gradient-to-r from-cyan-400/40 via-purple-400/50 to-transparent" />

            <div className="p-6">
              <div className="mb-1 flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#00f0ff30,#a855f730)", border: "1px solid rgba(0,240,255,0.2)" }}
                >
                  <Bot size={15} style={{ color: "#00f0ff" }} />
                </div>
                <h4 className="text-[15px] font-semibold">Let's Connect</h4>
              </div>
              <p className="mt-2 text-[13px] text-slate-400">
                Share your project details. I will get back to you with a tailored plan.
              </p>

              <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
                <input
                  name="name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/[0.1]"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                />
                <input
                  name="email"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/[0.1]"
                  type="email"
                  placeholder="Your email"
                  required
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
                <input
                  name="link"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/[0.1]"
                  placeholder="Work link (optional)"
                  value={form.link}
                  onChange={(event) => setForm({ ...form, link: event.target.value })}
                />
                <textarea
                  name="message"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/[0.1] resize-none"
                  rows="4"
                  placeholder="Tell me about your project"
                  required
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                />
                <button type="submit" className="neon-button attention w-full justify-center">
                  <Send size={15} />
                  Send Message
                </button>
                {submitted && (
                  <p className="text-center text-[13px] text-cyan-400">Opening your email app...</p>
                )}
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BotIcon;
