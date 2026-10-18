/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Download, 
  ExternalLink, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Brain, 
  Smartphone, 
  CheckCircle2, 
  Copy, 
  Check, 
  FileText, 
  Eye, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Cloud, 
  Code, 
  Bot, 
  Search, 
  Briefcase, 
  Layers, 
  Radio, 
  Ship, 
  Calendar, 
  Send,
  Zap,
  Globe,
  Terminal,
  Award
} from 'lucide-react';
import { RESUME_DATA } from './data/resumeData';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');
  const [skillSearchQuery, setSkillSearchQuery] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleCopy = (text: string, key: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    showToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = RESUME_DATA.personal.resumePdfUrl;
    link.download = 'Amit_Mohite_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Amit_Mohite_Resume.pdf download started!');
  };

  // Filter skills based on tab and search
  const filteredSkillCategories = RESUME_DATA.skillCategories
    .filter((cat) => selectedSkillCategory === 'All' || cat.title.toLowerCase().includes(selectedSkillCategory.toLowerCase()))
    .map((cat) => {
      if (!skillSearchQuery.trim()) return cat;
      const filteredSkills = cat.skills.filter((s) =>
        s.toLowerCase().includes(skillSearchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-sm font-medium border border-blue-400/40 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-indigo-300">
                AM
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                <span>{RESUME_DATA.personal.name}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" title="Available for hire"></span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                Mobile Tech Lead &amp; AI Engineer
              </p>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Full Resume Modal */}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all"
            >
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              <span>Preview Resume</span>
            </button>

            {/* Direct LinkedIn Button */}
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0077B5] hover:bg-[#006097] rounded-lg shadow-sm shadow-[#0077B5]/30 transition-all hover:scale-105"
            >
              <Linkedin className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            {/* Download PDF Button */}
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="about" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
          {/* Subtle background glow effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Profile Image & Quick Status Card */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative group">
                  {/* Glowing decorative border */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 rounded-3xl blur-md opacity-60 group-hover:opacity-90 transition duration-500"></div>
                  
                  {/* Main Portrait */}
                  <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl">
                    <img 
                      src={RESUME_DATA.personal.profileImage} 
                      alt="Amit Mohite - Mobile Tech Lead & AI Engineer" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    
                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-3 left-3 right-3 text-left bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700/70">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">Amit Mohite</p>
                          <p className="text-[11px] text-blue-400">Tech Lead &amp; AI Engineer</p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct quick contact tags */}
                <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs">
                  <button
                    onClick={() => handleCopy(RESUME_DATA.personal.email, 'email', 'Email')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>{RESUME_DATA.personal.email}</span>
                    {copiedKey === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                  </button>

                  <button
                    onClick={() => handleCopy(RESUME_DATA.personal.phone, 'phone', 'Phone')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{RESUME_DATA.personal.phone}</span>
                    {copiedKey === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                  </button>
                  
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{RESUME_DATA.personal.location}</span>
                  </span>
                </div>
              </div>

              {/* Bio & High-Priority Actions */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Status chip */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Certified SAFe® 6 Practitioner • 12+ Years Mobile &amp; AI Leadership</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    Architecting High-Scale <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">
                      Mobile &amp; AI-Driven
                    </span> Solutions
                  </h1>
                  
                  <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                    Tech Lead and AI Engineer with over <strong className="text-white">12 years of expertise</strong> spanning iOS, Android, and Generative AI systems. Proven record leading distributed Agile teams, engineering enterprise RAG architectures, and deploying over 20+ applications across Telecom, IoT, Healthcare, and Retail.
                  </p>
                </div>

                {/* Primary Action Buttons (Recruiter & LinkedIn Focus) */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  {/* LinkedIn Redirection Button */}
                  <a
                    href={RESUME_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0077B5] hover:bg-[#006097] shadow-lg shadow-[#0077B5]/25 hover:shadow-xl hover:shadow-[#0077B5]/40 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    <Linkedin className="w-5 h-5 fill-current" />
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>

                  {/* Download PDF Button */}
                  <button
                    onClick={handleDownloadPdf}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/45 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume (PDF)</span>
                  </button>

                  {/* View Full Document Modal Button */}
                  <button
                    onClick={() => setIsResumeModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all text-sm"
                  >
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>View Resume Document</span>
                  </button>
                </div>

                {/* Quick stats counter grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                    <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">12+</p>
                    <p className="text-xs text-slate-400 font-medium">Years Total Exp</p>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                    <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400">20+</p>
                    <p className="text-xs text-slate-400 font-medium">Apps Deployed</p>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                    <p className="text-2xl sm:text-3xl font-extrabold text-sky-400">10+ Yrs</p>
                    <p className="text-xs text-slate-400 font-medium">iOS &amp; Swift</p>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                    <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">SAFe® 6</p>
                    <p className="text-xs text-slate-400 font-medium">Certified Agile</p>
                  </div>
                </div>

                {/* Recruiter Fast-Check Snippet */}
                <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-semibold text-slate-200 block">Recruiter Quick-Summary:</span>
                    <span className="text-slate-400">Pune, India (Open to Remote / Hybrid / Relocation) • Immediate / Short notice</span>
                  </div>
                  <button
                    onClick={() => handleCopy(RESUME_DATA.recruiterNotes, 'recruiter-notes', 'Recruiter Summary')}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/80 hover:bg-blue-900 text-blue-300 border border-blue-800/60 font-medium transition-colors"
                  >
                    {copiedKey === 'recruiter-notes' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'recruiter-notes' ? 'Summary Copied!' : 'Copy Summary for ATS'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE SECTION */}
        <section id="experience" className="py-16 md:py-24 bg-slate-900/50 border-t border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2">Track Record</p>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">Professional Experience</h2>
              </div>
              <p className="text-sm text-slate-400 mt-2 md:mt-0 max-w-md">
                12+ years of progressive leadership from Software Engineer to Enterprise Mobile Architect &amp; AI Engineer.
              </p>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-800">
              {RESUME_DATA.experiences.map((exp, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-start group">
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/20 z-10">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} w-full`}>
                    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 shadow-xl transition-all hover:-translate-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-medium text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-900/40">
                          {exp.period}
                        </span>
                        {exp.badge && (
                          <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                      <p className="text-sm font-semibold text-slate-300">{exp.company} <span className="text-slate-500 font-normal">| {exp.location}</span></p>
                      
                      {exp.summary && (
                        <p className="text-xs text-slate-400 mt-2 italic leading-relaxed border-l-2 border-blue-500/50 pl-3">
                          {exp.summary}
                        </p>
                      )}

                      <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300">
                        {exp.achievements.map((item, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1 font-bold">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIndex) => (
                          <span key={tIndex} className="text-[11px] font-mono bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SHOWCASE */}
        <section id="projects" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2">Architectural Highlights</p>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">Key Production Projects</h2>
              </div>
              <p className="text-sm text-slate-400 mt-2 md:mt-0 max-w-md">
                Demonstrated success across Generative AI, carrier telecom frameworks, IoT hardware, and high-performance apps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESUME_DATA.projects.map((proj) => (
                <div 
                  key={proj.id} 
                  className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/40 p-6 flex flex-col justify-between shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {proj.id.includes('rag') && <Brain className="w-5 h-5" />}
                        {proj.id.includes('telecom') && <Zap className="w-5 h-5" />}
                        {proj.id.includes('iot') && <Radio className="w-5 h-5" />}
                        {proj.id.includes('maritime') && <Ship className="w-5 h-5" />}
                        {proj.id.includes('scheduler') && <Calendar className="w-5 h-5" />}
                        {proj.id.includes('retierly') && <Layers className="w-5 h-5" />}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                        {proj.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-blue-300 font-medium mt-1">
                      {proj.tagline}
                    </p>

                    <ul className="mt-4 space-y-2 text-xs text-slate-300">
                      {proj.description.map((bullet, bidx) => (
                        <li key={bidx} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    {proj.metrics && (
                      <div className="mb-3 text-[11px] font-medium text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-900/40 px-2.5 py-1 rounded-lg">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{proj.metrics}</span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {proj.techStack.map((tech, tidx) => (
                        <span key={tidx} className="text-[10px] font-mono bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS MATRIX */}
        <section id="skills" className="py-16 md:py-24 bg-slate-900/50 border-t border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2">Comprehensive Competency</p>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">Technical Skills &amp; Architecture</h2>
              </div>
              <div className="mt-4 md:mt-0 relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search skills (e.g. SwiftUI, RAG)..."
                  value={skillSearchQuery}
                  onChange={(e) => setSkillSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Category filter tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['All', 'AI & ML', 'Mobile', 'APIs', 'Architecture', 'Hardware', 'Databases', 'Fintech'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedSkillCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedSkillCategory === category
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkillCategories.map((cat, idx) => (
                <div key={idx} className="p-5 bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-900/40">
                      {cat.title.includes('AI') && <Brain className="w-4 h-4" />}
                      {cat.title.includes('Mobile') && <Smartphone className="w-4 h-4" />}
                      {cat.title.includes('APIs') && <Globe className="w-4 h-4" />}
                      {cat.title.includes('Reactive') && <Zap className="w-4 h-4" />}
                      {cat.title.includes('Architecture') && <Layers className="w-4 h-4" />}
                      {cat.title.includes('Hardware') && <Radio className="w-4 h-4" />}
                      {cat.title.includes('Databases') && <Terminal className="w-4 h-4" />}
                      {cat.title.includes('Fintech') && <ShieldCheck className="w-4 h-4" />}
                      {cat.title.includes('DevOps') && <Bot className="w-4 h-4" />}
                    </div>
                    <h3 className="font-bold text-white text-sm">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="text-xs bg-slate-950 hover:bg-blue-950 hover:text-blue-300 hover:border-blue-700/50 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS & EDUCATION */}
        <section id="certifications" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2">Validated Credentials</p>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Certificates &amp; Education</h2>
              <p className="text-sm text-slate-400 mt-2">
                Continuous mastery in Agile enterprise scaling, Google Cloud machine learning, and Generative AI prompt architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="p-5 bg-slate-900 rounded-2xl border border-slate-800 flex items-start gap-4 hover:border-blue-500/30 transition-all hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900/60 to-indigo-900/40 border border-blue-700/40 flex items-center justify-center text-blue-400 flex-shrink-0">
                    {cert.iconType === 'ShieldCheck' && <ShieldCheck className="w-5 h-5 text-blue-400" />}
                    {cert.iconType === 'Cloud' && <Cloud className="w-5 h-5 text-sky-400" />}
                    {cert.iconType === 'Sparkles' && <Sparkles className="w-5 h-5 text-amber-400" />}
                    {cert.iconType === 'Code' && <Code className="w-5 h-5 text-emerald-400" />}
                    {cert.iconType === 'Bot' && <Bot className="w-5 h-5 text-purple-400" />}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-medium text-blue-400 block mb-1">
                      {cert.badgeText}
                    </span>
                    <h3 className="font-bold text-white text-sm leading-snug">{cert.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
                    {cert.year && (
                      <span className="text-[10px] font-mono text-slate-500 mt-2 inline-block">
                        {cert.year}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Education Card */}
              <div className="p-5 bg-gradient-to-br from-slate-900 to-blue-950/40 rounded-2xl border border-blue-900/50 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-semibold text-blue-400 block mb-1">
                    Formal Academic Qualification
                  </span>
                  <h3 className="font-bold text-white text-sm leading-snug">{RESUME_DATA.education.degree}</h3>
                  <p className="text-xs text-slate-300 mt-1">{RESUME_DATA.education.institution}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Computer Science &amp; Software Applications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECT & CONTACT SECTION (Recruiter Call to Action) */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-slate-900/50 to-slate-950 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Let's Discuss Opportunities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Strengthen Your Engineering Leadership?
            </h2>
            <p className="text-base text-slate-300 mt-3 max-w-2xl mx-auto">
              Open to Mobile Tech Lead, Staff iOS/Android Engineer, and AI Engineering roles. Fast response guaranteed via LinkedIn or direct email.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {/* LinkedIn Primary Button */}
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-[#0077B5] hover:bg-[#006097] shadow-xl shadow-[#0077B5]/30 hover:scale-105 transition-all"
              >
                <Linkedin className="w-5 h-5 fill-current" />
                <span>Open LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              {/* Download Resume PDF Button */}
              <button
                onClick={handleDownloadPdf}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:scale-105 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume (PDF)</span>
              </button>

              {/* Preview Resume Button */}
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>Preview Document</span>
              </button>
            </div>

            {/* Contact details cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-left">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Direct Email</p>
                  <p className="text-sm font-bold text-white">{RESUME_DATA.personal.email}</p>
                </div>
                <button
                  onClick={() => handleCopy(RESUME_DATA.personal.email, 'contact-email', 'Email')}
                  className="p-2 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors"
                  title="Copy Email"
                >
                  {copiedKey === 'contact-email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                  <p className="text-sm font-bold text-white">{RESUME_DATA.personal.phone}</p>
                </div>
                <button
                  onClick={() => handleCopy(RESUME_DATA.personal.phone, 'contact-phone', 'Phone')}
                  className="p-2 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors"
                  title="Copy Phone"
                >
                  {copiedKey === 'contact-phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-bold text-white">{RESUME_DATA.personal.location}</p>
                </div>
                <span className="p-2 text-blue-400">
                  <MapPin className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Amit Mohite. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a 
              href={RESUME_DATA.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={handleDownloadPdf}
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
            <a 
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Full Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownload={handleDownloadPdf}
      />
    </div>
  );
}
