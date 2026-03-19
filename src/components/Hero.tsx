import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiZap } from "react-icons/fi";
import heroImg from "@/assets/hero-electrical.jpg";
import ElectricalBackground from "./ElectricalBackground";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />

      <ElectricalBackground />

      {/* Glow accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              animate={{ boxShadow: ["0 0 10px hsl(207 100% 53% / 0.6)", "0 0 20px hsl(207 100% 53% / 0.9)", "0 0 10px hsl(207 100% 53% / 0.6)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="glow-dot"
            />
            <span className="text-section-label">23+ Years of Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
          >
            Engineering{" "}
            <motion.span
              className="text-primary inline-block"
              animate={{ textShadow: ["0 0 20px hsl(207 100% 53% / 0)", "0 0 30px hsl(207 100% 53% / 0.4)", "0 0 20px hsl(207 100% 53% / 0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Electrical
            </motion.span>
            <br />
            Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Powering India's largest real estate developments with world-class
            electrical infrastructure solutions since 2002.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(207 100% 53% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
            >
              Start a Project <FiArrowRight />
            </motion.a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-semibold rounded hover:border-primary hover:text-primary transition-colors"
            >
              View Our Work
            </a>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        
        <motion.div
          className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2"
          animate={{ borderColor: ["hsl(var(--muted-foreground) / 0.4)", "hsl(var(--primary))", "hsl(var(--muted-foreground) / 0.4)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
