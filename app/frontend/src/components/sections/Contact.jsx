import React from "react";
import { BriefcaseBusiness, Mail, MapPin, Send } from "lucide-react";
import { SocialIcons } from "../layout/Footer";
import SectionHeading from "../ui/SectionHeading";

function InfoRow({ Icon, label, value, href }) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-800 shadow-[0_10px_22px_-12px_rgba(11,27,63,0.6)]">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">{label}</p>
        <p className="mt-0.5 break-all text-[15px] font-medium text-white">{value}</p>
      </div>
    </>
  );

  const rowClass = "flex items-center gap-4 rounded-2xl p-3 -mx-3 transition";
  return href ? (
    <a href={href} className={`${rowClass} hover:bg-white/10`}>
      {content}
    </a>
  ) : (
    <div className={rowClass}>{content}</div>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const subject = formData.get("subject") || "Project Inquiry";
    const message = formData.get("message") || "";
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:mopidevipardhu77@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="section">
      <div className="container-site">
        <SectionHeading
          label="Get In Touch"
          title="Let's Connect"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
          center
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass reveal flex flex-col p-6 md:p-8">
            <h3 className="font-display text-xl font-bold">Contact Information</h3>
            <div className="title-bar" />
            <div className="mt-6 space-y-2">
              <InfoRow Icon={Mail} label="Email" value="mopidevipardhu77@gmail.com" href="mailto:mopidevipardhu77@gmail.com" />
              <InfoRow Icon={MapPin} label="Location" value="Available Worldwide" />
              <InfoRow Icon={BriefcaseBusiness} label="Availability" value="Open to opportunities" />
            </div>
            <div className="mt-8 border-t border-white/15 pt-6 lg:mt-auto">
              <SocialIcons />
            </div>
          </div>

          <form className="glass reveal space-y-4 p-6 md:p-8" style={{ "--d": "100ms" }} onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="contact-name">Your Name</label>
                <input id="contact-name" name="name" className="input" placeholder="Your Name" required />
              </div>
              <div>
                <label className="label" htmlFor="contact-email">Your Email</label>
                <input id="contact-email" name="email" type="email" className="input" placeholder="name@gmail.com" required />
              </div>
            </div>
            <div>
              <label className="label" htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" className="input" placeholder="Project Inquiry" />
            </div>
            <div>
              <label className="label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                className="input resize-y"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button type="submit" className="btn-grad w-full">
              Send Message <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
