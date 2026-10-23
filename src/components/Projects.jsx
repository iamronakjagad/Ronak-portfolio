import React, { useState } from "react";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import portfolioData from "../data/portfolioData.json";

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
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

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "featured", label: "Featured" },
    { key: "web", label: "Web Apps & Business" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "featured") return p.featured;
    if (filter === "web") return p.category.includes("Business") || p.category.includes("Full-Stack");
    return true;
  });

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 border-t border-gray-100 dark:border-gray-900/60"
    >
      <div className="max-w-6xl w-[90%] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 block">
              Case Studies & Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
              Featured work with practical business impact
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md">
            Each project outlines the real-world problem, technical architectural decisions, technologies used, and functional value.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                filter === cat.key
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0c101a] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-[0.92] hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-gray-900/80 text-white backdrop-blur-sm border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Implementation Details */}
                  <div className="p-3.5 rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-200/60 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                    <strong className="font-semibold text-gray-800 dark:text-gray-200 block mb-1">
                      Key Technical Decision & Execution:
                    </strong>
                    {project.details}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="px-6 md:px-7 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  Live Preview / Info
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
