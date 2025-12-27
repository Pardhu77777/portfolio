import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="neon-outline inline-flex">
            <span>Get In Touch</span>
          </div>
          <div className="section-line" />
          <h2 className="section-title mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/5 p-3">
                  <Mail className="text-cyan-300" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p>pardhu@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/5 p-3">
                  <MapPin className="text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p>Available Worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/5 p-3">
                  <Phone className="text-rose-300" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Availability</p>
                  <p>Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
          <motion.form
            className="glass-card p-8 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-slate-400">Your Name</label>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400">Your Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-400">Subject</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400">Message</label>
              <textarea
                rows="5"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="neon-button w-full justify-center">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
