import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Code
} from 'lucide-react';
import { 
  personalInfo, 
  education, 
  experiences, 
  featuredProject, 
  skillCategories, 
  certifications, 
  strengths,
  languages 
} from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
${personalInfo.fullName}
${personalInfo.headline}
Location: ${personalInfo.location}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}

CAREER OBJECTIVE:
"${personalInfo.careerObjective}"

EDUCATION:
${education.map(e => `• ${e.degree} - ${e.institution} (${e.period})${e.scoreValue ? ` [${e.scoreLabel}: ${e.scoreValue}]` : ''}`).join('\n')}

TECHNICAL SKILLS:
${skillCategories.map(c => `• ${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

PROJECT:
• ${featuredProject.name} (${featuredProject.techStack.join(', ')})
  ${featuredProject.overview}

WORK EXPERIENCE:
${experiences.map(exp => `• ${exp.company} - ${exp.department} (${exp.period})
  ${exp.responsibilities.map(r => `  - ${r.title}: ${r.desc}`).join('\n')}`).join('\n\n')}

CERTIFICATIONS:
${certifications.map(c => `• ${c.title} - ${c.issuer} (${c.duration})`).join('\n')}

LANGUAGES:
${languages.map(l => `• ${l.name} (${l.proficiency})`).join('\n')}

STRENGTHS:
${strengths.map(s => `• ${s.name}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-4xl bg-dark-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Action Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-dark-850 border-b border-slate-800 text-white flex-shrink-0">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h3 className="font-display font-bold text-lg text-white">Interactive Curriculum Vitae</h3>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Official CV
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition cursor-pointer"
                title="Copy plain text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy Text"}</span>
              </button>

              <a
                href={personalInfo.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-dark-950 font-semibold text-xs hover:bg-cyan-400 transition cursor-pointer"
                title="Open Google Drive CV"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition ml-2 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 cv-printable bg-dark-900 font-sans text-sm leading-relaxed">
            
            {/* Header info */}
            <div className="border-b border-slate-800 pb-6">
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                {personalInfo.fullName}
              </h1>
              <p className="text-cyan-400 font-medium text-base mt-1">
                {personalInfo.headline}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.phoneDisplay}
                </span>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-cyan-400 inline-block" /> Career Objective
              </h4>
              <p className="text-slate-300 italic bg-dark-850 p-4 rounded-xl border border-slate-800">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" /> Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-cyan-500/30 pl-4 py-1">
                    <div className="flex flex-wrap justify-between items-baseline">
                      <span className="font-semibold text-white text-base">{edu.degree}</span>
                      <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm">{edu.institution} • {edu.subCollege}</p>
                    {edu.scoreValue && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        <strong className="text-cyan-300">{edu.scoreLabel}:</strong> {edu.scoreValue}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-cyan-400" /> Technical Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="p-3 bg-dark-850 rounded-lg border border-slate-800">
                    <div className="text-xs font-mono text-cyan-300 font-semibold mb-1">{cat.title}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-xs bg-dark-900 border border-slate-700 text-slate-300">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Project */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-cyan-400 inline-block" /> Major Project: {featuredProject.name}
              </h4>
              <div className="bg-dark-850 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-white text-base">{featuredProject.name}</span>
                  <div className="flex gap-1.5">
                    {featuredProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{featuredProject.overview}</p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 mt-2">
                  {featuredProject.highlights.slice(0, 4).map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-cyan-400" /> Work Experience &amp; Internship
              </h4>
              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="bg-dark-850 p-4 rounded-xl border border-slate-800">
                    <div className="flex flex-wrap justify-between items-baseline">
                      <span className="font-bold text-white text-base">{exp.company}</span>
                      <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                    </div>
                    <div className="text-xs text-slate-400 mb-2">{exp.department}</div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                      {exp.responsibilities.map((r, rIdx) => (
                        <li key={rIdx}>
                          <strong className="text-slate-200">{r.title}:</strong> {r.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Languages & Strengths */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-dark-850 p-4 rounded-xl border border-slate-800">
                <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Certifications
                </h5>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  {certifications.map((c, idx) => (
                    <li key={idx}>• {c.title} ({c.issuer})</li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-850 p-4 rounded-xl border border-slate-800">
                <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                  Languages
                </h5>
                <ul className="text-xs text-slate-300 space-y-1">
                  {languages.map((l, idx) => (
                    <li key={idx}>• {l.name} <span className="text-slate-500 text-[11px]">({l.proficiency})</span></li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-850 p-4 rounded-xl border border-slate-800">
                <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                  Core Strengths
                </h5>
                <ul className="text-xs text-slate-300 space-y-1">
                  {strengths.map((s, idx) => (
                    <li key={idx}>• {s.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-800">
              Verified from official CV of {personalInfo.fullName} • Surat, Gujarat
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
