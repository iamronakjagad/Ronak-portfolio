import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { ParticleBackground } from "./ThreeCanvas";
import portfolioData from "../data/portfolioData.json";
import profilePhoto from "./profile.png";

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 md:py-28 overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-10 max-w-6xl w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Core Value Proposition */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              Open to Roles, Internships & Freelance
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-5">
            Building high-performing web apps &{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              growth-driven digital marketing
            </span>
          </h1>

          {/* Subtitle / Value summary */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed mb-8">
            Hi, I'm <strong className="font-semibold text-gray-900 dark:text-white">{profile.name}</strong> — a Frontend & Full-Stack Developer with hands-on expertise in React.js, WordPress, technical SEO, and marketing automation based in {profile.location}.
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg mb-8">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              <span>React.js, Tailwind, JavaScript & PHP</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              <span>Technical SEO & Growth Strategy</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              <span>Client Business Websites & Landing Pages</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              <span>n8n & Python Workflow Automation</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              View Featured Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={profile.resumeUrl}
              download="Ronak_Jagad_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-gray-700 dark:text-gray-300 font-semibold text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>

          {/* Social Proof & Location */}
          <div className="flex items-center gap-6 pt-2 border-t border-gray-200 dark:border-gray-800/80 w-full">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span>{profile.location}</span>
            </div>

            <div className="h-3 w-px bg-gray-300 dark:bg-gray-700" />

            <div className="flex items-center gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Professional Candidate Card */}
        <motion.div
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#0c101a] border border-gray-200 dark:border-gray-800 shadow-lg p-6 flex flex-col items-center text-center">
            {/* Candidate Headshot */}
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-sm mb-5 bg-gradient-to-tr from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40">
              <img
                src={profilePhoto}
                alt="Ronak Jagad"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-1">
              {profile.name}
            </h2>
            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              Developer & Growth Marketer
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Trained in Software Development and Digital Marketing at Grow Skills Academy. B.Com graduate with a focus on web engineering, SEO, and business applications.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 w-full border-t border-gray-100 dark:border-gray-800/80 pt-4">
              <div className="flex flex-col items-center p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/60">
                <span className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                  15+
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                  Projects Built
                </span>
              </div>
              <div className="flex flex-col items-center p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/60">
                <span className="text-lg font-bold font-heading text-indigo-600 dark:text-indigo-400">
                  Dual Edge
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                  Code + Marketing
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
