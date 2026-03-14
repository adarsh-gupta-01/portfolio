import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaChevronDown, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

// Typing effect component
const Typewriter = ({ texts, speed = 150, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        setDisplayedText(texts[index].substring(0, subIndex));
      },
      reverse ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, pause]);

  return (
    <span className="text-accent-2">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-primary-bg"
    >
      {/* Animated Background Blobs */}
      <Motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-72 h-72 bg-accent-1/20 rounded-full blur-[100px]"
      />
      <Motion.div
        animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-2/20 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Greeting */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent-1 font-mono mb-4 text-lg sm:text-xl tracking-wide"
        >
          Hi, my name is
        </Motion.p>

        {/* Name with Gradient */}
        <Motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-text-secondary"
        >
          {personalInfo.name}.
        </Motion.h1>

        {/* Dynamic Role / Typewriter */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="h-20 sm:h-24 md:h-28" // Fixed height to prevent layout shift
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-text-secondary mb-8">
            I{" "}
            <Typewriter
              texts={[
                "build intelligent web applications.",
                "combine AI with real-world software.",
                "turn data into smart solutions.",
                "build AI-powered products."
              ]}
            />
          </h2>
        </Motion.div>

        {/* Bio */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="flex flex-wrap justify-center gap-3 text-sm font-mono">
            {[
              { icon: "⚡", label: "MERN + RAG Stack" },
              { icon: "📊", label: "CGPA 8.6 / 10.0" },
              { icon: "💡", label: "200+ DSA Solved" },
              { icon: "🎓", label: "Cisco Certified" },
              { icon: "🏆", label: "SIH 2025" },
              { icon: "✅", label: "Actively Hiring" },
            ].map(({ icon, label }, i) => (
              <Motion.span
                key={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.35 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-1/25 text-text-secondary/75 bg-accent-1/5 hover:border-accent-1/60 hover:text-text-primary hover:bg-accent-1/10 transition-all duration-200 cursor-default"
              >
                <span className="text-xs">{icon}</span>
                {label}
              </Motion.span>
            ))}
          </div>
        </Motion.div>

        {/* Icons Only (Button Removed) */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-8"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-white transition-colors transform hover:scale-110"
          >
            <FaGithub size={32} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-accent-1 transition-colors transform hover:scale-110"
          >
            <FaLinkedin size={32} />
          </a>
        </Motion.div>

        {/* Coding Profiles + Contact Buttons */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-text-secondary/30 text-text-primary text-sm font-medium hover:border-accent-1 hover:text-accent-1 transition-all duration-300"
          >
            <FaFileAlt size={16} />
            Resume
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-text-secondary/30 text-text-primary text-sm font-medium hover:border-accent-1 hover:text-accent-1 transition-all duration-300"
          >
            <SiLeetcode size={16} />
            LeetCode
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-text-secondary/30 text-text-primary text-sm font-medium hover:border-accent-1 hover:text-accent-1 transition-all duration-300"
          >
            <FaEnvelope size={16} />
            Gmail
          </a>
        </Motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <Motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary/50"
      >
        <FaChevronDown size={24} />
      </Motion.div>
    </section>
  );
};

export default Hero;
