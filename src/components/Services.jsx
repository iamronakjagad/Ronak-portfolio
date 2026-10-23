import React from "react";
import { Code, TrendingUp, Globe, Cpu, CheckCircle } from "lucide-react";
import portfolioData from "../data/portfolioData.json";

export default function Services() {
  const { services } = portfolioData;

  const iconMap = {
    1: Code,
    2: TrendingUp,
    3: Globe,
    4: Cpu,
  };

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 border-t border-gray-100 dark:border-gray-900/60"
    >
      <div className="max-w-6xl w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Value Proposition & Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
            How I can contribute to your team or client project
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-lg mt-3">
            Whether as an energetic junior software engineer or an agile freelance partner, here is where I deliver tangible business value.
          </p>
        </div>

        {/* 4 Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.id] || Code;
            return (
              <div
                key={service.id}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0c101a] hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 block">
                    {service.category}
                  </span>
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
