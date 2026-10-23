import React, { useState } from "react";
import portfolioData from "../data/portfolioData.json";
import { Code, Server, TrendingUp, Wrench } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState("all");

  const categoryMeta = {
    frontend: {
      label: "Frontend",
      icon: Code,
      badge: "UI & Components",
    },
    backend: {
      label: "Backend & Database",
      icon: Server,
      badge: "APIs & Data",
    },
    marketing: {
      label: "Digital Marketing & SEO",
      icon: TrendingUp,
      badge: "Organic Growth",
    },
    tools: {
      label: "Tools & Automation",
      icon: Wrench,
      badge: "Productivity",
    },
  };

  const categories = Object.keys(skills);

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 border-t border-gray-100 dark:border-gray-900/60 bg-gray-50/50 dark:bg-[#06080e]"
    >
      <div className="max-w-6xl w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 block">
              Technical & Professional Stack
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
              Skills grounded in practical implementation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md">
            Categorized by functional domain. No arbitrary percentage bars — each skill listed represents hands-on training or active project usage.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              activeTab === "all"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            All Competencies
          </button>
          {categories.map((catKey) => {
            const meta = categoryMeta[catKey];
            const Icon = meta?.icon || Code;
            return (
              <button
                key={catKey}
                onClick={() => setActiveTab(catKey)}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeTab === catKey
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {meta?.label || catKey}
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories
            .filter((catKey) => activeTab === "all" || activeTab === catKey)
            .map((catKey) => {
              const meta = categoryMeta[catKey];
              const Icon = meta?.icon || Code;
              const items = skills[catKey];

              return (
                <div
                  key={catKey}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0c101a] p-6 shadow-sm flex flex-col"
                >
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold font-heading text-gray-900 dark:text-white">
                        {meta?.label}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skillName, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-gray-700/60 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
