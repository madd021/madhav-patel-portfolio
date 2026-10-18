import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  FileDown, 
  Github, 
  Linkedin, 
  ArrowUpRight,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ onOpenCV }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;
    setIsSent(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 10. GET IN TOUCH"
          title="LET'S BUILD SOMETHING USEFUL."
          subtitle="Open to learning, collaboration, internships and opportunities in Python, Data Science and AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            <p className="text-base text-slate-300 leading-relaxed">
              Whether you are looking for a dedicated Python/Django contributor, an enthusiastic MCA Data Science intern, or someone eager to build practical intelligent systems, I'd welcome the chance to connect.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl glass-panel border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Direct Email</span>
                    <div className="text-sm font-semibold text-white">{personalInfo.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-300 text-xs transition cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                  </button>
                  <a
                    href={personalInfo.socials.emailMailto}
                    className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold transition cursor-pointer"
                    title="Open Mail Client"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl glass-panel border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Direct Phone</span>
                    <div className="text-sm font-semibold text-white">{personalInfo.phoneDisplay}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-300 text-xs transition cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                  </button>
                  <a
                    href={personalInfo.socials.phoneTel}
                    className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold transition cursor-pointer"
                    title="Call directly"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl glass-panel border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Location</span>
                    <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500">Surat, Gujarat</span>
              </div>

            </div>

            {/* Social Buttons & Download CV */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-xs font-mono text-slate-200 transition"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-xs font-mono text-slate-200 transition"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-mono text-xs font-bold shadow-glow-cyan transition cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/20 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-display font-bold text-white">Send Direct Dispatch</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400">Response within 24h</span>
              </div>

              {isSent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out, {formState.name}. I have received your message and will respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-dark-850 border border-slate-700 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="block text-slate-400 font-mono text-[11px] mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-mono text-[11px] mb-1.5 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-mono text-[11px] mb-1.5 uppercase">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Discussing Python/Django opportunities, Data Science projects, or internship collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-600 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 hover:from-cyan-400 hover:to-sky-300 text-dark-950 font-mono text-xs font-bold shadow-glow-cyan transition cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Madhav</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
