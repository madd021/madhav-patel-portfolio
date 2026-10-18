import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, PlusCircle, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { certifications } from '../data/portfolioData';

export default function CertificationsSection() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 07. CREDENTIALS"
          title="Certifications &amp; Verification"
          subtitle="Documented industry certifications validating hands-on engineering internships and ongoing technical employment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Real Verified Certificates from CV */}
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800 hover:border-cyan-500/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> {cert.status}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  {cert.type}
                </span>

                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-sm font-medium text-slate-300">
                  {cert.issuer}
                </p>

                <p className="text-xs font-mono text-slate-500 mt-1">
                  {cert.duration}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
                  <strong className="text-slate-300">Domain:</strong> {cert.field}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Official Record</span>
                <span className="text-cyan-400">Document Issued</span>
              </div>
            </motion.div>
          ))}

          {/* Dedicated Future Roadmap Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl border-2 border-dashed border-slate-800/80 hover:border-cyan-500/30 flex flex-col justify-between bg-dark-900/20 backdrop-blur-sm"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-dark-850 border border-slate-800 flex items-center justify-center text-slate-400 mb-4">
                <PlusCircle className="w-5 h-5" />
              </div>

              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                Postgraduate Roadmap
              </span>

              <h3 className="text-xl font-display font-bold text-slate-200 mb-2">
                More Certifications Coming Soon
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                Currently pursuing targeted certifications in Python for Data Science, Machine Learning algorithms, and Retrieval-Augmented Generation pipelines as part of MCA coursework.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In progress at MIT-ADT</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
