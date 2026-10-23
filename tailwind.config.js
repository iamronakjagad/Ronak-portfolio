/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#03000a",      // deep space background
          card: "rgba(10, 5, 25, 0.45)", // glass card base
          border: "rgba(123, 97, 255, 0.12)",
          panel: "#090514",
        },
        cyber: {
          blue: "var(--color-cyber-blue, #00f0ff)",    
          purple: "var(--color-cyber-purple, #7b61ff)",  
          pink: "var(--color-cyber-pink, #ff007a)",    
          green: "var(--color-cyber-green, #39ff14)",   
        }
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 15px rgba(0, 240, 255, 0.35)",
        "neon-purple": "0 0 15px rgba(123, 97, 255, 0.35)",
        "neon-pink": "0 0 15px rgba(255, 0, 122, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-cyan": "glowCyan 2s ease-in-out infinite alternate",
        "glow-purple": "glowPurple 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 1s linear infinite",
      },
      keyframes: {
        glowCyan: {
          "0%": { boxShadow: "0 0 5px rgba(0, 240, 255, 0.2), inset 0 0 5px rgba(0, 240, 255, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 240, 255, 0.5), inset 0 0 10px rgba(0, 240, 255, 0.2)" },
        },
        glowPurple: {
          "0%": { boxShadow: "0 0 5px rgba(123, 97, 255, 0.2), inset 0 0 5px rgba(123, 97, 255, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(123, 97, 255, 0.5), inset 0 0 10px rgba(123, 97, 255, 0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      }
    },
  },
  plugins: [],
}
