import React from "react";
import { motion } from "framer-motion";
import { Code2, TrendingUp, Cpu, Award } from "lucide-react";
import portfolioData from "../data/portfolioData.json";

export default function About() {
  const { profile } = portfolioData;

  const icons = [Code2, TrendingUp, Cpu];

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 border-t border-gray-100 dark:border-gray-900/60"
    >
      <div className="max-w-6xl w-[90%] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
            Engineering solid applications with marketing in mind
          </h2>
        </div>

        {/* Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I am <strong className="text-gray-900 dark:text-white font-semibold">Ronak Jagad</strong>, a developer based in Mumbai who combines technical software development with real-world digital marketing and SEO expertise.
            </p>
            <p>
              While most developers only write code and marketers only run ads, my multidisciplinary background allows me to build full-stack web applications that are natively optimized for search engine crawlability, responsive user experience, high conversion rates, and automated back-office workflows.
            </p>
            <p>
              I hold a Bachelor of Commerce (B.Com) from Mumbai University, coupled with rigorous hands-on technical and digital marketing training from Grow Skills Academy. Whether developing a custom client business site, architecting a React web application, executing technical SEO audits, or building n8n automations, I focus on clean code, genuine utility, and measurable outcomes.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profile.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-[#0c101a] shadow-sm flex flex-col justify-between"
              >
                <span className="text-2xl md:text-3xl font-extrabold font-heading text-indigo-600 dark:text-indigo-400 mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.highlights.map((item, idx) => {
            const Icon = icons[idx] || Award;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0c101a] hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
