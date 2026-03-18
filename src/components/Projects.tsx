import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiZap, FiArrowUpRight } from "react-icons/fi";

const projects = [
  { title: "Signature Global Park — Sector 36, Sohna", category: "Residential Township", scope: "Complete HT/LT electrical infrastructure for 1500+ units", status: "Completed" },
  { title: "M3M Golf Estate — Sector 65, Gurugram", category: "Luxury Residential", scope: "Power distribution network and DG synchronization", status: "Completed" },
  { title: "Bestech Business Tower — Sector 66", category: "Commercial Complex", scope: "33KV substation, LT panels, and building electrical", status: "Completed" },
  { title: "Vatika INXT — Sector 83, Gurugram", category: "Mixed Use Development", scope: "Electrical design, execution, and commissioning", status: "Ongoing" },
  { title: "Signature Global City — Sector 81", category: "Integrated Township", scope: "Full township electrical infrastructure including street lighting", status: "Ongoing" },
  { title: "M3M Capital Walk — Sector 113", category: "Commercial Retail", scope: "HT/LT networks and emergency power systems", status: "Completed" },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Floating electric particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{ left: `${15 + i * 18}%`, top: `${20 + i * 12}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.8 }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-section-label mb-4 block">Our Portfolio</span>
          <h2 className="text-display text-3xl md:text-4xl text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Electric shimmer on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1">
                    <FiZap className="text-[10px]" /> {project.category}
                  </span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      project.status === "Ongoing"
                        ? "text-yellow-400 bg-yellow-400/10"
                        : "text-emerald-400 bg-emerald-400/10"
                    }`}
                  >
                    {project.status === "Ongoing" && (
                      <motion.span
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 mr-1.5 align-middle"
                      />
                    )}
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.scope}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
