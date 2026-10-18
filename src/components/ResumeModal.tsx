import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-500/30 flex-shrink-0">
              <img src={RESUME_DATA.personal.profileImage} alt={RESUME_DATA.personal.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-slate-100 leading-tight">{RESUME_DATA.personal.name} — Full Resume</h3>
              <p className="text-xs text-slate-400">Official 3-Page Resume Document • PDF Ready</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Resume"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={onDownload}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content (Formatted Resume Document) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-200">
          {/* Header */}
          <div className="border-b border-slate-700/80 pb-6 text-center">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">{RESUME_DATA.personal.name}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 mt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-blue-400" /> {RESUME_DATA.personal.location}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-blue-400" /> {RESUME_DATA.personal.phone}</span>
              <span>•</span>
              <a href={`mailto:${RESUME_DATA.personal.email}`} className="flex items-center gap-1 text-blue-400 hover:underline">
                <Mail className="w-3.5 h-3.5" /> {RESUME_DATA.personal.email}
              </a>
            </div>
            <div className="mt-2">
              <a 
                href={RESUME_DATA.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 hover:underline"
              >
                <span>linkedin.com/in/amit-mohite-a5899047</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Educational Qualification */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-blue-400 border-b border-blue-500/20 pb-1.5 mb-3">
              Educational Qualification
            </h2>
            <div className="text-sm">
              <span className="font-bold text-white">{RESUME_DATA.education.degree}</span>
              <span className="text-slate-300"> — {RESUME_DATA.education.institution}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-blue-400 border-b border-blue-500/20 pb-1.5 mb-3">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-blue-400 border-b border-blue-500/20 pb-1.5 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
              {RESUME_DATA.skillCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 py-1 border-b border-slate-800/60 last:border-0">
                  <span className="font-semibold text-slate-200 w-44 flex-shrink-0">{cat.title}:</span>
                  <span className="text-slate-300 flex-1">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates & Courses */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-blue-400 border-b border-blue-500/20 pb-1.5 mb-3">
              Certificates &amp; Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">{cert.title}</span>
                    <span className="text-slate-400 text-xs block">({cert.issuer})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center justify-between border-b border-blue-500/20 pb-1.5 mb-3">
              <h2 className="text-xs font-bold tracking-wider uppercase text-blue-400">
                Experience
              </h2>
              <span className="text-xs text-slate-400 italic">12+ Years Total Experience • 20+ Apps Deployed</span>
            </div>

            <div className="space-y-6">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">{exp.role}</h3>
                      <p className="text-xs text-blue-400 font-medium">{exp.company} — {exp.location}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono bg-slate-800/80 px-2.5 py-1 rounded-md self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-1.5 mt-3 text-xs sm:text-sm text-slate-300">
                    {exp.achievements.map((item, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1 text-xs">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/80">
                    {exp.technologies.map((t, tidx) => (
                      <span key={tidx} className="text-[11px] font-mono bg-blue-950/60 text-blue-300 border border-blue-900/40 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-blue-400 border-b border-blue-500/20 pb-1.5 mb-3">
              Project Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESUME_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-3.5 bg-slate-950/50 rounded-xl border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white text-xs sm:text-sm">{proj.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{proj.tagline}</p>
                    <ul className="space-y-1 mt-2 text-xs text-slate-300">
                      {proj.description.map((d, didx) => (
                        <li key={didx} className="flex items-start gap-1.5">
                          <span className="text-blue-400 mt-0.5">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800 flex flex-wrap gap-1">
                    {proj.techStack.map((tech, tidx) => (
                      <span key={tidx} className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-slate-950">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Ready to interview or discuss technical roles? Connect on LinkedIn or download PDF.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-sky-400 hover:text-white hover:bg-sky-950 border border-sky-800/60 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
            </a>
            <button
              onClick={onDownload}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
