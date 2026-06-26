import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/[0.12] focus:bg-white/[0.07]";

function InfoRow({ Icon, iconColor, label, value, statusDot }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
        style={{
          background: `${iconColor}12`,
          border: `1px solid ${iconColor}30`,
          boxShadow: `0 0 20px ${iconColor}20`,
        }}
      >
        <Icon size={18} style={{ color: iconColor }} />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-slate-500">{label}</p>
        <div className="mt-0.5 flex items-center gap-2">
          <p className="text-[14px] text-slate-200">{value}</p>
          {statusDot && (
            <span className="relative flex h-2 w-2">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const subject = formData.get("subject") || "Project Inquiry";
    const message = formData.get("message") || "";
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = `mailto:mopidevipardhu77@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.div
            className="neon-outline inline-flex"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>Get In Touch</span>
          </motion.div>
          <div className="section-line" />
          <motion.h2
            className="section-title mt-5 text-gradient section-title-glow"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Connect
          </motion.h2>
          <p className="section-subtitle mx-auto max-w-md">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left — contact info */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold tracking-tight">Contact Information</h3>
            <div className="premium-glass relative overflow-hidden p-6 space-y-5">
              {/* Corner glows */}
              <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-purple-500/[0.08] blur-2xl" />
              {/* Top gradient line */}
              <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-cyan-400/40 via-purple-400/30 to-transparent" />

              <InfoRow
                Icon={Mail}
                iconColor="#00f0ff"
                label="Email"
                value="mopidevipardhu77@gmail.com"
              />
              <div className="h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
              <InfoRow
                Icon={MapPin}
                iconColor="#a855f7"
                label="Location"
                value="Available Worldwide"
              />
              <div className="h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
              <InfoRow
                Icon={Phone}
                iconColor="#22c55e"
                label="Availability"
                value="Open to opportunities"
                statusDot
              />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            className="premium-glass relative overflow-hidden p-6 md:p-8 space-y-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
          >
            {/* Corner glow */}
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-purple-500/[0.09] blur-3xl" />
            {/* Top line */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-cyan-400/20" />

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-[11px] uppercase tracking-widest text-slate-500">
                  Your Name
                </label>
                <input
                  name="name"
                  className={inputClass}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-slate-500">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  className={inputClass}
                  placeholder="name@gmail.com"
                />
              </div>
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-widest text-slate-500">Subject</label>
              <input
                name="subject"
                className={inputClass}
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-widest text-slate-500">Message</label>
              <textarea
                name="message"
                rows="5"
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="neon-button attention w-full justify-center">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
