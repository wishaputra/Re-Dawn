"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { founders } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-accent text-sm font-semibold uppercase tracking-widest"
          >
            About Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-4xl md:text-5xl font-bold tracking-tight"
          >
            Born from the Digital Frontier
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-muted text-lg leading-relaxed"
          >
            Re:Dawn is more than a Discord server — it&apos;s a movement. We
            bring together VTuber enthusiasts, content creators, gamers, and
            digital artists under one roof. Our mission is to foster a vibrant,
            inclusive community where creativity thrives and every voice matters.
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-4 text-muted text-lg leading-relaxed"
          >
            Whether you&apos;re a seasoned VTuber, an aspiring creator, or
            simply a fan who loves the culture — you belong here. Step into the
            dawn of something extraordinary.
          </motion.p>
        </motion.div>

        {/* Founders heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-accent text-sm font-semibold uppercase tracking-widest"
          >
            Leadership
          </motion.span>
          <motion.h3
            variants={fadeUp}
            custom={1}
            className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
          >
            The Founders
          </motion.h3>
        </motion.div>

        {/* Founders — alternating left/right layout */}
        <div className="space-y-20">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10 md:gap-16`}
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-accent/40 transition-colors shadow-lg shadow-accent/5">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Info */}
              <div
                className={`text-center ${
                  i % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    founder.role === "Guild Master"
                      ? "bg-accent/10 text-accent border border-accent/30"
                      : "bg-white/5 text-muted border border-white/10"
                  }`}
                >
                  {founder.role}
                </span>
                <h4 className="mt-3 text-2xl font-bold">{founder.name}</h4>
                <p className="mt-3 text-muted text-base leading-relaxed max-w-md">
                  {founder.description}
                </p>
                {/* Social links */}
                <div
                  className={`mt-4 flex items-center gap-4 ${
                    i % 2 === 0
                      ? "justify-center md:justify-start"
                      : "justify-center md:justify-end"
                  }`}
                >
                  <a
                    href={founder.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                    aria-label={`${founder.name} YouTube`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href={founder.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                    aria-label={`${founder.name} Twitter`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
