import React from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  React.useEffect(() => {
    // Quick, polished entrance (600ms) without blocking recruiter usability
    const timer = setTimeout(() => {
      onComplete();
    }, 650);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-white select-none pointer-events-none"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <span className="font-heading font-semibold text-xs tracking-wider text-gray-300">
          Ronak Jagad
        </span>
      </div>
    </motion.div>
  );
}
