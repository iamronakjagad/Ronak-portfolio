import React from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import portfolioData from "../data/portfolioData.json";

export default function Experience() {
  const { timeline } = portfolioData;

  const getIcon = (type) => {
    switch (type) {
      case "experience":
        return <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case "education":
        return <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case "training":
      default:
        return <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 border-t border-gray-100 dark:border-gray-900/60 bg-gray-50/50 dark:bg-[#06080e]"
    >
      <div className="max-w-4xl w-[90%] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Career & Qualifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
            Practical Experience & Academic Background
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-lg mt-3">
            An honest, transparent progression of hands-on software development training, real-world freelance projects, and formal commerce education.
          </p>
        </div>

        {/* Clean Timeline List */}
        <div className="relative border-l-2 border-indigo-200 dark:border-gray-800 ml-4 md:ml-32 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline Bullet Icon */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 border-white dark:border-[#06080e] bg-indigo-50 dark:bg-gray-800 shadow-sm flex items-center justify-center">
                {getIcon(item.type)}
              </div>

              {/* Date stamp for desktop positioned to the left */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                <span className="text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400">
                  {item.period}
                </span>
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0c101a] shadow-sm">
                {/* Mobile date stamp */}
                <span className="md:hidden inline-block text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400 mb-1.5">
                  {item.period}
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {item.organization}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
