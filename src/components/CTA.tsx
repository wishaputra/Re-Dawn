"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="join" className="py-32 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Ready to Join the{" "}
          <span className="text-accent">Vanguard</span>?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="mt-6 text-muted text-lg max-w-xl mx-auto"
        >
          Step into re:DAWN and become part of a community that&apos;s
          redefining VTuber culture. Your new dawn starts here.
        </motion.p>
        <motion.div variants={fadeUp} custom={2} className="mt-10">
          <a
            href="https://discord.gg/JxrG7RSpnM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 shadow-xl shadow-accent/25"
          >
            Join The Vanguard
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
