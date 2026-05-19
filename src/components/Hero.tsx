"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        className="relative text-center max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium"
        >
          ✦ VTuber Community ✦
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
        >
          Welcome to{" "}
          <span className="text-accent">Re:Dawn</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          A next-generation VTuber community where creators and fans unite.
          Livestreams, gaming, events, and unforgettable moments — all in one
          place.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://discord.gg/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-accent/20"
          >
            Join The Vanguard
          </a>
          <a
            href="#about"
            className="border border-white/10 hover:border-white/30 text-white font-medium px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/5"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
